import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const API_URL = "https://www.provenexpert.com/api/v1/rating/get";
const PAGE_SIZE = 100;
const OUTPUT_PATH = path.resolve("src/data/provenexpert-reviews-raw.json");

const apiId = process.env.PROVENEXPERT_API_ID ?? process.env.PROVENEXPERT_USERNAME;
const apiKey = process.env.PROVENEXPERT_API_KEY;

if (!apiId || !apiKey) {
  console.error(
    "Missing ProvenExpert credentials. Set PROVENEXPERT_API_ID (or PROVENEXPERT_USERNAME) and PROVENEXPERT_API_KEY.",
  );
  process.exit(1);
}

function buildBody(offset) {
  const params = new URLSearchParams();
  params.set("limit", String(PAGE_SIZE));
  params.set("offset", String(offset));
  return params;
}

async function fetchRatingsPage(offset) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${apiId}:${apiKey}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: buildBody(offset),
  });

  if (!response.ok) {
    const responseText = await response.text();
    throw new Error(`HTTP ${response.status}: ${responseText}`);
  }

  const payload = await response.json();

  if (payload.status !== "success") {
    throw new Error(`API error: ${JSON.stringify(payload.errors ?? payload)}`);
  }

  return payload;
}

async function fetchAllRatings() {
  const ratings = [];
  let offset = 0;

  while (true) {
    const payload = await fetchRatingsPage(offset);
    const pageRatings = Object.entries(payload.ratings ?? {}).map(([id, rating]) => ({
      id,
      ...rating,
    }));

    ratings.push(...pageRatings);
    console.log(`Fetched ${pageRatings.length} ratings at offset ${offset}.`);

    if (pageRatings.length < PAGE_SIZE) {
      return ratings;
    }

    offset += PAGE_SIZE;
  }
}

async function main() {
  const ratings = await fetchAllRatings();
  const output = {
    status: "success",
    fetchedAt: new Date().toISOString(),
    totalRatings: ratings.length,
    ratings,
  };

  await mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`, "utf8");

  console.log(`Saved ${ratings.length} ratings to ${OUTPUT_PATH}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
