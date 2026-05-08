#!/usr/bin/env node
/**
 * Bump version across all project files.
 * Usage: node scripts/bump-version.mjs <new-version>
 * Example: node scripts/bump-version.mjs 1.0.12
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const newVersion = process.argv[2];
if (!newVersion || !/^\d+\.\d+\.\d+$/.test(newVersion)) {
  console.error("Usage: node scripts/bump-version.mjs <major.minor.patch>");
  console.error("Example: node scripts/bump-version.mjs 1.0.12");
  process.exit(1);
}

function replaceInFile(filePath, pattern, replacement) {
  const content = readFileSync(filePath, "utf-8");
  const updated = content.replace(pattern, replacement);
  if (content === updated) {
    console.warn(`  ⚠ No change in ${filePath}`);
    return false;
  }
  writeFileSync(filePath, updated, "utf-8");
  console.log(`  ✓ ${filePath}`);
  return true;
}

console.log(`\nBumping version to ${newVersion}:\n`);

// package.json
replaceInFile(
  resolve(root, "package.json"),
  /"version":\s*"[^"]+"/,
  `"version": "${newVersion}"`
);

// byd-3d-card.js (source)
replaceInFile(
  resolve(root, "byd-3d-card.js"),
  /const CARD_VERSION = "[^"]+"/,
  `const CARD_VERSION = "${newVersion}"`
);

// dist/byd-3d-card.js
replaceInFile(
  resolve(root, "dist", "byd-3d-card.js"),
  /const CARD_VERSION = "[^"]+"/,
  `const CARD_VERSION = "${newVersion}"`
);

// dist/byd-3d-card-hacs.js
replaceInFile(
  resolve(root, "dist", "byd-3d-card-hacs.js"),
  /const CARD_VERSION = "[^"]+"/,
  `const CARD_VERSION = "${newVersion}"`
);

console.log(`\nDone! Now commit and tag:\n`);
console.log(`  git add -A`);
console.log(`  git commit -m "release: v${newVersion}"`);
console.log(`  git tag v${newVersion}`);
console.log(`  git push origin main --tags\n`);
