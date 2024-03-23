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
export type LocationCrosshairSlashIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<LocationCrosshairSlashIconProps>(({ theme, ...props }) => {
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
export default function LocationCrosshairSlashIcon({ className = '', ...props }: LocationCrosshairSlashIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <g clipPath="url(#clip0_1718_1460)"><path fillRule="evenodd" clipRule="evenodd" d="M2.00015 0.585815L6.38251 4.96817C7.67687 3.93301 9.26441 3.24706 11.0002 3.05501V1.00003H13.0002V3.05496C17.1718 3.51611 20.4841 6.82841 20.9452 11H23.0002V13H20.9452C20.7531 14.7358 20.0672 16.3233 19.032 17.6177L23.4144 22L22.0002 23.4142L0.585938 2.00003L2.00015 0.585815ZM7.80791 6.39358L9.24299 7.82866C10.0333 7.30541 10.9817 7.00003 12.0005 7.00003C14.7619 7.00003 17.0005 9.2386 17.0005 12C17.0005 13.0188 16.6951 13.9672 16.1718 14.7575L17.6066 16.1923C18.4823 15.0234 19.0002 13.5728 19.0002 12C19.0002 8.13404 15.8661 5.00003 12.0002 5.00003C10.4274 5.00003 8.97683 5.51784 7.80791 6.39358ZM14.7082 13.2938C14.8957 12.9022 15.0005 12.4636 15.0005 12C15.0005 10.3432 13.6573 9.00003 12.0005 9.00003C11.5369 9.00003 11.0983 9.10477 10.7066 9.29231L14.7082 13.2938Z" fill="currentcolor"/><path d="M5.51175 9.18255L5.24776 10.1471C5.08654 10.7361 5.00015 11.3572 5.00015 12C5.00015 15.866 8.13416 19 12.0002 19C12.643 19 13.264 18.9136 13.8531 18.7524L14.8176 18.4884L15.3456 20.4175L14.3811 20.6815C13.9333 20.804 13.472 20.8928 13.0002 20.945V23H11.0002V20.9451C6.82853 20.484 3.51623 17.1716 3.05508 13H1.00015V11H3.05517C3.1074 10.5282 3.19617 10.0668 3.31871 9.6191L3.5827 8.65458L5.51175 9.18255Z" fill="currentcolor"/><path d="M8.99831 12.9991L9.59869 13.7988C9.76956 14.0264 9.97236 14.2292 10.2004 14.4005L10.9999 15.0011L9.79867 16.6001L8.99914 15.9995C8.62076 15.7153 8.28378 15.3786 7.99927 14.9996L7.39888 14.1999L8.99831 12.9991Z" fill="currentcolor"/></g><defs><clipPath id="clip0_1718_1460"><rect width="24" height="24" fill="white"/></clipPath></defs>
      </g>
    </StyledIcon>
  );
}
