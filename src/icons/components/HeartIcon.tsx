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
export type HeartIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<HeartIconProps>(({ theme, ...props }) => {
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
export default function HeartIcon({ className = '', ...props }: HeartIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M11.9929 3.717C9.65298 1.67211 6.19252 1.25366 3.50521 3.54975C0.598423 6.03337 0.176093 10.2162 2.47471 13.174C3.51793 14.5164 5.76496 16.6829 7.68698 18.4631C8.66084 19.3652 9.57226 20.187 10.24 20.7832C10.574 21.0814 10.8473 21.3235 11.0373 21.4911C11.1324 21.5749 11.2066 21.6402 11.2572 21.6846L11.3339 21.7518L11.3349 21.7527C11.335 21.7528 11.3353 21.753 11.9933 21L11.3349 21.7527L11.9933 22.328L12.6512 21.753L11.9933 21C12.6512 21.753 12.6512 21.7531 12.6512 21.753L12.7294 21.6846C12.78 21.6402 12.8542 21.5749 12.9492 21.4911C13.1392 21.3235 13.4126 21.0814 13.7465 20.7832C14.4143 20.187 15.3257 19.3652 16.2996 18.4631C18.2216 16.6829 20.4686 14.5164 21.5118 13.174C23.8016 10.2275 23.4445 6.01247 20.4709 3.54098C17.7537 1.28255 14.3301 1.67133 11.9929 3.717ZM11.9933 19.6664C11.8675 19.5548 11.7264 19.4292 11.572 19.2914C10.9105 18.7007 10.0085 17.8873 9.04603 16.9958C7.09537 15.1891 4.97793 13.1358 4.05392 11.9468C2.41807 9.8418 2.7011 6.86742 4.80441 5.0703C6.818 3.34984 9.52828 3.79247 11.2333 5.78584L11.9933 6.67425L12.7532 5.78584C14.4507 3.80128 17.1256 3.36114 19.1925 5.07907C21.3152 6.84329 21.5773 9.83043 19.9326 11.9468C19.0086 13.1358 16.8912 15.1891 14.9405 16.9958C13.978 17.8873 13.0761 18.7007 12.4145 19.2914C12.2602 19.4292 12.119 19.5548 11.9933 19.6664Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
