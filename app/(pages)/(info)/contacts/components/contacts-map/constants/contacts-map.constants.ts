// Ivano-Frankivsk city centre (Ratusha).
const CONTACTS_MAP_LAT = 48.9226;
const CONTACTS_MAP_LON = 24.7111;
const CONTACTS_MAP_SPAN = 0.02;

const CONTACTS_MAP_BBOX = [
  CONTACTS_MAP_LON - CONTACTS_MAP_SPAN,
  CONTACTS_MAP_LAT - CONTACTS_MAP_SPAN / 2,
  CONTACTS_MAP_LON + CONTACTS_MAP_SPAN,
  CONTACTS_MAP_LAT + CONTACTS_MAP_SPAN / 2,
].join(",");

export const CONTACTS_MAP_EMBED_URL = `https://www.openstreetmap.org/export/embed.html?bbox=${CONTACTS_MAP_BBOX}&layer=mapnik&marker=${CONTACTS_MAP_LAT},${CONTACTS_MAP_LON}`;
export const CONTACTS_MAP_LINK_URL = `https://www.openstreetmap.org/?mlat=${CONTACTS_MAP_LAT}&mlon=${CONTACTS_MAP_LON}#map=16/${CONTACTS_MAP_LAT}/${CONTACTS_MAP_LON}`;
export const CONTACTS_MAP_TITLE = "Мапа: Івано-Франківськ";
export const CONTACTS_MAP_LINK_LABEL = "Відкрити більшу мапу";
