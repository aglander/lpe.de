import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const API_URL = "https://www.provenexpert.com/api/v1/rating/summary/get";
const OUTPUT_PATH = path.resolve("src/data/provenexpert.json");

const apiId = process.env.PROVENEXPERT_API_ID ?? process.env.PROVENEXPERT_USERNAME;
const apiKey = process.env.PROVENEXPERT_API_KEY;

if (!apiId || !apiKey) {
  console.error(
    "Missing ProvenExpert credentials. Set PROVENEXPERT_API_ID (or PROVENEXPERT_USERNAME) and PROVENEXPERT_API_KEY.",
  );
  process.exit(1);
}

async function main() {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${apiId}:${apiKey}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: new URLSearchParams(),
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${await response.text()}`);
  }

  const payload = await response.json();

  if (payload.status !== "success") {
    throw new Error(`API error: ${JSON.stringify(payload.errors ?? payload)}`);
  }

  const output = {
    status: payload.status,
    ratingValue: payload.ratingValue,
    reviewCount: payload.reviewCount,
    recommendationRate: payload.recommendationRate,
    fetchedAt: new Date().toISOString(),
  };

  await mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`, "utf8");

  console.log(`Saved ProvenExpert summary to ${OUTPUT_PATH}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
