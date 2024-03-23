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
export type BellSlashIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<BellSlashIconProps>(({ theme, ...props }) => {
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
export default function BellSlashIcon({ className = '', ...props }: BellSlashIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <g clipPath="url(#clip0_1718_1245)"><path fillRule="evenodd" clipRule="evenodd" d="M2.00015 0.585815L5.60619 4.19186C7.0652 2.25462 9.38571 1.00003 12.0004 1.00003C16.4187 1.00003 20.0004 4.58175 20.0004 9.00003C19.9981 11.8569 20.5925 13.977 21.1714 15.3651C21.4613 16.0604 21.7483 16.5743 21.9565 16.9069C22.0606 17.0732 22.145 17.1941 22.2001 17.2696C22.2276 17.3073 22.2478 17.3336 22.2595 17.3485L22.2698 17.3616L22.2689 17.3605L22.267 17.3608L21.5002 19H20.4144L23.4144 22L22.0002 23.4142L0.585938 2.00003L2.00015 0.585815ZM18.4144 17H19.7208C19.5918 16.7421 19.4584 16.4537 19.3255 16.1349C18.6532 14.523 17.9978 12.1423 18.0004 8.99919C18 5.68587 15.3139 3.00003 12.0004 3.00003C9.93959 3.00003 8.12004 4.03884 7.03901 5.62468L18.4144 17Z" fill="currentcolor"/><path d="M6.01338 9.62096L5.92557 10.6171C5.69555 13.2265 5.05733 15.2011 4.46422 16.5379C4.39161 16.7016 4.3197 16.8556 4.24933 17H13.4002V19H10.0002C10.0002 20.1046 10.8956 21 12.0002 21C12.7919 21 13.4782 20.54 13.8027 19.8681L14.2376 18.9677L16.0385 19.8374L15.6037 20.7379C14.9582 22.0745 13.5882 23 12.0002 23C9.79101 23 8.00015 21.2092 8.00015 19H2.50015L1.71966 17.3771L1.71848 17.3763L1.71622 17.3792L1.72444 17.3684C1.73344 17.3565 1.74933 17.3351 1.77127 17.3042C1.81515 17.2424 1.88319 17.1428 1.96864 17.0053C2.13954 16.7303 2.37994 16.3041 2.63608 15.7268C3.14786 14.5733 3.72428 12.8126 3.93329 10.4415L4.0211 9.44534L6.01338 9.62096Z" fill="currentcolor"/></g><defs><clipPath id="clip0_1718_1245"><rect width="24" height="24" rx="2" fill="white"/></clipPath></defs>
      </g>
    </StyledIcon>
  );
}
