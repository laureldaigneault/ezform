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
export type TrophyIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<TrophyIconProps>(({ theme, ...props }) => {
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
export default function TrophyIcon({ className = '', ...props }: TrophyIconProps): React.ReactElement {
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
          d='M6 1H18V4H22V7C22 11.2776 18.6427 14.7711 14.4193 14.9892C14.3447 15.0676 14.2691 15.1451 14.1924 15.2218L13 16.4142V21H17V23H7V21H11V16.4142L9.80761 15.2218C9.73092 15.1451 9.65529 15.0676 9.58072 14.9892C5.35733 14.7711 2 11.2776 2 7V4H6V1ZM6 6H4V7C4 9.5238 5.55824 11.6837 7.76512 12.57C6.61888 10.6009 6 8.34707 6 6.02944V6ZM12 14.5858L12.7782 13.8076C14.8411 11.7447 16 8.94682 16 6.02944V3H8V6.02944C8 8.94682 9.15892 11.7447 11.2218 13.8076L12 14.5858ZM16.2349 12.57C18.4418 11.6837 20 9.5238 20 7V6H18V6.02944C18 8.34707 17.3811 10.6009 16.2349 12.57Z'
          fill='currentcolor'
        />
      </g>
    </StyledIcon>
  );
}
