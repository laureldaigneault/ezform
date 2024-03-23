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
export type MailOpenPlusIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<MailOpenPlusIconProps>(({ theme, ...props }) => {
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
export default function MailOpenPlusIcon({ className = '', ...props }: MailOpenPlusIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <path d='M13 6.00001V8.50001H15.5V10.5H13V13H11V10.5H8.5V8.50001H11V6.00001H13Z' fill='currentcolor' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12 0.833817L23 7.43382V22H1V7.43382L12 0.833817ZM3 10.9207L12 17.2207L21 10.9207V20H3V10.9207ZM20.9332 8.52611L12 3.1662L3.0668 8.52611L12 14.7794L20.9332 8.52611Z'
          fill='currentcolor'
        />
      </g>
    </StyledIcon>
  );
}
