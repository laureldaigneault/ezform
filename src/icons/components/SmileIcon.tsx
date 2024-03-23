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
export type SmileIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<SmileIconProps>(({ theme, ...props }) => {
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
export default function SmileIcon({ className = '', ...props }: SmileIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <path
          d='M7.84961 9.29961C7.84961 8.4988 8.4988 7.84961 9.29961 7.84961C10.1004 7.84961 10.7496 8.4988 10.7496 9.29961C10.7496 10.1004 10.1004 10.7496 9.29961 10.7496C8.4988 10.7496 7.84961 10.1004 7.84961 9.29961Z'
          fill='currentcolor'
        />
        <path
          d='M13.25 9.29961C13.25 8.4988 13.8992 7.84961 14.7 7.84961C15.5008 7.84961 16.15 8.4988 16.15 9.29961C16.15 10.1004 15.5008 10.7496 14.7 10.7496C13.8992 10.7496 13.25 10.1004 13.25 9.29961Z'
          fill='currentcolor'
        />
        <path
          d='M7.932 12.6833L8.33237 13.5996C8.95053 15.0144 10.3613 16 12 16C13.6387 16 15.0494 15.0144 15.6676 13.5996L16.0679 12.6833L17.9007 13.484L17.5003 14.4004C16.5753 16.5174 14.4619 18 12 18C9.53803 18 7.42462 16.5174 6.49966 14.4004L6.09929 13.484L7.932 12.6833Z'
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
