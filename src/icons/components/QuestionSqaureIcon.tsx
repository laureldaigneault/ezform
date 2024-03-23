import React from 'react';
import { styled } from '../../styles/theme';

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
export type QuestionSqaureIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<QuestionSqaureIconProps>(({ theme, ...props }) => {
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
  };
});
export default function QuestionSqaureIcon({ className = '', ...props }: QuestionSqaureIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <path
          d='M11.9564 8C11.1337 8 10.44 8.56264 10.2436 9.32561L9.99433 10.2941L8.05745 9.79553L8.30671 8.8271C8.725 7.20194 10.1991 6 11.9564 6C14.0377 6 15.7249 7.6872 15.7249 9.76847C15.7249 10.8994 15.1864 11.6577 14.5733 12.2541C14.3129 12.5074 14.0161 12.7535 13.7374 12.9845C13.7055 13.0109 13.6739 13.0371 13.6426 13.0631C13.3253 13.3267 13.0123 13.5915 12.7027 13.8973L11.9912 14.6L10.5858 13.1769L11.2973 12.4742C11.6725 12.1037 12.0425 11.7923 12.3645 11.5248C12.3947 11.4997 12.4243 11.4751 12.4534 11.451C12.7454 11.2087 12.9788 11.015 13.1787 10.8205C13.5857 10.4246 13.7249 10.1505 13.7249 9.76847C13.7249 8.79177 12.9331 8 11.9564 8Z'
          fill='currentcolor'
        />
        <path d='M10.97 16H12.98V18H10.97V16Z' fill='currentcolor' />
        <path fillRule='evenodd' clipRule='evenodd' d='M2 2H22V22H2V2ZM4 4V20H20V4H4Z' fill='currentcolor' />
      </g>
    </StyledIcon>
  );
}
