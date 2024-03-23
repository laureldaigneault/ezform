import { ReactNode } from 'react';

// CSS
export type CSSActions = 'hover' | 'disabled' | 'focus' | 'active';

// Components
export enum ComponentIntentEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  INFO = 'info',
  GOOD = 'good',
  WARNING = 'warning',
  BAD = 'bad',
}
export type ComponentWithChildren = { children?: ReactNode };
export type ComponentIntent = 'primary' | 'secondary' | 'info' | 'good' | 'warning' | 'bad';
export type ComponentWithError = { error?: boolean };
export type ComponentWithIntent = { intent?: ComponentIntent };
export type ComponentWithClassName = { className?: string };
// ---
export type BaseComponentProps = ComponentWithIntent & ComponentWithClassName & ComponentWithError;
export type BaseComponentWithChildrenProps = BaseComponentProps & ComponentWithChildren;
