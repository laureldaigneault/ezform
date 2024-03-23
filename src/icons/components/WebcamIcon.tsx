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
export type WebcamIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<WebcamIconProps>(({ theme, ...props }) => {
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
export default function WebcamIcon({ className = '', ...props }: WebcamIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M7.99996 9C7.99996 6.79086 9.79082 5 12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13C9.79082 13 7.99996 11.2091 7.99996 9ZM12 7C10.8954 7 9.99996 7.89543 9.99996 9C9.99996 10.1046 10.8954 11 12 11C13.1045 11 14 10.1046 14 9C14 7.89543 13.1045 7 12 7Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M3.99996 9C3.99996 4.58172 7.58169 1 12 1C16.4182 1 20 4.58172 20 9C20 11.1038 19.1879 13.0179 17.8602 14.446L23.2167 19.8025L21.618 23H2.38193L0.783203 19.8025L6.13977 14.446C4.81202 13.0179 3.99996 11.1038 3.99996 9ZM12 3C8.68626 3 5.99996 5.68629 5.99996 9C5.99996 12.3137 8.68626 15 12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3ZM7.6798 15.7344L3.21672 20.1975L3.618 21H20.3819L20.7832 20.1975L16.3201 15.7344C15.0741 16.5354 13.5913 17 12 17C10.4086 17 8.92583 16.5354 7.6798 15.7344Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
