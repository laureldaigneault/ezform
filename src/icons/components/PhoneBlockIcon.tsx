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
export type PhoneBlockIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<PhoneBlockIconProps>(({ theme, ...props }) => {
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
export default function PhoneBlockIcon({ className = '', ...props }: PhoneBlockIconProps): React.ReactElement {
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
          d='M1 1H7.8198L9.08554 7.32867L6.41389 10.0003C7.44973 13.6627 10.3373 16.5503 13.9997 17.5861L16.6713 14.9145L23 16.1802V23H17C8.16344 23 1 15.8366 1 7V1ZM3 3V7C3 14.732 9.26801 21 17 21H21V17.8198L17.3287 17.0855L14.6198 19.7944L14.0803 19.6706C9.24414 18.5604 5.4396 14.7559 4.32939 9.9197L4.20555 9.38024L6.91446 6.67133L6.1802 3H3Z'
          fill='currentcolor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M13 6C13 3.23858 15.2386 1 18 1C19.5801 1 20.9894 1.7341 21.9041 2.87594C22.5894 3.73154 23 4.81919 23 6C23 8.76142 20.7614 11 18 11C16.4199 11 15.0106 10.2659 14.0959 9.12406C13.4106 8.26847 13 7.18081 13 6ZM18 3C16.3431 3 15 4.34315 15 6C15 6.46393 15.1048 6.90223 15.2922 7.2936L17.2629 5.31854L17.2645 5.31701L19.2936 3.2922C18.9018 3.10471 18.4632 3 18 3ZM20.7078 4.70639L20.7064 4.70786L18.6787 6.7312L18.6772 6.73273L16.7064 8.7078C17.0982 8.89529 17.5368 9 18 9C19.6569 9 21 7.65685 21 6C21 5.53606 20.8952 5.09777 20.7078 4.70639Z'
          fill='currentcolor'
        />
      </g>
    </StyledIcon>
  );
}
