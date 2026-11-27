// Generates the landing-page hero illustrations as SVG (and PNG previews).
// Usage: node scripts/generate-illustrations.mjs public/illustrations <previewDir> .
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const [outDir, previewDir, projectRoot] = process.argv.slice(2);
const require = createRequire(path.join(projectRoot, "package.json"));
const sharp = require("sharp");

const C = {
  bg: "#0c2a4a",
  panel: "#13365e",
  panel2: "#1b4577",
  edge: "#2a5a92",
  screen: "#0a1f38",
  white: "#ffffff",
  muted: "#8fb0d6",
  faint: "#3d6a9e",
  lime: "#a3e635",
  limeSoft: "#d9f99d",
  blue: "#3b82f6",
  rose: "#fb7185",
  beige: "#d9cba6",
  beigeDark: "#b9a982",
};
const FONT = `font-family="Barlow, 'Segoe UI', Arial, sans-serif"`;

const wrap = (title, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" role="img" aria-label="${title}">
<title>${title}</title>
<defs>
  <radialGradient id="glow" cx="50%" cy="45%" r="65%"><stop offset="0" stop-color="#1f5592" stop-opacity=".85"/><stop offset="1" stop-color="${C.bg}" stop-opacity="0"/></radialGradient>
  <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="#fff" opacity=".07"/></pattern>
  <filter id="sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#020b16" flood-opacity=".55"/></filter>
  <filter id="blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="7"/></filter>
  <linearGradient id="limeGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${C.lime}" stop-opacity=".45"/><stop offset="1" stop-color="${C.lime}" stop-opacity="0"/></linearGradient>
  <linearGradient id="panelGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${C.panel2}"/><stop offset="1" stop-color="${C.panel}"/></linearGradient>
</defs>
<rect width="640" height="480" rx="32" fill="${C.bg}"/>
<rect width="640" height="480" rx="32" fill="url(#glow)"/>
<rect width="640" height="480" rx="32" fill="url(#dots)"/>
${body}
</svg>`;

// ---------- primitives ----------
const card = (x, y, w, h, inner = "", r = 14) =>
  `<g filter="url(#sh)"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="url(#panelGrad)" stroke="${C.edge}" stroke-width="1.5"/></g>${inner}`;

const text = (x, y, s, size = 14, fill = C.white, weight = 600, anchor = "start", extra = "") =>
  `<text x="${x}" y="${y}" ${FONT} font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" ${extra}>${s}</text>`;

const bar = (x, y, w, h = 8, fill = C.faint, r = 4) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"/>`;

const laptop = (x, y, w, h, screen = "") => {
  const baseH = Math.round(h * 0.09);
  return `<g filter="url(#sh)">
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="#0b213c" stroke="${C.edge}" stroke-width="2"/>
    <path d="M${x - 22} ${y + h + 2} H${x + w + 22} l-12 ${baseH} H${x - 10} Z" fill="#c8d7ea"/>
    <rect x="${x + w / 2 - 28}" y="${y + h + 2}" width="56" height="5" rx="2.5" fill="#9fb4cf"/>
  </g>
  <rect x="${x + 8}" y="${y + 8}" width="${w - 16}" height="${h - 16}" rx="7" fill="${C.screen}"/>
  ${screen}`;
};

const check = (cx, cy, r = 11, bg = C.lime, fg = C.bg) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${bg}"/><path d="M${cx - r * 0.45} ${cy} l${r * 0.3} ${r * 0.32} l${r * 0.6} ${-r * 0.62}" stroke="${fg}" stroke-width="${Math.max(2, r * 0.22)}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;

const glowPath = (d, w = 4) =>
  `<path d="${d}" stroke="${C.lime}" stroke-width="${w + 8}" fill="none" opacity=".35" filter="url(#blur)" stroke-linecap="round"/>
   <path d="${d}" stroke="${C.lime}" stroke-width="${w}" fill="none" stroke-linecap="round"/>`;

const dashed = (d, color = C.lime, op = 0.7) =>
  `<path d="${d}" stroke="${color}" stroke-width="2" stroke-dasharray="5 7" fill="none" opacity="${op}" stroke-linecap="round"/>`;

const reel = (cx, cy, r) => `<g filter="url(#sh)">
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="#1d4a80" stroke="${C.muted}" stroke-width="2"/>
  <circle cx="${cx}" cy="${cy}" r="${r * 0.78}" fill="none" stroke="#2b5f9c" stroke-width="${r * 0.22}"/>
  ${[0, 60, 120, 180, 240, 300]
    .map((a) => {
      const rad = (a * Math.PI) / 180;
      return `<line x1="${cx + Math.cos(rad) * r * 0.2}" y1="${cy + Math.sin(rad) * r * 0.2}" x2="${cx + Math.cos(rad) * r * 0.62}" y2="${cy + Math.sin(rad) * r * 0.62}" stroke="${C.muted}" stroke-width="2.5" opacity=".6"/>`;
    })
    .join("")}
  <circle cx="${cx}" cy="${cy}" r="${r * 0.2}" fill="${C.bg}" stroke="${C.lime}" stroke-width="3"/>
</g>`;

const box = (x, y, w, h, label = "") => `<g filter="url(#sh)">
  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="#c9a874"/>
  <rect x="${x}" y="${y}" width="${w}" height="${h * 0.22}" rx="6" fill="#d8bb8a"/>
  <rect x="${x + w / 2 - 8}" y="${y}" width="16" height="${h * 0.55}" fill="#e7d3ab" opacity=".8"/>
  ${label ? `<rect x="${x + w * 0.12}" y="${y + h * 0.58}" width="${w * 0.4}" height="${h * 0.24}" rx="3" fill="#fff" opacity=".85"/>` : ""}
</g>`;

const uiRows = (x, y, w, n, gap = 18, accentEvery = 0) =>
  Array.from({ length: n }, (_, i) => {
    const yy = y + i * gap;
    return `${bar(x, yy, w * 0.38, 7, C.faint)}${bar(x + w * 0.46, yy, w * 0.22, 7, "#2c5687")}${bar(x + w * 0.76, yy, w * 0.24, 7, accentEvery && i % accentEvery === 0 ? C.lime : "#2c5687")}`;
  }).join("");

// ---------- illustrations ----------
const art = {};

art["independent-brokers"] = wrap(
  "A broker's laptop showing a quote, with stock, margin and cash panels around it",
  `
  ${dashed("M125 180 C 135 190, 150 200, 168 208")}
  ${dashed("M455 190 C 445 200, 435 215, 422 228")}
  ${dashed("M455 340 C 445 340, 435 335, 422 325")}
  ${laptop(150, 200, 270, 170, `
    <rect x="168" y="216" width="70" height="14" rx="4" fill="${C.lime}"/>
    ${text(203, 227, "QUOTE", 10, C.bg, 800, "middle")}
    ${bar(350, 218, 52, 9, "#2c5687")}
    ${uiRows(168, 244, 234, 4, 19, 0)}
    <rect x="318" y="326" width="86" height="24" rx="12" fill="${C.lime}"/>
    ${text(361, 342, "Send quote", 11, C.bg, 700, "middle")}
    ${bar(168, 334, 90, 9, C.faint)}
  `)}
  ${card(40, 50, 170, 110, `
    ${text(58, 78, "Stock", 15, C.muted)}
    ${text(58, 110, "12,480", 28, C.white, 800)}
    ${bar(58, 128, 40, 14, C.lime, 4)}${bar(102, 128, 30, 14, C.blue, 4)}${bar(136, 128, 56, 14, C.faint, 4)}
  `)}
  ${card(455, 80, 160, 120, `
    ${text(473, 108, "Margin", 15, C.muted)}
    ${text(473, 140, "+18.4%", 26, C.lime, 800)}
    <polyline points="473,178 499,168 521,172 545,156 571,160 597,142" fill="none" stroke="${C.lime}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  `)}
  ${card(455, 290, 160, 110, `
    ${text(473, 318, "Cash flow", 15, C.muted)}
    ${[22, 34, 28, 44, 38, 54].map((h, i) => bar(475 + i * 22, 382 - h, 14, h, i === 5 ? C.lime : C.blue, 3)).join("")}
  `)}
  `
);

art["semiconductor-distributors"] = (() => {
  const cx = 320, cy = 240, s = 128;
  const pins = [];
  for (let i = 0; i < 6; i++) {
    const o = -s / 2 + 16 + i * ((s - 32) / 5);
    pins.push(`<rect x="${cx + o - 4}" y="${cy - s / 2 - 16}" width="8" height="16" rx="2" fill="${C.muted}"/>`);
    pins.push(`<rect x="${cx + o - 4}" y="${cy + s / 2}" width="8" height="16" rx="2" fill="${C.muted}"/>`);
    pins.push(`<rect x="${cx - s / 2 - 16}" y="${cy + o - 4}" width="16" height="8" rx="2" fill="${C.muted}"/>`);
    pins.push(`<rect x="${cx + s / 2}" y="${cy + o - 4}" width="16" height="8" rx="2" fill="${C.muted}"/>`);
  }
  const node = (x, y, label, icon) => `
    <g filter="url(#sh)"><circle cx="${x}" cy="${y}" r="46" fill="url(#panelGrad)" stroke="${C.edge}" stroke-width="2"/></g>
    ${icon}
    ${text(x, y + 72, label, 15, C.muted, 600, "middle")}`;
  const factory = (x, y) => `<path d="M${x - 22} ${y + 18} V${y - 4} l14 -9 v9 l14 -9 v9 l14 -9 V${y + 18} Z" fill="${C.white}"/><rect x="${x + 10}" y="${y - 22}" width="8" height="18" fill="${C.white}"/>`;
  const whBox = (x, y) => `<path d="M${x} ${y - 20} l22 10 v24 l-22 10 l-22 -10 v-24 Z" fill="#c9a874"/><path d="M${x} ${y - 20} l22 10 l-22 10 l-22 -10 Z" fill="#e2c897"/><path d="M${x} ${y} v24" stroke="#a88a5c" stroke-width="2"/>`;
  const person = (x, y) => `<circle cx="${x}" cy="${y - 10}" r="10" fill="${C.white}"/><path d="M${x - 18} ${y + 20} q18 -30 36 0 Z" fill="${C.white}"/>`;
  return wrap(
    "A microchip with a glowing trail linking supplier, warehouse and customer",
    `
    ${glowPath(`M140 120 C 220 120, 230 170, ${cx - s / 2 - 18} 210`)}
    ${glowPath(`M${cx + s / 2 + 18} 240 C 420 240, 440 240, 500 240`)}
    ${dashed(`M140 370 C 210 370, 230 320, ${cx - s / 2 - 18} 275`)}
    <g filter="url(#sh)"><rect x="${cx - s / 2}" y="${cy - s / 2}" width="${s}" height="${s}" rx="14" fill="#16283f" stroke="${C.muted}" stroke-width="2"/></g>
    ${pins.join("")}
    <rect x="${cx - 38}" y="${cy - 38}" width="76" height="76" rx="8" fill="${C.screen}" stroke="${C.lime}" stroke-width="2.5"/>
    <rect x="${cx - 38}" y="${cy - 38}" width="76" height="76" rx="8" fill="${C.lime}" opacity=".12"/>
    ${text(cx, cy + 4, "IC", 22, C.lime, 800, "middle")}
    ${text(cx, cy + 22, "LOT 2431", 9, C.muted, 600, "middle")}
    ${node(110, 120, "Supplier", factory(110, 124))}
    ${node(110, 370, "Warehouse", whBox(110, 372))}
    ${node(540, 240, "Customer", person(540, 246))}
    ${check(146, 86, 12)}${check(576, 206, 12)}${check(146, 336, 12)}
    `
  );
})();

art["excess-obsolete-inventory"] = wrap(
  "Stacked component reels and boxes with a value tag and a rising margin line",
  `
  <path d="M90 230 C 170 215, 220 190, 300 150 S 450 95, 540 70 V 230 Z" fill="url(#limeGrad)" opacity=".5"/>
  ${glowPath("M90 230 C 170 215, 220 190, 300 150 S 450 95, 540 70", 4)}
  <path d="M528 62 l18 6 l-12 14" fill="none" stroke="${C.lime}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  ${box(330, 300, 120, 100, true)}
  ${box(460, 320, 100, 80, true)}
  ${box(380, 230, 110, 72, true)}
  ${reel(170, 340, 72)}
  ${reel(270, 380, 44)}
  ${reel(285, 290, 40)}
  <g filter="url(#sh)" transform="rotate(-10 520 200)">
    <path d="M470 175 h88 a10 10 0 0 1 10 10 v40 a10 10 0 0 1 -10 10 h-88 l-26 -30 Z" fill="${C.lime}"/>
    <circle cx="468" cy="205" r="6" fill="${C.bg}"/>
  </g>
  ${text(522, 212, "+£4.2k", 20, C.bg, 800, "middle", 'transform="rotate(-10 520 200)"')}
  `
);

art["real-time-quoting"] = wrap(
  "An RFQ envelope entering a laptop and leaving as a finished quote, with a stopwatch",
  `
  ${dashed("M150 245 H 200")}${dashed("M440 245 H 470")}
  <g filter="url(#sh)" transform="rotate(-8 95 245)">
    <rect x="40" y="205" width="112" height="78" rx="8" fill="${C.white}"/>
    <path d="M40 210 L96 252 L152 210" fill="none" stroke="#b9c9de" stroke-width="3"/>
    <rect x="58" y="252" width="40" height="18" rx="4" fill="${C.blue}"/>
    ${text(78, 265, "RFQ", 11, C.white, 800, "middle")}
  </g>
  ${laptop(200, 160, 240, 160, `
    ${text(220, 190, "Live price &amp; stock", 11, C.muted, 600)}
    ${uiRows(220, 204, 200, 4, 20, 2)}
    <rect x="220" y="286" width="200" height="8" rx="4" fill="#1c3a60"/>
    <rect x="220" y="286" width="150" height="8" rx="4" fill="${C.lime}"/>
  `)}
  <g filter="url(#sh)">
    <rect x="470" y="150" width="130" height="180" rx="10" fill="${C.white}"/>
  </g>
  ${text(486, 178, "QUOTE", 13, C.bg, 800)}
  ${bar(486, 192, 98, 6, "#d5e0ee")}${bar(486, 206, 80, 6, "#d5e0ee")}${bar(486, 220, 90, 6, "#d5e0ee")}${bar(486, 234, 70, 6, "#d5e0ee")}
  <line x1="486" y1="256" x2="584" y2="256" stroke="#d5e0ee" stroke-width="2"/>
  ${text(486, 282, "Total", 12, "#5b7392", 600)}
  ${text(584, 282, "£8,940", 16, C.bg, 800, "end")}
  ${check(574, 310, 13)}
  <g filter="url(#sh)">
    <circle cx="520" cy="92" r="46" fill="url(#panelGrad)" stroke="${C.edge}" stroke-width="2"/>
  </g>
  <rect x="512" y="36" width="16" height="10" rx="3" fill="${C.muted}"/>
  <circle cx="520" cy="92" r="34" fill="none" stroke="#1c3a60" stroke-width="7"/>
  <path d="M520 58 A34 34 0 0 1 553 100" fill="none" stroke="${C.lime}" stroke-width="7" stroke-linecap="round"/>
  ${text(520, 99, "2 min", 15, C.white, 800, "middle")}
  `
);

art["inventory-management"] = wrap(
  "Shelved component reels and boxes with a live stock counter floating above",
  `
  ${dashed("M320 162 V 200")}
  <g filter="url(#sh)">
    <rect x="200" y="70" width="240" height="92" rx="18" fill="url(#panelGrad)" stroke="${C.edge}" stroke-width="2"/>
  </g>
  <circle cx="228" cy="100" r="6" fill="${C.lime}"/><circle cx="228" cy="100" r="12" fill="${C.lime}" opacity=".25"/>
  ${text(244, 105, "LIVE STOCK", 13, C.muted, 700, "start", 'letter-spacing="2"')}
  ${text(228, 144, "12,480", 32, C.white, 800)}
  ${text(420, 144, "units", 15, C.muted, 600, "end")}
  <rect x="110" y="200" width="420" height="16" rx="4" fill="#2a5a92"/>
  <rect x="110" y="310" width="420" height="16" rx="4" fill="#2a5a92"/>
  <rect x="110" y="420" width="420" height="16" rx="4" fill="#2a5a92"/>
  <rect x="110" y="200" width="14" height="236" fill="#21497a"/><rect x="516" y="200" width="14" height="236" fill="#21497a"/>
  ${reel(176, 270, 40)}${reel(266, 270, 40)}${box(330, 238, 80, 72, true)}${box(420, 254, 86, 56, true)}
  ${box(140, 352, 92, 68, true)}${reel(290, 380, 40)}${reel(380, 380, 40)}${reel(470, 380, 40)}
  ${check(266, 230, 10)}${check(470, 340, 10)}
  `
);

art["finance-dashboard"] = wrap(
  "A finance dashboard with a cash flow line, margin bars and a stock value tile",
  `
  ${card(70, 60, 500, 360, "", 20)}
  ${text(96, 96, "Cash flow", 15, C.muted)}
  ${text(96, 126, "£412,800", 26, C.white, 800)}
  ${text(250, 126, "▲ 12%", 15, C.lime, 700)}
  <rect x="90" y="140" width="300" height="130" rx="12" fill="${C.screen}" opacity=".6"/>
  <path d="M104 250 C 140 240, 160 210, 196 216 S 250 190, 282 180 S 340 160, 376 150 V 262 H 104 Z" fill="url(#limeGrad)"/>
  ${glowPath("M104 250 C 140 240, 160 210, 196 216 S 250 190, 282 180 S 340 160, 376 150", 3)}
  <circle cx="376" cy="150" r="6" fill="${C.lime}" stroke="${C.bg}" stroke-width="2"/>
  <rect x="408" y="80" width="144" height="190" rx="14" fill="${C.screen}" opacity=".6"/>
  ${text(424, 110, "Stock value", 14, C.muted)}
  ${text(424, 142, "£1.24M", 26, C.white, 800)}
  <circle cx="480" cy="212" r="38" fill="none" stroke="#1c3a60" stroke-width="12"/>
  <path d="M480 174 A38 38 0 1 1 446 229" fill="none" stroke="${C.lime}" stroke-width="12" stroke-linecap="round"/>
  ${text(480, 218, "72%", 15, C.white, 800, "middle")}
  ${text(96, 304, "Margin by deal", 14, C.muted)}
  ${[46, 62, 38, 74, 56, 84, 66, 90, 58, 96].map((h, i) => bar(98 + i * 44, 400 - h, 26, h, i % 3 === 2 ? C.lime : C.blue, 5)).join("")}
  `
);

art["compliance"] = wrap(
  "A shield over a laptop with a trail of logged audit entries",
  `
  ${laptop(110, 236, 270, 160, `
    ${[0, 1, 2, 3].map((i) => `${check(136, 290 + i * 22, 7, i === 0 ? C.lime : "#2c5687", i === 0 ? C.bg : C.muted)}${bar(152, 286 + i * 22, 110, 7, C.faint)}${bar(274, 286 + i * 22, 70, 7, "#2c5687")}`).join("")}
  `)}
  <path d="M245 40 l70 26 v56 c0 50 -34 82 -70 96 c-36 -14 -70 -46 -70 -96 v-56 Z" fill="${C.lime}" opacity=".3" filter="url(#blur)"/>
  <g filter="url(#sh)"><path d="M245 40 l70 26 v56 c0 50 -34 82 -70 96 c-36 -14 -70 -46 -70 -96 v-56 Z" fill="url(#panelGrad)" stroke="${C.lime}" stroke-width="3"/></g>
  <path d="M218 128 l20 20 l40 -44" fill="none" stroke="${C.lime}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
  ${dashed("M410 120 V 380", C.lime, 0.5)}
  ${[
    ["09:14", "Quote edited", "J. Smith"],
    ["09:32", "PO approved", "A. Patel"],
    ["10:05", "Stock moved", "R. Lee"],
    ["10:41", "Role changed", "Admin"],
  ]
    .map(([t, a, u], i) => {
      const y = 110 + i * 72;
      return `<circle cx="410" cy="${y + 26}" r="7" fill="${C.lime}"/>
      ${card(430, y, 180, 52, `${text(446, y + 22, a, 14, C.white, 700)}${text(446, y + 40, `${t} · ${u}`, 12, C.muted, 600)}`, 12)}`;
    })
    .join("")}
  `
);

art["customer-and-team-management"] = (() => {
  const mini = (x, y, label, color) => `
    ${laptop(x, y, 150, 96, `
      ${bar(x + 18, y + 20, 50, 8, color)}
      ${uiRows(x + 18, y + 40, 114, 3, 15)}
    `)}
    ${text(x + 75, y + 136, label, 15, C.muted, 700, "middle")}`;
  return wrap(
    "Three connected laptops for sales, finance and operations sharing one central dashboard",
    `
    ${glowPath("M150 150 C 190 190, 220 200, 250 210", 3)}
    ${glowPath("M490 150 C 450 190, 420 200, 390 210", 3)}
    ${glowPath("M320 318 V 300", 3)}
    ${card(240, 160, 160, 140, `
      ${text(258, 186, "Customer", 13, C.muted, 700)}
      <circle cx="274" cy="214" r="16" fill="${C.blue}"/><circle cx="274" cy="209" r="6" fill="${C.white}"/><path d="M262 224 q12 -14 24 0" fill="${C.white}"/>
      ${bar(298, 206, 80, 7, C.faint)}${bar(298, 218, 56, 7, "#2c5687")}
      ${bar(258, 246, 124, 8, "#1c3a60")}${bar(258, 246, 90, 8, C.lime)}
      ${text(258, 280, "4 open deals", 13, C.white, 700)}
    `, 16)}
    ${mini(50, 50, "Sales", C.lime)}
    ${mini(440, 50, "Finance", C.blue)}
    ${mini(245, 318, "Operations", C.limeSoft)}
    `
  );
})();

art["switching-from-legacy-broker-software"] = wrap(
  "An old monitor and filing boxes on the left, a modern laptop with live dashboards on the right, linked by a bridge",
  `
  <g filter="url(#sh)">
    <rect x="40" y="150" width="170" height="140" rx="10" fill="${C.beige}"/>
    <rect x="56" y="166" width="138" height="104" rx="6" fill="#26332b"/>
    <rect x="96" y="290" width="58" height="20" fill="${C.beigeDark}"/>
    <rect x="70" y="308" width="110" height="12" rx="4" fill="${C.beige}"/>
  </g>
  ${[0, 1, 2, 3].map((i) => bar(68, 182 + i * 18, 70 + (i % 2) * 40, 6, "#6f9b74", 2)).join("")}
  ${text(68, 262, "C:\\&gt;_", 12, "#8fc495", 700)}
  ${box(36, 340, 84, 66)}${box(126, 352, 74, 54)}
  <path d="M220 330 Q 320 220 420 330" fill="none" stroke="${C.muted}" stroke-width="6" stroke-linecap="round"/>
  ${Array.from({ length: 9 }, (_, i) => {
    const t = (i + 1) / 10;
    const x = (1 - t) * (1 - t) * 220 + 2 * (1 - t) * t * 320 + t * t * 420;
    const y = (1 - t) * (1 - t) * 330 + 2 * (1 - t) * t * 220 + t * t * 330;
    return `<line x1="${x}" y1="${y}" x2="${x}" y2="${y + 26}" stroke="${C.faint}" stroke-width="3"/>`;
  }).join("")}
  <path d="M220 356 Q 320 246 420 356" fill="none" stroke="${C.faint}" stroke-width="4" stroke-linecap="round"/>
  ${glowPath("M240 304 Q 320 216 400 304", 3)}
  <path d="M388 290 l14 16 l-20 4" fill="none" stroke="${C.lime}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="270" y="196" width="100" height="32" rx="16" fill="${C.lime}"/>
  ${text(320, 218, "4 weeks", 16, C.bg, 800, "middle")}
  ${laptop(430, 170, 180, 120, `
    ${bar(446, 188, 60, 8, C.lime)}
    <rect x="446" y="204" width="90" height="62" rx="6" fill="#132f52"/>
    <polyline points="452,256 470,246 486,250 504,232 528,222" fill="none" stroke="${C.lime}" stroke-width="3" stroke-linecap="round"/>
    ${[24, 36, 30, 46].map((h, i) => bar(546 + i * 13, 266 - h, 9, h, C.blue, 2)).join("")}
  `)}
  ${check(600, 166, 13)}
  `
);

fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(previewDir, { recursive: true });
for (const [name, svg] of Object.entries(art)) {
  const file = path.join(outDir, `${name}.svg`);
  fs.writeFileSync(file, svg);
  await sharp(Buffer.from(svg)).png().toFile(path.join(previewDir, `${name}.png`));
  console.log(name, svg.length);
}
