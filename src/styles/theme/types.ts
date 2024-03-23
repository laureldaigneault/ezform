/* All color intents available by default */
export enum PaletteColorIntent {
  basic = 'basic',
  primary = 'primary',
  secondary = 'secondary',
  info = 'info',
  good = 'good',
  warning = 'warning',
  bad = 'bad',
}

export enum PaletteTextType {
  primary = 'primary',
  secondary = 'secondary',
  placeholder = 'placeholder',
  disabled = 'disabled',
  primaryContrast = 'primaryContrast',
  secondaryContrast = 'secondaryContrast',
  placeholderContrast = 'placeholderContrast',
  disabledContrast = 'disabledContrast',
}

export enum BackgroundType {
  default = 'default',
}

export enum BorderType {
  default = 'default',
}

export enum WeightType {
  lightest = 'lightest',
  lighter = 'lighter',
  light = 'light',
  normal = 'normal',
  medium = 'medium',
  bold = 'bold',
  bolder = 'bolder',
  boldest = 'boldest',
}

export enum ActionType {
  disabled = 'disabled',
  hover = 'hover',
  pressed = 'pressed',
  focussed = 'focussed',
}

export enum ComponentSize {
  default = 'default',
  small = 'small',
  large = 'large',
}

export enum PaletteCommonType {
  white = 'white',
  black = 'black',
}

export enum TransitionDurationType {
  shortest = 'shortest',
  shorter = 'shorter',
  short = 'short',
  default = 'default',
  complex = 'complex',
}

export enum BreakpointType {
  min = 'min',
  phone = 'phone',
  tablet = 'tablet',
  laptop = 'laptop',
  desktop = 'desktop',
  wide = 'wide',
  ultrawise = 'ultrawide',
}

export enum TypographyType {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  body1 = 'body1',
  body2 = 'body2',
  button = 'button',
  field = 'field',
  fieldLabel = 'fieldLabel',
  fieldHelperText = 'fieldHelperText',
}

/* The type of all colors, either intent or custom */
export type InputThemeColorType = string;

/* The type of all compiled colors (including extra utilities) */
export type ThemeColorType = {
  hex: string;
  rgb: string;
  contrastTextHex: string;
};

/* The type for all typography entries */
type ThemeTypographyTagType = {
  fontFamily: string;
  fontWeight: number;
  fontSize: string | number; // ideally rem unit
  lineHeight: number;
  letterSpacing: string | number; // ideally em
  textTransform?: any;
};

export type ShapeType = {
  borderRadius: string | number;
  borderWidth: string | number;
  borderStyle: string;
  border: Record<string, string>;
};

export type TransitionType = {
  duration: Record<TransitionDurationType, number>;
};

export type SpacingType = {
  unit: string;
  value: number;
};

export type ShadowType = Record<string, string>;

export type ZIndexType = {
  [category: string]: number;
};

export type BaseBreakpointType = {
  unit: 'px' | 'em' | 'rem';
} & { [key in BreakpointType]: number[] };

export type BasePaletteType = {
  common: Record<PaletteCommonType, string>;
  contrastThreshold: number;
  text: Record<PaletteTextType, string>;
  background: Record<BackgroundType, string>;
  border: Record<BorderType, string>;
};

export type InputPaletteType = BasePaletteType & {
  color: Record<string, string>;
  intent: Record<PaletteColorIntent, string>;
};

export type OutputPaletteType = BasePaletteType & {
  color: Record<PaletteColorIntent | string, ThemeColorType>;
};

export type BaseTypographyType = {
  rootFontSize: number | string;
  fontFamily: string;
  fontSize: number | string;
  font: Record<string, string>;
  weight: Record<WeightType, number>;
};

export type InputTypographyType = BaseTypographyType & Record<TypographyType, ThemeTypographyTagType>;
export type OutputTypographyType = BaseTypographyType & Record<TypographyType, ThemeTypographyTagType>;

/* The input theme object used when creating a theme */

export type InputThemeType = {
  palette: InputPaletteType;
  action: Record<ActionType, Record<string, any>>;
  typography: InputTypographyType;
  shape: ShapeType;
  shadow: ShadowType;
  transition: TransitionType;
  spacing: SpacingType;
  zIndex: ZIndexType;
  breakpoint: BaseBreakpointType;
};

/* The final theme object that will be provided via context */
export type ThemeType = {
  palette: OutputPaletteType;
  getColor: (
    color?: string,
    options?: {
      fallback?: string;
      darken?: number;
      lighten?: number;
      saturate?: number;
      desaturate?: number;
      greyscale?: boolean;
    }
  ) => ThemeColorType;
  action: Record<ActionType, Record<string, any>>;
  getActionStyle: (actionType: keyof typeof ActionType) => { [key: string]: any };
  typography: OutputTypographyType;
  getTypographyStyle: (typoType: string) => { [key: string]: any };
  shape: ShapeType;
  getShape: (shapeType: keyof ShapeType, adjustmentFct?: (val: number) => number) => string | number;
  getBorderStyle: (borderKey: string, colorKey?: string) => Record<string | number | symbol, string>;
  shadow: ShadowType;
  getShadow: (shadowType?: string) => string;
  transition: TransitionType;
  spacing: SpacingType;
  getSpacing: (...args: number[]) => string;
  zIndex: ZIndexType;
  breakpoint: BaseBreakpointType & {
    largerThan: (breakpoint: string) => string;
    smallerThan: (breakpoint: string) => string;
    between: (breakpoint1: string, breakpoint2: string) => string;
    is: (breakpoint: string) => string;
    isNot: (breakpoint: string) => string;
  };
};
