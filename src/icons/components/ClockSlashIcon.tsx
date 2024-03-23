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
export type ClockSlashIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<ClockSlashIconProps>(({ theme, ...props }) => {
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
export default function ClockSlashIcon({ className = '', ...props }: ClockSlashIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <g clipPath="url(#clip0_1718_1292)"><path fillRule="evenodd" clipRule="evenodd" d="M2.00015 0.585815L3.00015 1.58582L4.00015 0.585815L5.41436 2.00003L4.41436 3.00003L5.67146 4.25712C7.39482 2.84711 9.59928 2.00003 12.0002 2.00003C17.523 2.00003 22.0002 6.47718 22.0002 12C22.0002 14.4009 21.1531 16.6054 19.7431 18.3287L23.4144 22L22.0002 23.4142L0.585938 2.00003L2.00015 0.585815ZM7.09445 5.68012L11.0002 9.58582V7.00003H13.0002V11.5858L18.3201 16.9057C19.3737 15.5506 20.0002 13.8492 20.0002 12C20.0002 7.58175 16.4184 4.00003 12.0002 4.00003C10.151 4.00003 8.44954 4.62647 7.09445 5.68012Z" fill="currentcolor"/><path d="M20.0002 0.585815L23.4144 4.00003L22.0002 5.41424L18.5859 2.00003L20.0002 0.585815Z" fill="currentcolor"/><path d="M4.75331 8.46112L4.42939 9.4072C4.15143 10.219 4.00015 11.0908 4.00015 12C4.00015 16.4183 7.58187 20 12.0002 20C12.9094 20 13.7811 19.8487 14.593 19.5708L15.5391 19.2469L16.1869 21.139L15.2408 21.463C14.2232 21.8114 13.1327 22 12.0002 22C6.4773 22 2.00015 17.5229 2.00015 12C2.00015 10.8675 2.18881 9.77695 2.53722 8.75936L2.86115 7.81327L4.75331 8.46112Z" fill="currentcolor"/></g><defs><clipPath id="clip0_1718_1292"><rect width="24" height="24" fill="white"/></clipPath></defs>
      </g>
    </StyledIcon>
  );
}
