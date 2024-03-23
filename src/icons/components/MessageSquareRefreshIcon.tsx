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
export type MessageSquareRefreshIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<MessageSquareRefreshIconProps>(({ theme, ...props }) => {
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
export default function MessageSquareRefreshIcon({ className = '', ...props }: MessageSquareRefreshIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M16.1963 6.7002H14.1963V8.07764C13.5118 7.52879 12.6428 7.2002 11.6963 7.2002C9.48715 7.2002 7.69629 8.99106 7.69629 11.2002C7.69629 13.4093 9.48715 15.2002 11.6963 15.2002C12.7201 15.2002 13.6562 14.8142 14.3632 14.1814L15.1083 13.5145L13.7745 12.0243L13.0294 12.6912C12.6749 13.0085 12.2092 13.2002 11.6963 13.2002C10.5917 13.2002 9.69629 12.3048 9.69629 11.2002C9.69629 10.0956 10.5917 9.2002 11.6963 9.2002C12.2029 9.2002 12.6664 9.38878 13.0194 9.7002H11.1963V11.7002H16.1963V6.7002Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M23 2H1V20H6V23.3042L11.2868 20H23V2ZM21 4V18H10.7132L8 19.6958V18H3V4H21Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
