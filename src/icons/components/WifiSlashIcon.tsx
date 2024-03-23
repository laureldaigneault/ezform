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
export type WifiSlashIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<WifiSlashIconProps>(({ theme, ...props }) => {
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
export default function WifiSlashIcon({ className = '', ...props }: WifiSlashIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <g clipPath='url(#clip0_1718_1645)'>
          <path
            d='M2.00015 0.585815L6.41608 5.00175C8.15572 4.35381 10.0376 4.00003 12.0002 4.00003C16.0974 4.00003 19.837 5.54141 22.6671 8.07436L23.4122 8.74128L22.0784 10.2315L21.3332 9.56463C18.8557 7.34718 15.5864 6.00003 12.0002 6.00003C10.6073 6.00003 9.2633 6.20312 7.99529 6.58096L10.514 9.09971C11.0005 9.03394 11.4967 9.00003 12.0004 9.00003C14.8491 9.00003 17.4469 10.0842 19.4 11.8608L20.1398 12.5337L18.794 14.0132L18.0543 13.3403C16.5524 11.9742 14.5889 11.11 12.4242 11.0098L23.4144 22L22.0002 23.4142L0.585938 2.00003L2.00015 0.585815Z'
            fill='currentcolor'
          />
          <path
            d='M4.62594 8.05528L3.81514 8.6406C3.4162 8.9286 3.03299 9.23712 2.66706 9.56463L1.92193 10.2315L0.588102 8.74127L1.33324 8.07436C1.7511 7.70037 2.18877 7.34799 2.6445 7.01899L3.4553 6.43367L4.62594 8.05528Z'
            fill='currentcolor'
          />
          <path
            d='M8.20849 11.774L7.35265 12.2912C6.84986 12.5951 6.37901 12.9469 5.94648 13.3403L5.20673 14.0132L3.86096 12.5337L4.6007 11.8608C5.12866 11.3806 5.70369 10.9509 6.31818 10.5795L7.17403 10.0623L8.20849 11.774Z'
            fill='currentcolor'
          />
          <path
            d='M11.8389 15.8794L10.8788 16.1591C10.2889 16.331 9.75423 16.6357 9.30976 17.04L8.57002 17.7129L7.22424 16.2334L7.96398 15.5606C8.62863 14.956 9.43081 14.4978 10.3193 14.2389L11.2794 13.9592L11.8389 15.8794Z'
            fill='currentcolor'
          />
          <path d='M11.0002 19H13.0102V21H11.0002V19Z' fill='currentcolor' />
        </g>
        <defs>
          <clipPath id='clip0_1718_1645'>
            <rect width='24' height='24' fill='white' />
          </clipPath>
        </defs>
      </g>
    </StyledIcon>
  );
}
