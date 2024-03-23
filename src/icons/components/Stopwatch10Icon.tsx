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
export type Stopwatch10IconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<Stopwatch10IconProps>(({ theme, ...props }) => {
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
export default function Stopwatch10Icon({ className = '', ...props }: Stopwatch10IconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M9 1H15V3H9V1Z" fill="currentcolor"/><path d="M19 2.58579L22.4142 6L21 7.41421L17.5858 4L19 2.58579Z" fill="currentcolor"/><path d="M9 12.5953L8.07046 13.6225L6.58754 12.2805L9.25854 9.329L11 10V17.5H9V12.5953Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M12 10.5L13 9.5H16L17 10.5V16.5L16 17.5H13L12 16.5V10.5ZM14 11.5V15.5H15V11.5H14Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M2.5 13.5C2.5 8.25329 6.75329 4 12 4C17.2467 4 21.5 8.25329 21.5 13.5C21.5 18.7467 17.2467 23 12 23C6.75329 23 2.5 18.7467 2.5 13.5ZM12 6C7.85786 6 4.5 9.35786 4.5 13.5C4.5 17.6421 7.85786 21 12 21C16.1421 21 19.5 17.6421 19.5 13.5C19.5 9.35786 16.1421 6 12 6Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
