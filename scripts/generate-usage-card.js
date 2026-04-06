const fs = require("node:fs");
const path = require("node:path");

const CARD_WIDTH = 640;
const CARD_HEIGHT = 156;
const UNIT_MULTIPLIERS = {
  K: 1e3,
  M: 1e6,
  B: 1e9,
};

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function formatRequests(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function formatTokens(value) {
  if (value >= 1e9) {
    return `${(value / 1e9).toFixed(2)}B`;
  }
  if (value >= 1e6) {
    return `${(value / 1e6).toFixed(2)}M`;
  }
  if (value >= 1e3) {
    return `${(value / 1e3).toFixed(2)}K`;
  }
  return String(value);
}

function formatUsd(value) {
  if (value >= 1e3) {
    return `$${(value / 1e3).toFixed(2)}K`;
  }
  return `$${Number(value).toFixed(2)}`;
}

function parseMetricValue(value) {
  if (typeof value === "number") {
    if (!Number.isFinite(value)) {
      throw new TypeError(`Metric value must be finite: ${value}`);
    }
    return value;
  }

  if (typeof value !== "string") {
    throw new TypeError(`Unsupported metric value type: ${typeof value}`);
  }

  const trimmed = value.trim();
  const match = trimmed.match(
    /^\s*(\$)?\s*([+-]?(?:\d{1,3}(?:,\d{3})+|\d+)(?:\.\d+)?)\s*([kmb])?\s*$/i
  );

  if (!match) {
    throw new TypeError(`Invalid metric value format: ${value}`);
  }

  const numericPortion = Number(match[2].replaceAll(",", ""));
  const unit = match[3] ? match[3].toUpperCase() : null;
  const multiplier = unit ? UNIT_MULTIPLIERS[unit] : 1;
  const parsed = numericPortion * multiplier;

  if (!Number.isFinite(parsed)) {
    throw new TypeError(`Metric value must be finite after parsing: ${value}`);
  }

  return parsed;
}

function normalizeUsageCardData(data) {
  return {
    ...data,
    requests: parseMetricValue(data.requests),
    tokens: parseMetricValue(data.tokens),
    costUsd: parseMetricValue(data.costUsd),
  };
}

function readCardData(dataPath) {
  return normalizeUsageCardData(JSON.parse(fs.readFileSync(dataPath, "utf8")));
}

function renderMetricBox({ x, label, value, valueColor }) {
  return `
    <g transform="translate(${x} 66)">
      <rect width="186" height="64" rx="14" fill="#F6F8FA" stroke="#D0D7DE"/>
      <text x="16" y="22" fill="#57606A" font-size="13" font-weight="600" letter-spacing="0.04em" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">${escapeXml(label)}</text>
      <text x="16" y="49" fill="${valueColor}" font-size="30" font-weight="700" font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace">${escapeXml(value)}</text>
    </g>`;
}

function renderUsageCard(data) {
  const normalizedData = normalizeUsageCardData(data);
  const metrics = [
    {
      x: 24,
      label: "Requests",
      value: formatRequests(normalizedData.requests),
      valueColor: "#24292F",
    },
    {
      x: 227,
      label: "Tokens",
      value: formatTokens(normalizedData.tokens),
      valueColor: "#0969DA",
    },
    {
      x: 430,
      label: "Cost",
      value: formatUsd(normalizedData.costUsd),
      valueColor: "#1A7F37",
    },
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${CARD_WIDTH}" height="${CARD_HEIGHT}" viewBox="0 0 ${CARD_WIDTH} ${CARD_HEIGHT}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AI usage card for ${escapeXml(normalizedData.handle)}">
  <rect x="0.5" y="0.5" width="639" height="155" rx="16" fill="#FFFFFF" stroke="#D0D7DE"/>
  <rect x="1" y="1" width="638" height="154" rx="15.5" fill="url(#cardGlow)"/>
  <defs>
    <linearGradient id="cardGlow" x1="0" y1="0" x2="640" y2="156" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#F8FAFC"/>
    </linearGradient>
  </defs>

  <text x="24" y="24" fill="#24292F" font-size="13" font-weight="700" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">AI Usage</text>
  <text x="616" y="24" fill="#57606A" font-size="11" font-weight="500" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">Updated ${escapeXml(normalizedData.updated)}</text>

  <text x="24" y="47" fill="#24292F" font-size="18" font-weight="700" font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace">${escapeXml(normalizedData.handle)}</text>
  <line x1="24" y1="58.5" x2="616" y2="58.5" stroke="#D8DEE4"/>

${metrics.map(renderMetricBox).join("\n")}
</svg>
`;
}

function main() {
  const repoRoot = path.resolve(__dirname, "..");
  const dataPath = path.join(repoRoot, "data", "usage-card.json");
  const outputPath = path.join(repoRoot, "assets", "usage-card.svg");
  const data = readCardData(dataPath);
  const svg = renderUsageCard(data);

  fs.writeFileSync(outputPath, svg, "utf8");
}

if (require.main === module) {
  main();
}

module.exports = {
  formatRequests,
  formatTokens,
  formatUsd,
  parseMetricValue,
  normalizeUsageCardData,
  renderUsageCard,
  readCardData,
};
