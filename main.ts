import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// The entry itself is the X post — the house reads it straight from X.
// This script just hands the post record over: it copies POST.json
// (which holds the live post URL) into the output folder.
const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const postPath = join(botDir, "POST.json");
// Fail fast on a broken POST.json instead of copying a bad file over.
JSON.parse(readFileSync(postPath, "utf8"));

mkdirSync(outDir, { recursive: true });
copyFileSync(postPath, join(outDir, "POST.json"));
console.log(`POST.json copied to ${join(outDir, "POST.json")}`);
