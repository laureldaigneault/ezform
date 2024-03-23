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
export type MicrophoneSlashIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<MicrophoneSlashIconProps>(({ theme, ...props }) => {
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
export default function MicrophoneSlashIcon({
  className = '',
  ...props
}: MicrophoneSlashIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <g clipPath='url(#clip0_1718_1428)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M2.00015 0.585815L8.00015 6.58581V5.00003C8.00015 2.79089 9.79101 1.00003 12.0002 1.00003C14.2093 1.00003 16.0002 2.79089 16.0002 5.00003V12C16.0002 12.7414 15.7979 13.4364 15.4462 14.0318L16.891 15.4766C17.5899 14.4956 18.0002 13.2963 18.0002 12V9.00003H20.0002V12C20.0002 13.8483 19.3724 15.5513 18.32 16.9056L23.4144 22L22.0002 23.4142L0.585938 2.00003L2.00015 0.585815ZM13.9326 12.5182C13.9767 12.353 14.0002 12.1794 14.0002 12V5.00003C14.0002 3.89546 13.1047 3.00003 12.0002 3.00003C10.8956 3.00003 10.0002 3.89546 10.0002 5.00003V8.58581L13.9326 12.5182Z'
            fill='currentcolor'
          />
          <path
            d='M6.00015 9.6V12C6.00015 15.3137 8.68644 18 12.0002 18C12.3769 18 12.7447 17.9654 13.1008 17.8995L14.0841 17.7174L14.4483 19.6839L13.465 19.866C13.3115 19.8945 13.1565 19.9185 13.0002 19.938V21H17.0002V23H7.00015V21H11.0002V19.9381C7.05384 19.446 4.00015 16.0796 4.00015 12V9.6H6.00015Z'
            fill='currentcolor'
          />
        </g>
        <defs>
          <clipPath id='clip0_1718_1428'>
            <rect width='24' height='24' fill='white' />
          </clipPath>
        </defs>
      </g>
    </StyledIcon>
  );
}
