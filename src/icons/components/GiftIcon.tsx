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
export type GiftIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<GiftIconProps>(({ theme, ...props }) => {
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
export default function GiftIcon({ className = '', ...props }: GiftIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M7.27306 1C9.24597 1 11.0142 2.0392 12 3.64395C12.9858 2.0392 14.754 1 16.7269 1C18.5346 1 20 2.4654 20 4.27306V4.5C20 5.0368 19.8792 5.54537 19.6632 6H23V13H21V23H3V13H1V6H4.33682C4.12085 5.54537 4 5.0368 4 4.5V4.27306C4 2.4654 5.4654 1 7.27306 1ZM7.27306 3C6.56997 3 6 3.56997 6 4.27306V4.5C6 5.32843 6.67157 6 7.5 6H10.7802L10.7503 5.85068C10.4188 4.19313 8.96344 3 7.27306 3ZM3 8V11H11V8H3ZM13 8V11H21V8H13ZM19 13H13V21H19V13ZM11 21V13H5V21H11ZM13.2198 6H16.5C17.3284 6 18 5.32843 18 4.5V4.27306C18 3.56997 17.43 3 16.7269 3C15.0366 3 13.5812 4.19313 13.2497 5.85068L13.2198 6Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
