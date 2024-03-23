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
export type CapsuleIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<CapsuleIconProps>(({ theme, ...props }) => {
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
export default function CapsuleIcon({ className = '', ...props }: CapsuleIconProps): React.ReactElement {
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
          d='M16.2061 7.79232L12.2067 3.7929C9.88314 1.46938 6.11597 1.46938 3.79245 3.7929C1.46892 6.11642 1.46892 9.8836 3.79245 12.2071L7.79186 16.2065C7.79166 16.2063 7.79205 16.2067 7.79186 16.2065C7.79205 16.2067 7.79284 16.2075 7.79303 16.2077L11.7924 20.2071C14.116 22.5306 17.8831 22.5306 20.2067 20.2071C22.5302 17.8836 22.5302 14.1164 20.2067 11.7929L16.2072 7.79349C16.2074 7.79369 16.2071 7.7933 16.2072 7.79349C16.2071 7.7933 16.2063 7.79251 16.2061 7.79232ZM10.7924 5.20712C9.24997 3.66464 6.74913 3.66464 5.20666 5.20712C3.66419 6.74959 3.66419 9.25043 5.20666 10.7929L8.49955 14.0858L14.0853 8.50001L10.7924 5.20712ZM15.4996 9.91422L9.91377 15.5L13.2067 18.7929C14.7491 20.3354 17.25 20.3354 18.7924 18.7929C20.3349 17.2504 20.3349 14.7496 18.7924 13.2071L15.4996 9.91422Z'
          fill='currentcolor'
        />
      </g>
    </StyledIcon>
  );
}
