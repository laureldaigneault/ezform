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
export type CrownIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<CrownIconProps>(({ theme, ...props }) => {
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
  }
})
export default function CrownIcon({ className = '', ...props }: CrownIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5C14 5.60452 13.7318 6.1464 13.3079 6.51313L15.4254 11.4541L19.145 8.74898C19.0515 8.51765 19 8.26484 19 8C19 6.89543 19.8954 6 21 6C22.1046 6 23 6.89543 23 8C23 9.00142 22.264 9.83093 21.3034 9.97713L18.7982 21H5.20177L2.69657 9.97713C1.736 9.83093 1 9.00142 1 8C1 6.89543 1.89543 6 3 6C4.10457 6 5 6.89543 5 8C5 8.26484 4.94852 8.51765 4.85503 8.74898L8.57456 11.4541L10.6921 6.51313C10.2682 6.1464 10 5.60452 10 5ZM12 8.53859L9.42544 14.5459L5.06524 11.3749L6.79823 19H17.2018L18.9348 11.3749L14.5746 14.5459L12 8.53859Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
