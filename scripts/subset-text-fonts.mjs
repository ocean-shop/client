// Rebuilds the self-hosted Inter and Unbounded files as single variable fonts limited to the
// characters the shop renders. next/font/google ships Google's per-script subsets instead, and their
// overlapping unicode-ranges make "₴" pull in the ~200 KB latin-ext files on every page.
import { writeFileSync } from "node:fs";

const FONTS = [
  { family: "Inter:wght@400..700", output: "app/core/fonts/inter.woff2" },
  { family: "Unbounded:wght@500..600", output: "app/core/fonts/unbounded.woff2" },
];
// Google Fonts serves woff2 only to modern browser user agents.
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36";
// Basic Latin, Latin-1, Ukrainian/Russian Cyrillic, plus typographic punctuation and currency signs.
const CODEPOINT_RANGES = [
  [0x20, 0x7e],
  [0xa0, 0xff],
  [0x400, 0x45f],
  [0x490, 0x491],
];
const EXTRA_CHARACTERS = "–—‘’“”„•…№€₴™−←→";

const buildCharacterSet = () => {
  const characters = CODEPOINT_RANGES.flatMap(([start, end]) =>
    Array.from({ length: end - start + 1 }, (_, index) => String.fromCodePoint(start + index))
  );

  return characters.join("") + EXTRA_CHARACTERS;
};

const fetchOk = async (url) => {
  const response = await fetch(url, { headers: { "User-Agent": USER_AGENT } });

  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);

  return response;
};

const text = encodeURIComponent(buildCharacterSet());

for (const { family, output } of FONTS) {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${family}&text=${text}`;
  const fontUrl = (await (await fetchOk(cssUrl)).text()).match(/url\((https:[^)]+)\)/)?.[1];

  if (!fontUrl) throw new Error(`Font URL not found in Google Fonts CSS response for ${family}`);

  const font = Buffer.from(await (await fetchOk(fontUrl)).arrayBuffer());

  writeFileSync(output, font);
  console.log(`${family}: ${(font.length / 1024).toFixed(1)} KB -> ${output}`);
}
