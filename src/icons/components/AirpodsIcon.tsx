import React from 'react';
import styled from 'styled-components';

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
export type AirpodsIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<AirpodsIconProps>(({ theme, ...props }) => {
  return {
    userSelect: 'none',
    cursor: props.onClick ? 'pointer' : 'default',
    position: 'relative',
    height: '1em',
    minHeight: '1em',
    transition: 'zoom .3s ease-in-out',
    width: '1em',
    minWidth: '1em',
    fontSize: props.size && typeof props.size === 'string' ? props.size : props.size + 'px',
    color:
      props.color && typeof props.color === 'string'
        ? (theme.palette as any)[props.color]
          ? (theme.palette as any)[props.color]?.hex
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
export default function AirpodsIcon({ className = '', ...props }: AirpodsIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <path d='M7 4V7H5V4H7Z' fill='currentcolor' />
        <path d='M19 4V7H17V4H19Z' fill='currentcolor' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M11 11V5.52941C11 3.03579 8.99315 1 6.5 1C4.00685 1 2 3.03579 2 5.52941C2 6.59624 2.18518 7.73678 2.72976 8.64591C3.21669 9.45879 3.97607 10.0513 5 10.2223V11H2V19.4142L5.58579 23H18.4378L22 19.4121V11H19.0214V10.2187C20.0345 10.0431 20.7867 9.45311 21.2702 8.64591C21.8148 7.73678 22 6.59624 22 5.52941C22 3.03579 19.9932 1 17.5 1C15.0068 1 13 3.03579 13 5.52941V11H11ZM6.5 3C5.12716 3 4 4.12455 4 5.52941C4 6.41182 4.16083 7.14294 4.44549 7.61816C4.69345 8.03211 5.03639 8.27273 5.625 8.27273H7V11H9V5.52941C9 4.12455 7.87284 3 6.5 3ZM4 13V18.5858L6.41421 21H17.6051L20 18.5879V13H4ZM15 11H17.0214V8.27273H18.375C18.9636 8.27273 19.3065 8.03211 19.5545 7.61816C19.8392 7.14294 20 6.41182 20 5.52941C20 4.12455 18.8728 3 17.5 3C16.1272 3 15 4.12455 15 5.52941V11Z'
          fill='currentcolor'
        />
      </g>
    </StyledIcon>
  );
}
