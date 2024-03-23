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
export type ClockXmarkIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<ClockXmarkIconProps>(({ theme, ...props }) => {
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
export default function ClockXmarkIcon({ className = '', ...props }: ClockXmarkIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <path
          d='M5.41436 2.00003L2.00015 5.41424L0.585938 4.00003L4.00015 0.585815L5.41436 2.00003Z'
          fill='currentcolor'
        />
        <path
          d='M20.0002 0.585815L23.4144 4.00003L22.0002 5.41424L18.5859 2.00003L20.0002 0.585815Z'
          fill='currentcolor'
        />
        <path
          d='M9.00015 7.58582L12.0002 10.5858L15.0002 7.58582L16.4144 9.00003L13.4144 12L16.4144 15L15.0002 16.4142L12.0002 13.4142L9.00015 16.4142L7.58594 15L10.5859 12L7.58594 9.00003L9.00015 7.58582Z'
          fill='currentcolor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M2.00015 12C2.00015 6.47718 6.4773 2.00003 12.0002 2.00003C17.523 2.00003 22.0002 6.47718 22.0002 12C22.0002 17.5229 17.523 22 12.0002 22C6.4773 22 2.00015 17.5229 2.00015 12ZM12.0002 4.00003C7.58187 4.00003 4.00015 7.58175 4.00015 12C4.00015 16.4183 7.58187 20 12.0002 20C16.4184 20 20.0002 16.4183 20.0002 12C20.0002 7.58175 16.4184 4.00003 12.0002 4.00003Z'
          fill='currentcolor'
        />
      </g>
    </StyledIcon>
  );
}
