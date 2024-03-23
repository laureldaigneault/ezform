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
export type MessageSquareShieldIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<MessageSquareShieldIconProps>(({ theme, ...props }) => {
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
export default function MessageSquareShieldIcon({ className = '', ...props }: MessageSquareShieldIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 6.04039L11.2715 6.81488C10.7383 7.38179 10.1032 7.66667 9.37504 7.66667H8.00008L8 9.89793C8 12.4614 9.48145 14.7756 11.7076 15.4563L12 15.5457L12.2924 15.4563C14.5185 14.7756 16 12.4614 16 9.89793V8.6667V7.66667H14.6254C13.8973 7.66667 13.2616 7.38179 12.7284 6.81489L12 6.04039ZM14 9.62532V9.89793C14 11.6125 13.0971 12.9397 12 13.4334C10.9029 12.9397 10 11.6125 10 9.89793L10 9.62492C10.7364 9.52504 11.4095 9.24864 12 8.8253C12.5905 9.24865 13.2636 9.52544 14 9.62532Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M23 2H1V20H6V23.3042L11.2868 20H23V2ZM21 4V18H10.7132L8 19.6958V18H3V4H21Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
