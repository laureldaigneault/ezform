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
export type PercentageIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<PercentageIconProps>(({ theme, ...props }) => {
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
export default function PercentageIcon({ className = '', ...props }: PercentageIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M22.4144 3.00003L3.00015 22.4142L1.58594 21L21.0002 1.58582L22.4144 3.00003Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M2.00015 6.50003C2.00015 4.01475 4.01487 2.00003 6.50015 2.00003C8.98543 2.00003 11.0002 4.01475 11.0002 6.50003C11.0002 8.98531 8.98543 11 6.50015 11C4.01487 11 2.00015 8.98531 2.00015 6.50003ZM6.50015 4.00003C5.11944 4.00003 4.00015 5.11932 4.00015 6.50003C4.00015 7.88074 5.11944 9.00003 6.50015 9.00003C7.88086 9.00003 9.00015 7.88074 9.00015 6.50003C9.00015 5.11932 7.88086 4.00003 6.50015 4.00003Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M13.0002 17.5C13.0002 15.0147 15.0149 13 17.5002 13C19.9854 13 22.0002 15.0147 22.0002 17.5C22.0002 19.9853 19.9854 22 17.5002 22C15.0149 22 13.0002 19.9853 13.0002 17.5ZM17.5002 15C16.1194 15 15.0002 16.1193 15.0002 17.5C15.0002 18.8807 16.1194 20 17.5002 20C18.8809 20 20.0002 18.8807 20.0002 17.5C20.0002 16.1193 18.8809 15 17.5002 15Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
