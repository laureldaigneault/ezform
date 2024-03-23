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
export type MailSearchIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<MailSearchIconProps>(({ theme, ...props }) => {
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
export default function MailSearchIcon({ className = '', ...props }: MailSearchIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M1 3H23L22.9995 13.0001L20.9995 12.9999L20.9998 8.92077L12 15.2207L3 8.92066V19H13V21H1V3ZM3 6.47934L12 12.7793L21 6.47934V5H3V6.47934Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M21.581 20.1619C21.8483 19.6675 22 19.1015 22 18.5C22 16.567 20.433 15 18.5 15C16.567 15 15 16.567 15 18.5C15 20.433 16.567 22 18.5 22C19.1041 22 19.6724 21.847 20.1683 21.5776L21.9962 23.4143L23.4138 22.0034L21.581 20.1619ZM18.5 17C17.6716 17 17 17.6716 17 18.5C17 19.3284 17.6716 20 18.5 20C18.9023 20 19.2677 19.8416 19.537 19.5838L19.5788 19.5422C19.8396 19.2724 20 18.9049 20 18.5C20 17.6716 19.3284 17 18.5 17Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
