const fs = require('fs');
const zlib = require('zlib');

const buf = fs.readFileSync('public/logo-arched-sample.png');
let pos = 8;
const idatChunks = [];
while (pos < buf.length) {
  const len = buf.readUInt32BE(pos);
  const type = buf.toString('ascii', pos + 4, pos + 8);
  if (type === 'IDAT') idatChunks.push(buf.slice(pos + 8, pos + 8 + len));
  pos += 12 + len;
}
const raw = zlib.inflateSync(Buffer.concat(idatChunks));
const w = 193, h = 77;
const stride = w * 4 + 1;
const uncompressed = Buffer.alloc(w * h * 4);

for (let y = 0; y < h; y++) {
  const filter = raw[y * stride];
  for (let x = 0; x < w * 4; x++) {
    const rawVal = raw[y * stride + 1 + x];
    const a = x >= 4 ? uncompressed[y * w * 4 + x - 4] : 0;
    const b = y > 0 ? uncompressed[(y - 1) * w * 4 + x] : 0;
    const c = (x >= 4 && y > 0) ? uncompressed[(y - 1) * w * 4 + x - 4] : 0;
    let val = 0;
    if (filter === 0) val = rawVal;
    else if (filter === 1) val = (rawVal + a) & 0xff;
    else if (filter === 2) val = (rawVal + b) & 0xff;
    else if (filter === 3) val = (rawVal + Math.floor((a + b) / 2)) & 0xff;
    else if (filter === 4) {
      const p = a + b - c;
      const pa = Math.abs(p - a);
      const pb = Math.abs(p - b);
      const pc = Math.abs(p - c);
      const pr = (pa <= pb && pa <= pc) ? a : (pb <= pc ? b : c);
      val = (rawVal + pr) & 0xff;
    }
    uncompressed[y * w * 4 + x] = val;
  }
}

// Bounding box of content: X from 12 to 162 Y from 22 to 59
const minX = 12, maxX = 163, minY = 20, maxY = 61;
const outW = maxX - minX;
const outH = maxY - minY;

function getMergedRects(isMatch) {
  // Extract pixels
  const grid = [];
  for (let y = 0; y < outH; y++) {
    grid[y] = [];
    for (let x = 0; x < outW; x++) {
      const srcX = minX + x;
      const srcY = minY + y;
      const p = (srcY * w + srcX) * 4;
      const r = uncompressed[p], g = uncompressed[p+1], b = uncompressed[p+2], a = uncompressed[p+3];
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      grid[y][x] = (a > 120 && lum < 185 && isMatch(r, g, b, srcX)) ? 1 : 0;
    }
  }

  // Merge horizontal spans
  const rects = [];
  for (let y = 0; y < outH; y++) {
    let start = -1;
    for (let x = 0; x <= outW; x++) {
      if (x < outW && grid[y][x] === 1) {
        if (start === -1) start = x;
      } else {
        if (start !== -1) {
          rects.push({ x: start, y, w: x - start, h: 1 });
          start = -1;
        }
      }
    }
  }

  // Generate SVG path string
  return rects.map(r => `M${r.x},${r.y}h${r.w}v1h-${r.w}z`).join('');
}

const archPath = getMergedRects((r, g, b, x) => x < 105 && !(b > r + 20 && b > g));
const edPath = getMergedRects((r, g, b, x) => x >= 105 || (b > r + 20 && b > g));

console.log('outW:', outW, 'outH:', outH);
console.log('archPath rects:', archPath.split('M').length - 1);
console.log('edPath rects:', edPath.split('M').length - 1);

const result = {
  viewBox: `0 0 ${outW} ${outH}`,
  width: outW,
  height: outH,
  archPath,
  edPath,
};

fs.writeFileSync('public/arched-logo-vector.json', JSON.stringify(result));

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${outW} ${outH}">
  <path d="${archPath}" fill="#383a3b" />
  <path d="${edPath}" fill="#155995" />
</svg>`;
fs.writeFileSync('public/arched-logo.svg', svg);

console.log('Saved to public/arched-logo-vector.json and public/arched-logo.svg');

