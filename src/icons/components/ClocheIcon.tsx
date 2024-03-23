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
export type ClocheIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<ClocheIconProps>(({ theme, ...props }) => {
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
export default function ClocheIcon({ className = '', ...props }: ClocheIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M11 10V8H12C13.3844 8 14.5783 8.27785 15.5866 8.89834C16.5961 9.51955 17.3338 10.4314 17.8944 11.5528L18.3416 12.4472L16.5528 13.3416L16.1056 12.4472C15.6662 11.5686 15.1539 10.9804 14.5384 10.6017C13.9217 10.2222 13.1156 10 12 10H11Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M14.3747 5.28366C14.456 5.03717 14.5 4.77372 14.5 4.5C14.5 3.11929 13.3807 2 12 2C10.6193 2 9.5 3.11929 9.5 4.5C9.5 4.77372 9.54399 5.03717 9.62529 5.28366C5.24879 6.34959 2 10.2954 2 15V19H22V15C22 10.2954 18.7512 6.34959 14.3747 5.28366ZM12 4C11.7239 4 11.5 4.22386 11.5 4.5C11.5 4.77614 11.7239 5 12 5C12.2761 5 12.5 4.77614 12.5 4.5C12.5 4.22386 12.2761 4 12 4ZM12 7C7.58172 7 4 10.5817 4 15V17H20V15C20 10.5817 16.4183 7 12 7Z" fill="currentcolor"/><path d="M1 20H23V22H1V20Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
