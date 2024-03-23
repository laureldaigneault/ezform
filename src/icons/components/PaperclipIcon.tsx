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
export type PaperclipIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<PaperclipIconProps>(({ theme, ...props }) => {
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
export default function PaperclipIcon({ className = '', ...props }: PaperclipIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <g clipPath="url(#clip0_1718_1372)"><path d="M17.6943 3.61769C16.4843 2.50853 14.6154 2.54913 13.4547 3.7098L4.45005 12.7145C2.49902 14.6655 2.50319 17.8387 4.45741 19.7929C6.41163 21.7471 9.58481 21.7513 11.5358 19.8002L22.0003 9.33577L23.4145 10.75L12.95 21.2145C10.2148 23.9497 5.77527 23.9392 3.04319 21.2071L2.33609 20.5L2.38621 20.4499C0.330457 17.7082 0.540855 13.7952 3.03584 11.3002L12.0405 2.29559C13.9583 0.37776 17.0464 0.310666 19.0457 2.14338L19.7829 2.8191L19.7163 2.89174C21.1592 4.86471 21.0019 7.66264 19.2047 9.45981L10.2074 18.4571C8.98846 19.676 7.01215 19.676 5.79319 18.4571L5.08609 17.75L5.20179 17.6343C4.62442 16.4674 4.82155 15.0145 5.79319 14.0429L15.0003 4.83577L16.4145 6.24998L7.20741 15.4571C6.76951 15.895 6.76951 16.605 7.20741 17.0429C7.64531 17.4808 8.35529 17.4808 8.7932 17.0429L17.7905 8.04559C19.0247 6.81135 18.981 4.79716 17.6943 3.61769Z" fill="currentcolor"/></g><defs><clipPath id="clip0_1718_1372"><rect width="24" height="24" fill="white"/></clipPath></defs>
      </g>
    </StyledIcon>
  );
}
