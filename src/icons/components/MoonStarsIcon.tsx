import React from 'react';
import { styled } from '../../styles/theme';

export interface CustomProps {
  /** Makes the icon spin. Provide a boolean to use the default spin speed of 1.5s. Or provide a string to set a custom spin speed */
  spin?: boolean | string;
  /** Rotates the icon. For example: 90deg */
  rotate?: number | string;
  /** Color to apply to the icon */
  color?: string;
  /** The size of the icon. Defaults to inherited font-size (i.e. 1em) */
  size?: number | string;
}

// This type definition is to introduce our custom props so that they will be documented in storybook */
export type MoonStarsIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<MoonStarsIconProps>(({ theme, ...props }) => {
  return {
    userSelect: 'none',
    cursor: props.onClick ? 'pointer' : 'default',
    position: 'relative',
    height: '1em',
    minHeight: '1em',
    transition: 'zoom .3s ease-in-out',
    width: '1em',
    minWidth: '1em',
    fontSize: props.size ? (typeof props.size === 'string' ? props.size : props.size + 'px') : 'inherit',
    color:
      props.color && typeof props.color === 'string'
        ? (theme.palette?.color as any)[props.color]
          ? (theme.palette.color as any)[props.color]?.hex
          : props.color
        : 'inherit',
    animation: props.spin ? `$fidgetSpin ${typeof props.spin === 'boolean' ? '1s' : props.spin} linear infinite` : '',
    transform: props.rotate ? `rotate(${props.rotate})` : '',
    '@keyframes fidgetSpin': {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' },
    },
  };
});
export default function MoonStarsIcon({ className = '', ...props }: MoonStarsIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <path d='M14 1V3H16V5H14V7H12V5H10V3H12V1H14Z' fill='currentcolor' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1 13.107C1 9.09341 3.39007 5.64015 6.82035 4.08884L8.14356 5.41206C7.69609 6.40153 7.44648 7.50054 7.44648 8.66055C7.44648 13.0197 10.9803 16.5535 15.3394 16.5535C16.4995 16.5535 17.5985 16.3039 18.5879 15.8564L19.9112 17.1797C18.3599 20.6099 14.9066 23 10.893 23C5.42923 23 1 18.5708 1 13.107ZM5.5383 7.30791C3.97678 8.75052 3 10.8153 3 13.107C3 17.4662 6.5338 21 10.893 21C13.1847 21 15.2495 20.0232 16.6921 18.4617C16.2496 18.5222 15.7981 18.5535 15.3394 18.5535C9.87571 18.5535 5.44648 14.1243 5.44648 8.66055C5.44648 8.20194 5.47775 7.75037 5.5383 7.30791Z'
          fill='currentcolor'
        />
        <path d='M20 6V9H23V11H20V14H18V11H15V9H18V6H20Z' fill='currentcolor' />
      </g>
    </StyledIcon>
  );
}
