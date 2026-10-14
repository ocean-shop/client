// Rebuilds app/core/fonts/material-symbols-outlined.woff2 with only the icons referenced in app/.
// Every snake_case string literal or JSX text node that matches a Material Symbols name is kept;
// false positives (e.g. "code") just add a few bytes.
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

const CODEPOINTS_URL =
  "https://raw.githubusercontent.com/google/material-design-icons/master/variablefont/MaterialSymbolsOutlined%5BFILL%2CGRAD%2Copsz%2Cwght%5D.codepoints";
// Only the FILL axis varies; weight, optical size and grade stay at the defaults the UI uses.
const FONT_AXES = "opsz,wght,FILL,GRAD@24,400,0..1,0";
const OUTPUT_PATH = "app/core/fonts/material-symbols-outlined.woff2";
// Google Fonts serves woff2 only to modern browser user agents.
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36";
const TOKEN_PATTERN =
  /["'`]([a-z][a-z0-9_]*)["'`]|>\s*([a-z][a-z0-9_]*)\s*<|^\s*([a-z][a-z0-9_]*)\s*$/gm;

async function fetchOk(url) {
  const response = await fetch(url, { headers: { "User-Agent": USER_AGENT } });

  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);

  return response;
}

const iconNames = new Set(
  (await (await fetchOk(CODEPOINTS_URL)).text())
    .split("\n")
    .map((line) => line.split(" ")[0])
    .filter(Boolean)
);

const sourceFiles = execFileSync(
  "git",
  ["ls-files", "--cached", "--others", "--exclude-standard", "app/*.ts", "app/*.tsx"],
  {
    encoding: "utf8",
  }
)
  .split("\n")
  .filter(Boolean);

const usedIcons = new Set();

for (const file of sourceFiles) {
  for (const match of readFileSync(file, "utf8").matchAll(TOKEN_PATTERN)) {
    const token = match[1] ?? match[2] ?? match[3];

    if (iconNames.has(token)) usedIcons.add(token);
  }
}

const sortedIcons = [...usedIcons].sort();
const cssUrl = `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:${FONT_AXES}&icon_names=${sortedIcons.join(",")}&display=block`;
const fontUrl = (await (await fetchOk(cssUrl)).text()).match(/url\((https:[^)]+)\)/)?.[1];

if (!fontUrl) throw new Error("Font URL not found in Google Fonts CSS response");

const font = Buffer.from(await (await fetchOk(fontUrl)).arrayBuffer());

writeFileSync(OUTPUT_PATH, font);
console.log(`${sortedIcons.length} icons, ${(font.length / 1024).toFixed(1)} KB -> ${OUTPUT_PATH}`);
console.log(sortedIcons.join(" "));
