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
export type GlobeStandIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<GlobeStandIconProps>(({ theme, ...props }) => {
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
export default function GlobeStandIcon({ className = '', ...props }: GlobeStandIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <path
          d='M21.4144 2.00003L19.7431 3.67134C21.1531 5.3947 22.0002 7.59916 22.0002 10C22.0002 15.1854 18.0535 19.4489 13.0002 19.9507V21H18.0001V23H6.00015V21H11.0002V19.9506C8.98905 19.7508 7.15258 18.9548 5.67146 17.7429L4.00015 19.4142L2.58594 18L5.63619 14.9498L6.3433 15.6569C7.79211 17.1057 9.79074 18 12.0002 18C16.4184 18 20.0002 14.4183 20.0002 10C20.0002 7.79061 19.1058 5.79198 17.657 4.34317L16.9499 3.63607L20.0002 0.585815L21.4144 2.00003Z'
          fill='currentcolor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M6.00015 10C6.00015 6.68632 8.68644 4.00003 12.0002 4.00003C15.3139 4.00003 18.0002 6.68632 18.0002 10C18.0002 13.3137 15.3139 16 12.0002 16C8.68644 16 6.00015 13.3137 6.00015 10ZM12.0002 6.00003C9.79101 6.00003 8.00015 7.79089 8.00015 10C8.00015 12.2092 9.79101 14 12.0002 14C14.2093 14 16.0002 12.2092 16.0002 10C16.0002 7.79089 14.2093 6.00003 12.0002 6.00003Z'
          fill='currentcolor'
        />
      </g>
    </StyledIcon>
  );
}
