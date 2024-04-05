import { InputThemeType, ThemeType, ShapeType } from './types';
import { ThemeProvider, createGlobalStyle, styled, useTheme } from 'styled-components';
import { convertHexToRGB, getContrastText } from './contrast';
import defaultInputTheme from './defaultInputTheme';
import Handlebars from 'handlebars/dist/cjs/handlebars';
import tinycolor from 'tinycolor2';
import { cloneDeep } from 'lodash';

/**
 * References:
 * - https://mui.com/material-ui/customization/default-theme/
 * - https://m2.material.io/design/color/the-color-system.html
 * - https://materialpalettes.com/
 * - https://colorbox.io/
 */

const replaceCurly = (input: InputThemeType): any => {
  const template1 = Handlebars.compile(JSON.stringify(input));
  const res1 = template1(input, { noEscape: true });
  const template2 = Handlebars.compile(res1);
  return JSON.parse(template2(input, { noEscape: true }));
};

/**
 * Takes a theme file, and augments it by adding helpers.
 * TODO: should also validate the theme structure and throw
 * an error if the theme is invalid
 * @param theme ThemeType
 * @returns CompiledThemeType
 */
const createTheme = (inputTheme: InputThemeType): ThemeType => {
  const _inputTheme: any = cloneDeep(inputTheme);
  const compiledTheme = replaceCurly(_inputTheme) as any;

  // Compiling color palette and color utilities
  if (compiledTheme.palette) {
    const augmentColors = (colorKeys: Array<string>, prefixKey: string, _theme: any) => {
      colorKeys.forEach((colorKey) => {
        const color = _theme.palette[prefixKey][colorKey];
        const contrastText = getContrastText(color, _theme);

        _theme.palette[prefixKey][colorKey] = {
          hex: color,
          rgb: convertHexToRGB(color),
          contrastTextHex: contrastText,
        };
      });
    };

    // Augmenting base colors
    const baseColors = Object.keys(compiledTheme.palette.color || {});
    const baseIntents = Object.keys(compiledTheme.palette.intent || {});

    augmentColors(baseColors, 'color', compiledTheme);
    augmentColors(baseIntents, 'intent', compiledTheme);

    compiledTheme.palette.color = {
      ...(compiledTheme.palette.color || {}),
      ...(compiledTheme.palette.intent || {}),
    };
    delete compiledTheme.palette.intent;

    // Adding get color helper
    compiledTheme.getColor = (
      color: string | undefined,
      options?: {
        fallback?: string;
        darken?: number;
        lighten?: number;
        saturate?: number;
        desaturate?: number;
        greyscale?: number;
        alpha?: number;
      }
    ) => {
      const { fallback = 'basic', darken, lighten, saturate, desaturate, greyscale, alpha } = options || {};
      const _color = color ?? fallback;
      const clonedTheme = cloneDeep(compiledTheme);
      const outputColor = clonedTheme.palette.color[_color] || clonedTheme.palette.color['basic'];

      if (lighten !== undefined) {
        outputColor.hex = tinycolor(outputColor.hex).lighten(lighten).toString();
        outputColor.contrastTextHex = getContrastText(outputColor.hex, clonedTheme);
      }
      if (darken !== undefined) {
        outputColor.hex = tinycolor(outputColor.hex).darken(darken).toString();
        outputColor.contrastTextHex = getContrastText(outputColor.hex, clonedTheme);
      }
      if (saturate !== undefined) {
        outputColor.hex = tinycolor(outputColor.hex).saturate(saturate).toString();
        outputColor.contrastTextHex = getContrastText(outputColor.hex, clonedTheme);
      }
      if (desaturate !== undefined) {
        outputColor.hex = tinycolor(outputColor.hex).desaturate(desaturate).toString();
        outputColor.contrastTextHex = getContrastText(outputColor.hex, clonedTheme);
      }
      if (greyscale) {
        outputColor.hex = tinycolor(outputColor.hex).greyscale().toString();
        outputColor.contrastTextHex = getContrastText(outputColor.hex, clonedTheme);
      }
      if (alpha) {
        outputColor.hex = tinycolor(outputColor.hex).setAlpha(alpha).toString();
        outputColor.contrastTextHex = getContrastText(outputColor.hex, clonedTheme);
      }

      return outputColor;
    };
  }

  // Compiling spacing utilities
  if (compiledTheme.spacing) {
    compiledTheme.getSpacing = (...factors: number[]) => {
      let _spacing = '';
      factors.forEach((factor, i) => {
        _spacing += factor * compiledTheme.spacing.value + compiledTheme.spacing.unit;
        if (i < factors.length - 1) _spacing += ' ';
      });
      return _spacing;
    };
  }

  // Compiling shadow utilities
  if (compiledTheme.shadow) {
    compiledTheme.getShadow = (shadowType = 'default') => {
      return compiledTheme.shadow[shadowType];
    };
  }

  // Compiling breakpoint utilities
  if (compiledTheme.breakpoint) {
    compiledTheme.breakpoint.largerThan = (bp: string) => {
      const bpList = compiledTheme.breakpoint[bp];
      if (!bpList) return '';
      return `@media (min-width: ${bpList[1]}) {`;
    };
    compiledTheme.breakpoint.smallerThan = (bp: string) => {
      const bpList = compiledTheme.breakpoint[bp];
      if (!bpList) return '';
      return `@media (max-width: ${bpList[0]}) {`;
    };
    compiledTheme.breakpoint.between = (bp1: string, bp2: string) => {
      const bp1List = compiledTheme.breakpoint[bp1];
      const bp2List = compiledTheme.breakpoint[bp2];
      if (!bp1List || !bp2List) return '';
      return `@media (min-width: ${bp1List[0]}) and (max-width: ${bp2[1]}) {`;
    };
    compiledTheme.breakpoint.is = (bp: string) => {
      const bpList = compiledTheme.breakpoint[bp];
      if (!bpList) return '';
      return `@media (min-width: ${bpList[0]}) and (max-width: ${bpList[1]}) {`;
    };
    compiledTheme.breakpoint.isNot = (bp: string) => {
      const bpList = compiledTheme.breakpoint[bp];
      if (!bpList) return '';
      return `@media not (min-width: ${bpList[0]}) and (max-width: ${bpList[1]}) {`;
    };
  }

  // Compiling action utilities
  if (compiledTheme.action) {
    compiledTheme.getActionStyle = (actionType: string) => {
      return compiledTheme.action[actionType];
    };
  }

  // Compiling typography utilities
  if (compiledTheme.typography) {
    compiledTheme.getTypographyStyle = (typographyType: string) => {
      return compiledTheme.typography[typographyType];
    };
  }

  // Compiling shape utilities
  if (compiledTheme.shape) {
    compiledTheme.getShape = (shapeType: keyof ShapeType, adjustmentFct?: (val: number) => number) => {
      return typeof compiledTheme.shape[shapeType] === 'number'
        ? `${adjustmentFct ? adjustmentFct(compiledTheme.shape[shapeType]) : compiledTheme.shape[shapeType]}px`
        : compiledTheme.shape[shapeType];
    };
  }

  // Compiling border utilities
  if (compiledTheme.shape.border) {
    compiledTheme.getBorderStyle = (borderKey: string, colorKey?: string) => {
      return {
        border: compiledTheme.shape.border[borderKey] || '',
        ...(colorKey ? { borderColor: compiledTheme.palette.color[colorKey] } : {}),
      };
    };
  }
  return compiledTheme as ThemeType;
};

// Compiling default input theme into a usable default theme
const defaultTheme = createTheme(defaultInputTheme);

export { defaultTheme, createTheme, getContrastText, styled, createGlobalStyle, useTheme, ThemeProvider };
