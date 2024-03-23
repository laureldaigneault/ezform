// styled.d.ts
import 'styled-components';
import { ThemeType } from 'styles/theme';

declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme extends ThemeType {}
}
