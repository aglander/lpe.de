import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import XLSX from 'xlsx';

const DEFAULT_FILE = 'data/seo/LPE.de SEO.xlsx';
const DEFAULT_SHEET = 'Tabellenblatt1';
const USAGE_FILE = '.cache/serpapi-usage.json';
const MONTHLY_LIMIT = 250;
const DELTA_DAYS = 30;

const COL = {
  PLZ: 1,
  ORT: 2,
  URL: 3,
  KEYWORD: 4,
  ORGANIC: 5,
  LOCAL: 6,
  STARS: 7,
  DATE: 9,
  COMMENT: 10,
};

function parseArgs(argv) {
  const out = { dryRun: false, file: DEFAULT_FILE, sheet: DEFAULT_SHEET };
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === '--dry-run') out.dryRun = true;
    else if (a === '--file') out.file = argv[i + 1] || DEFAULT_FILE;
    else if (a.startsWith('--file=')) out.file = a.slice('--file='.length);
    else if (a === '--sheet') out.sheet = argv[i + 1] || DEFAULT_SHEET;
    else if (a.startsWith('--sheet=')) out.sheet = a.slice('--sheet='.length);
    else if (a === '--max-requests') out.maxRequests = Number(argv[i + 1]);
    else if (a.startsWith('--max-requests=')) out.maxRequests = Number(a.slice('--max-requests='.length));
  }
  if (out.maxRequests !== undefined && (!Number.isFinite(out.maxRequests) || out.maxRequests < 0)) {
    throw new Error('--max-requests muss >= 0 sein.');
  }
  return out;
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function monthKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  return `${y}-${m}`;
}

function readUsage(filePath) {
  if (!fs.existsSync(filePath)) return { month: monthKey(), used: 0 };
  try {
    const parsed = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const current = monthKey();
    if (parsed.month !== current) return { month: current, used: 0 };
    return { month: current, used: Number(parsed.used) || 0 };
  } catch {
    return { month: monthKey(), used: 0 };
  }
}

function writeUsage(filePath, usage) {
  ensureDir(filePath);
  fs.writeFileSync(filePath, JSON.stringify({ ...usage, updatedAt: new Date().toISOString() }, null, 2));
}

function addr(row, col) {
  return XLSX.utils.encode_cell({ r: row - 1, c: col - 1 });
}

function getCellValue(ws, row, col) {
  const cell = ws[addr(row, col)];
  return cell ? cell.v : undefined;
}

function setNumberCell(ws, row, col, value) {
  ws[addr(row, col)] = { t: 'n', v: value };
}

function setStringCell(ws, row, col, value) {
  ws[addr(row, col)] = { t: 's', v: String(value) };
}

function clearCell(ws, row, col) {
  delete ws[addr(row, col)];
}

function toExcelSerial(date) {
  const utcMidnight = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  return utcMidnight / 86400000 + 25569;
}

function excelSerialToDate(value) {
  if (typeof value !== 'number' || Number.isNaN(value)) return null;
  const millis = (value - 25569) * 86400000;
  const d = new Date(millis);
  return Number.isNaN(d.getTime()) ? null : d;
}

function parseDateCell(value) {
  if (value === undefined || value === null || value === '') return null;
  if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;
  if (typeof value === 'number') return excelSerialToDate(value);
  const parsed = new Date(String(value));
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function daysBetween(a, b) {
  const msPerDay = 86400000;
  return Math.floor((a.getTime() - b.getTime()) / msPerDay);
}

function shouldProcess(dateValue, now = new Date()) {
  const d = parseDateCell(dateValue);
  if (!d) return true;
  return daysBetween(now, d) >= DELTA_DAYS;
}

function normalizeUrl(url) {
  if (!url) return '';
  return String(url)
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/\/+$/, '');
}

function urlsMatch(candidate, target) {
  const a = normalizeUrl(candidate);
  const b = normalizeUrl(target);
  if (!a || !b) return false;
  return a === b || a.startsWith(`${b}/`) || b.startsWith(`${a}/`);
}

