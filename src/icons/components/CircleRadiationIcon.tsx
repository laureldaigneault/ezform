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
export type CircleRadiationIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<CircleRadiationIconProps>(({ theme, ...props }) => {
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
export default function CircleRadiationIcon({
  className = '',
  ...props
}: CircleRadiationIconProps): React.ReactElement {
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
          d='M9.31588 5.67105L11.5569 9.0325C11.7015 9.01109 11.8494 9 12 9C12.1506 9 12.2985 9.01109 12.4431 9.0325L14.6841 5.67112L15.4934 6.13019C17.5734 7.31002 19 9.48345 19 12V13H14.8293C14.6943 13.3821 14.484 13.7286 14.2164 14.0218L16.3656 17.2456L15.5866 17.8099C14.555 18.5571 13.3262 19 11.9998 19C10.6737 19 9.44495 18.5572 8.41345 17.8102L7.63439 17.246L9.78363 14.0218C9.51598 13.7286 9.30574 13.3821 9.17071 13H5V12C5 9.48358 6.42662 7.31029 8.50653 6.13024L9.31588 5.67105ZM9.17071 11C9.30574 10.6179 9.51597 10.2714 9.78361 9.97819L8.72985 8.39756C7.91638 9.07525 7.34145 9.98253 7.11141 11H9.17071ZM14.2164 9.97819C14.484 10.2714 14.6943 10.6179 14.8293 11H16.8886C16.6586 9.98242 16.0836 9.07511 15.2702 8.3975L14.2164 9.97819ZM11.5569 14.9675L10.4224 16.6693C10.9208 16.8854 11.4515 17 11.9998 17C12.5483 17 13.0791 16.8853 13.5776 16.6691L12.4431 14.9675C12.2985 14.9889 12.1506 15 12 15C11.8494 15 11.7015 14.9889 11.5569 14.9675ZM12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11Z'
          fill='currentcolor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z'
          fill='currentcolor'
        />
      </g>
    </StyledIcon>
  );
}
