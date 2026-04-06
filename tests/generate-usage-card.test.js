const test = require("node:test");
const assert = require("node:assert/strict");

const { renderUsageCard } = require("../scripts/generate-usage-card.js");

test("renderUsageCard outputs the expected profile usage labels and formatted values", () => {
  const svg = renderUsageCard({
    handle: "@gaofeng21cn",
    requests: 176833,
    tokens: 16150000000,
    costUsd: 14520,
    updated: "2026-04-05",
  });

  assert.match(svg, /AI Usage/);
  assert.match(svg, /Updated 2026-04-05/);
  assert.match(svg, /@gaofeng21cn/);
  assert.match(svg, /Requests/);
  assert.match(svg, /176,833/);
  assert.match(svg, /Tokens/);
  assert.match(svg, /16\.15B/);
  assert.match(svg, /Cost/);
  assert.match(svg, /\$14\.52K/);
  assert.match(svg, /viewBox="0 0 640 156"/);
  assert.match(svg, /transform="translate\(24 66\)"/);
  assert.match(svg, /height="64"/);
  assert.match(svg, /font-size="13" font-weight="600"[^>]*>Requests<\/text>/);
  assert.match(svg, /font-size="30" font-weight="700"[^>]*>176,833<\/text>/);
});

test("renderUsageCard normalizes metric inputs expressed as strings with units", () => {
  const svg = renderUsageCard({
    handle: "@gaofeng21cn",
    requests: "186.461K",
    tokens: "17432.9M",
    costUsd: "$15.576011K",
    updated: "2026-04-06",
  });

  assert.match(svg, /Updated 2026-04-06/);
  assert.match(svg, /186,461/);
  assert.match(svg, /17\.43B/);
  assert.match(svg, /\$15\.58K/);
});
