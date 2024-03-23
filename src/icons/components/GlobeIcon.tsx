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
export type GlobeIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<GlobeIconProps>(({ theme, ...props }) => {
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
export default function GlobeIcon({ className = '', ...props }: GlobeIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM3.64506 8.64769C3.22896 9.68376 3 10.8151 3 12C3 12.6299 3.06472 13.2447 3.18786 13.8381C4.15716 14.3465 5.17546 14.7734 6.23385 15.1101C6.08126 14.123 5.99986 13.0788 5.99986 12.0004C5.99986 11.3391 6.03047 10.6911 6.08922 10.0616C5.22511 9.66992 4.40699 9.19519 3.64506 8.64769ZM4.60385 6.87053C5.16606 7.29259 5.76539 7.66765 6.39597 7.98992C6.70469 6.4924 7.18552 5.14026 7.80779 4.03394C6.52548 4.71017 5.42625 5.68694 4.60385 6.87053ZM11.7563 3.00323L11.7588 3.0192C11.1109 3.12072 10.3472 3.67034 9.64267 4.85579C9.05076 5.85176 8.56855 7.19239 8.28301 8.76387C9.455 9.13388 10.7034 9.3337 11.9999 9.3337L12.0013 9.3337C13.2717 9.33553 14.524 9.14041 15.7167 8.76382C15.4311 7.19237 14.9489 5.85175 14.357 4.8558C13.6525 3.67035 12.8888 3.12072 12.2409 3.0192L12.2434 3.00323C12.1625 3.00108 12.0814 3 12 3C11.9185 3 11.8373 3.00108 11.7563 3.00323ZM16.1918 4.03372C16.8142 5.1402 17.2951 6.49258 17.6038 7.99039C18.2298 7.67081 18.8297 7.29674 19.3964 6.87091C18.5739 5.68702 17.4744 4.71002 16.1918 4.03372ZM20.3552 8.64822C19.5858 9.20131 18.7666 9.67413 17.9105 10.0618C17.9692 10.6913 17.9998 11.3392 17.9998 12.0004C17.9998 13.0787 17.9185 14.1228 17.7659 15.1098C18.8132 14.7765 19.8327 14.3515 20.8122 13.8379C20.9353 13.2446 21 12.6298 21 12C21 10.8153 20.7711 9.68415 20.3552 8.64822ZM19.792 16.5068C18.9707 16.835 18.1302 17.1106 17.2758 17.332C16.9917 18.3009 16.6279 19.1915 16.1924 19.966C17.6932 19.1745 18.9431 17.9713 19.792 16.5068ZM12.2833 20.9956L12.2796 20.975C12.8134 20.8778 13.4259 20.4787 14.0266 19.6495C14.3894 19.1486 14.7241 18.5214 15.0109 17.787C14.0167 17.9301 13.0102 18.0019 11.9991 18.0004C10.9772 18.0003 9.97198 17.9273 8.98838 17.786C9.27532 18.5208 9.61008 19.1483 9.97308 19.6494C10.5738 20.4787 11.1863 20.8778 11.7201 20.975L11.7164 20.9956C11.8106 20.9985 11.9051 21 12 21C12.0948 21 12.1892 20.9985 12.2833 20.9956ZM7.8072 19.9657C7.37176 19.1914 7.00799 18.3008 6.72394 17.3319C5.86269 17.1091 5.0229 16.8329 4.20826 16.5073C5.05709 17.9715 6.30679 19.1744 7.8072 19.9657ZM8.36436 15.6532C9.54033 15.881 10.7556 16.0004 11.9999 16.0004L12.0014 16.0004C13.2257 16.0023 14.4425 15.8853 15.6352 15.6537C15.8689 14.5373 15.9998 13.3027 15.9998 12.0004C15.9998 11.586 15.9866 11.1783 15.961 10.7789C14.6826 11.146 13.3496 11.3356 11.9991 11.3337C10.6265 11.3336 9.2975 11.1402 8.03875 10.7789C8.01311 11.1783 7.99986 11.586 7.99986 12.0004C7.99986 13.3025 8.13074 14.5369 8.36436 15.6532Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