function hasStarsFromResult(result) {
  if (!result) return false;
  const text = `${JSON.stringify(result.rich_snippet || {})} ${JSON.stringify(result.extensions || [])}`.toLowerCase();
  return text.includes('rating') || text.includes('review') || text.includes('star');
}

function findOrganic(data, targetUrl) {
  const list = Array.isArray(data?.organic_results) ? data.organic_results : [];
  for (const item of list) {
    if (urlsMatch(item?.link, targetUrl)) {
      return {
        position: item?.position ?? '',
        stars: hasStarsFromResult(item),
      };
    }
  }
  return { position: '', stars: false };
}

function findLocal(data, targetUrl) {
  const places = data?.local_results?.places;
  const list = Array.isArray(places) ? places : [];
  for (const place of list) {
    const website = place?.links?.website || place?.website || '';
    if (urlsMatch(website, targetUrl)) return place?.position ?? '';
  }
  return '';
}

function normalizePlz(plzValue) {
  if (plzValue === undefined || plzValue === null || plzValue === '') return '';
  if (typeof plzValue === 'number' && Number.isFinite(plzValue)) {
    return String(Math.trunc(plzValue)).padStart(5, '0');
  }
  const digits = String(plzValue).replace(/\D/g, '');
  if (!digits) return '';
  return digits.slice(0, 5).padStart(5, '0');
}

function buildLocationCandidates(_plzValue, ortValue) {
  const ortRaw = (ortValue || '').toString().trim();
  const candidates = [];

  if (ortRaw) {
    const ortNoHyphen = ortRaw.replace(/-/g, ' ').trim();
    if (ortNoHyphen) candidates.push(`${ortNoHyphen}, Germany`);

    if (/^berlin[-\\s]/i.test(ortRaw)) {
      candidates.push('Berlin, Germany');
    }
  }

  candidates.push('Germany');
  return [...new Set(candidates)];
}

function isUnsupportedLocationError(message) {
  return /unsupported .*location/i.test(message || '');
}

