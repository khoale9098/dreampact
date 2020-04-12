export const LightenDarkenColor = function (color: string, percent: number) {
  const hash = color[0] === '#' ? '#' : '';
  const num = parseInt(color.replace('#', ''), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    B = ((num >> 8) & 0x00ff) + amt,
    G = (num & 0x0000ff) + amt;

  return (
    hash +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
      (G < 255 ? (G < 1 ? 0 : G) : 255)
    )
      .toString(16)
      .slice(1)
  );
};

export function opacity(color: string, opacity: number) {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return 'rgba(' + r + ',' + g + ',' + b + ',' + Math.abs(opacity) + ')';
}

export function darken(color: string, amt: number) {
  return LightenDarkenColor(color, -Math.abs(amt));
}

export function lighten(color: string, amt: number) {
  return LightenDarkenColor(color, Math.abs(amt));
}
