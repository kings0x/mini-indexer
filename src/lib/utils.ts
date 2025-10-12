export function parseBlockNumber(raw: any) {
  if (raw == null) return null;
  const s = String(raw);
  if (s.startsWith("0x") || s.startsWith("0X")) {
    // safe hex -> number (use BigInt if you expect huge heights)
    try { return Number(BigInt(s)); } catch { return parseInt(s, 16); }
  }
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}