async function fetchSerp({ apiKey, keyword, locationCandidates }) {
  let lastError = null;

  for (const location of locationCandidates) {
    const params = new URLSearchParams({
      engine: 'google',
      q: keyword,
      google_domain: 'google.de',
      gl: 'de',
      hl: 'de',
      num: '100',
      location,
      api_key: apiKey,
    });

    const url = `https://serpapi.com/search.json?${params.toString()}`;
    let response;
    try {
      response = await fetch(url);
    } catch (error) {
      const code = error && typeof error === 'object' && 'code' in error ? error.code : 'REQUEST_FAILED';
      throw new Error(`Netzwerkfehler bei SerpAPI (${code}).`);
    }

    const text = await response.text();

    if (!response.ok) {
      const msg = `SerpAPI ${response.status}: ${text.slice(0, 300)}`;
      if (isUnsupportedLocationError(msg)) {
        lastError = new Error(msg);
        continue;
      }
      throw new Error(msg);
    }

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error('SerpAPI Antwort konnte nicht geparsed werden.');
    }

    if (data?.error) {
      const msg = `SerpAPI Fehler: ${data.error}`;
      if (isUnsupportedLocationError(msg)) {
        lastError = new Error(msg);
        continue;
      }
      throw new Error(msg);
    }

    return { data, locationUsed: location };
  }

  if (lastError) throw lastError;
  throw new Error('SerpAPI Anfrage fehlgeschlagen.');
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function sanitizeErrorMessage(message) {
  if (!message) return 'Unbekannter Fehler';
  return String(message)
    .replace(/api_key=([^&\\s]+)/gi, 'api_key=[REDACTED]')
    .replace(/https?:\/\/[^\s]+/gi, '[URL_REDACTED]');
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const filePath = path.resolve(args.file);
  const usagePath = path.resolve(USAGE_FILE);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Datei nicht gefunden: ${filePath}`);
  }

  const usage = readUsage(usagePath);
  const remaining = Math.max(0, MONTHLY_LIMIT - usage.used);
  const maxRequests = Math.min(
    args.maxRequests !== undefined ? Math.floor(args.maxRequests) : remaining,
    remaining,
  );

  if (!args.dryRun && !process.env.SERPAPI_KEY) {
    throw new Error('SERPAPI_KEY fehlt in der Umgebung.');
  }

  const workbook = XLSX.readFile(filePath, { cellDates: false });
  const sheet = workbook.Sheets[args.sheet];
  if (!sheet) {
    throw new Error(`Sheet "${args.sheet}" nicht gefunden.`);
  }

  const range = XLSX.utils.decode_range(sheet['!ref'] || 'A1:J1');
  const candidates = [];
  const now = new Date();

  for (let row = 2; row <= range.e.r + 1; row += 1) {
    const url = getCellValue(sheet, row, COL.URL);
    const keyword = getCellValue(sheet, row, COL.KEYWORD);
    const dateVal = getCellValue(sheet, row, COL.DATE);

    if (!url || !keyword) continue;
    if (!shouldProcess(dateVal, now)) continue;

    candidates.push({
      row,
      plz: getCellValue(sheet, row, COL.PLZ),
      ort: getCellValue(sheet, row, COL.ORT),
      url: String(url).trim(),
      keyword: String(keyword).trim(),
    });
  }

  const queue = candidates.slice(0, maxRequests);

  console.log(`Datei: ${filePath}`);
  console.log(`Sheet: ${args.sheet}`);
  console.log(`Monat: ${usage.month}, genutzt: ${usage.used}/${MONTHLY_LIMIT}, Rest: ${remaining}`);
  console.log(`Delta-Kandidaten: ${candidates.length}`);
  console.log(`Geplante Requests in diesem Lauf: ${queue.length}`);

  if (args.dryRun) {
    console.log('Dry-Run aktiv, keine API-Aufrufe und keine Dateiänderungen.');
    return;
  }

  let processed = 0;
  let errors = 0;
  let consumed = 0;

  for (let i = 0; i < queue.length; i += 1) {
    const item = queue[i];
    if (usage.used >= MONTHLY_LIMIT) {
      console.log('Monatslimit erreicht, Lauf wird beendet.');
      break;
    }

    const locationCandidates = buildLocationCandidates(item.plz, item.ort);
    console.log(`[${i + 1}/${queue.length}] Zeile ${item.row}: ${item.keyword} @ ${locationCandidates[0]}`);

    try {
      const { data, locationUsed } = await fetchSerp({
        apiKey: process.env.SERPAPI_KEY,
        keyword: item.keyword,
        locationCandidates,
      });
      if (locationUsed !== locationCandidates[0]) {
        console.log(`  Fallback-Location genutzt: ${locationUsed}`);
      }

      const organic = findOrganic(data, item.url);
      const localPosition = findLocal(data, item.url);

      if (organic.position === '') clearCell(sheet, item.row, COL.ORGANIC);
      else setNumberCell(sheet, item.row, COL.ORGANIC, Number(organic.position));

      if (localPosition === '') clearCell(sheet, item.row, COL.LOCAL);
      else setNumberCell(sheet, item.row, COL.LOCAL, Number(localPosition));

      setStringCell(sheet, item.row, COL.STARS, organic.stars ? 'J' : 'N');
      setNumberCell(sheet, item.row, COL.DATE, toExcelSerial(now));
      sheet[addr(item.row, COL.DATE)].z = 'dd.mm.yyyy';
      clearCell(sheet, item.row, COL.COMMENT);

      processed += 1;
    } catch (error) {
      const message = sanitizeErrorMessage(error instanceof Error ? error.message : String(error));
      setStringCell(sheet, item.row, COL.COMMENT, message.slice(0, 250));
      errors += 1;
    } finally {
      usage.used += 1;
      consumed += 1;
      writeUsage(usagePath, usage);
    }

    if (i < queue.length - 1) await sleep(1200);
  }

  XLSX.writeFile(workbook, filePath);

  console.log('--- Summary ---');
  console.log(`Verarbeitet: ${processed}`);
  console.log(`Fehler: ${errors}`);
  console.log(`Verbrauchte Requests: ${consumed}`);
  console.log(`Monatsnutzung aktuell: ${usage.used}/${MONTHLY_LIMIT}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
