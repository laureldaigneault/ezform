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
export type PenSlashIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<PenSlashIconProps>(({ theme, ...props }) => {
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
export default function PenSlashIcon({ className = '', ...props }: PenSlashIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <g clipPath="url(#clip0_1718_1605)"><path fillRule="evenodd" clipRule="evenodd" d="M19.0001 0.585785L23.4144 5L14.9144 13.5L23.4144 22L22.0002 23.4142L0.585938 2L2.00015 0.585788L10.5002 9.08582L19.0001 0.585785ZM15.5002 6.91423L11.9144 10.5L13.5002 12.0858L17.086 8.50002L15.5002 6.91423ZM18.5002 7.0858L16.9144 5.50001L19.0002 3.41422L20.5859 5L18.5002 7.0858Z" fill="currentcolor"/><path d="M9.11442 13.2999L3.00095 19.4142L3.00095 20.9994L4.58607 20.9999L10.7002 14.8858L12.1144 16.3L5.41423 23.0001L1.00095 22.9988V18.5858L7.70012 11.8858L9.11442 13.2999Z" fill="currentcolor"/></g><defs><clipPath id="clip0_1718_1605"><rect width="24" height="24" fill="white"/></clipPath></defs>
      </g>
    </StyledIcon>
  );
}
