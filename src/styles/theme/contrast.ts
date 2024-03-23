import { InputThemeType, ThemeType } from './types';

export function getContrastText(color: string, theme: InputThemeType | ThemeType) {
  const contrastText =
    getContrastRatio(theme.palette.text.primary, color) >= theme.palette.contrastThreshold
      ? theme.palette.text.primary
      : theme.palette.text.primaryContrast;

  return contrastText;
}

export function decomposeColor(color: string): { type: string; values: number[] } {
  if (color.charAt(0) === '#') {
    return decomposeColor(convertHexToRGB(color));
  }

  const marker = color.indexOf('(');
  const type = color.substring(0, marker);
  const strValues = color.substring(marker + 1, color.length - 1).split(',');
  const values = strValues.map((value) => parseFloat(value));

  return { type, values };
}

export function convertHexToRGB(color: string) {
  color = color.substr(1);

  const re = new RegExp(`.{1,${color.length / 3}}`, 'g');
  let colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map((n) => n + n) as any;
  }

  return colors ? `rgb(${colors.map((n) => parseInt(n, 16)).join(', ')})` : '';
}

export function getContrastRatio(foreground: string, background: string) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);

  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}

export function getLuminance(color: string) {
  const decomposedColor = decomposeColor(color);

  if (decomposedColor.type.indexOf('rgb') !== -1) {
    const rgb = decomposedColor.values.map((val) => {
      val /= 255; // normalized
      return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
    });
    // Truncate at 3 digits
    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
  }

  return decomposedColor.values[2] / 100;
}
