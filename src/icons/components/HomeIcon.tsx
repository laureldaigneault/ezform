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
export type HomeIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<HomeIconProps>(({ theme, ...props }) => {
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
          ? (theme.palette as any)[props.color]?.main?.color
          : props.color
        : 'inherit',
    animation: props.spin ? `$fidgetSpin ${typeof props.spin === 'boolean' ? '1s' : props.spin} linear infinite` : '',
    transform: props.rotate ? `rotate(${props.rotate})` : '',
    '@keyframes fidgetSpin': {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' },
    },
  }
})
export default function HomeIcon({ className = '', ...props }: HomeIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M8.00041 14C8.00041 11.7908 9.79127 9.99997 12.0004 9.99997C14.2095 9.99997 16.0004 11.7908 16.0004 14C16.0004 16.2091 14.2095 18 12.0004 18C9.79127 18 8.00041 16.2091 8.00041 14ZM12.0004 12C10.8958 12 10.0004 12.8954 10.0004 14C10.0004 15.1045 10.8958 16 12.0004 16C13.105 16 14.0004 15.1045 14.0004 14C14.0004 12.8954 13.105 12 12.0004 12Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M12.0004 1.1875L23.41 10.8856L22.1147 12.4095L21.0004 11.4624V21.9999H3.00041V11.4624L1.88612 12.4095L0.59082 10.8856L12.0004 1.1875ZM5.00041 9.76238V19.9999H19.0004V9.76238L12.0004 3.81238L5.00041 9.76238Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
