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
export type MoneyIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<MoneyIconProps>(({ theme, ...props }) => {
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
export default function MoneyIcon({ className = '', ...props }: MoneyIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12ZM12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10Z'
          fill='currentcolor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1 4H23V20H1V4ZM3 6V7.48683C3.14463 7.54917 3.3149 7.58579 3.5 7.58579C3.83352 7.58579 4.11888 7.4669 4.29289 7.29289C4.4669 7.11888 4.58579 6.83352 4.58579 6.5C4.58579 6.3149 4.54917 6.14463 4.48683 6H3ZM6.54817 6C6.57345 6.16714 6.58579 6.33466 6.58579 6.5C6.58579 7.27595 6.31415 8.10007 5.70711 8.70711C5.10007 9.31415 4.27595 9.58579 3.5 9.58579C3.33466 9.58579 3.16714 9.57345 3 9.54817V14.4518C3.16714 14.4265 3.33466 14.4142 3.5 14.4142C4.27595 14.4142 5.10007 14.6859 5.70711 15.2929C6.31415 15.8999 6.58579 16.724 6.58579 17.5C6.58579 17.6653 6.57345 17.8329 6.54817 18H17.4518C17.4265 17.8329 17.4142 17.6653 17.4142 17.5C17.4142 16.724 17.6859 15.8999 18.2929 15.2929C18.8999 14.6859 19.724 14.4142 20.5 14.4142C20.6653 14.4142 20.8329 14.4265 21 14.4518V9.45836C20.8369 9.4858 20.6698 9.5 20.5 9.5C18.8431 9.5 17.5 8.15685 17.5 6.5C17.5 6.32967 17.5142 6.16262 17.5416 6H6.54817ZM19.6335 6C19.5483 6.14721 19.5 6.31773 19.5 6.5C19.5 7.05228 19.9477 7.5 20.5 7.5C20.5879 7.5 20.6717 7.4889 20.7507 7.46855L21 7.4044V6H19.6335ZM21 16.5132C20.8554 16.4508 20.6851 16.4142 20.5 16.4142C20.1665 16.4142 19.8811 16.5331 19.7071 16.7071C19.5331 16.8811 19.4142 17.1665 19.4142 17.5C19.4142 17.6851 19.4508 17.8554 19.5132 18H21V16.5132ZM4.48683 18C4.54917 17.8554 4.58579 17.6851 4.58579 17.5C4.58579 17.1665 4.4669 16.8811 4.29289 16.7071C4.11888 16.5331 3.83352 16.4142 3.5 16.4142C3.3149 16.4142 3.14463 16.4508 3 16.5132V18H4.48683Z'
          fill='currentcolor'
        />
      </g>
    </StyledIcon>
  );
}
