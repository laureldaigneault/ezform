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
export type GiftCardIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<GiftCardIconProps>(({ theme, ...props }) => {
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
export default function GiftCardIcon({ className = '', ...props }: GiftCardIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M16.7269 2C18.5346 2 20 3.4654 20 5.27306V5.5C20 6.0368 19.8792 6.54537 19.6632 7H23V22H1V7H4.33682C4.12085 6.54537 4 6.0368 4 5.5V5.27306C4 3.4654 5.4654 2 7.27307 2C9.24597 2 11.0142 3.0392 12 4.64395C12.9858 3.0392 14.754 2 16.7269 2ZM7.27307 4C6.56997 4 6 4.56997 6 5.27306V5.5C6 6.32843 6.67157 7 7.5 7H10.7802L10.7503 6.85068C10.4188 5.19313 8.96344 4 7.27307 4ZM10.382 9H3V16H21V9H13.618L14.8944 11.5528C15.1414 12.0468 14.9412 12.6474 14.4472 12.8944C13.9532 13.1414 13.3526 12.9412 13.1056 12.4472L12 10.2361L10.8944 12.4472C10.6474 12.9412 10.0468 13.1414 9.55279 12.8944C9.05881 12.6474 8.85858 12.0468 9.10557 11.5528L10.382 9ZM13.2198 7H16.5C17.3284 7 18 6.32843 18 5.5V5.27306C18 4.56997 17.43 4 16.7269 4C15.0366 4 13.5812 5.19313 13.2497 6.85068L13.2198 7ZM3 18V20H21V18H3Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
