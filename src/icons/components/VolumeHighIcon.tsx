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
export type VolumeHighIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<VolumeHighIconProps>(({ theme, ...props }) => {
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
export default function VolumeHighIcon({ className = '', ...props }: VolumeHighIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M11 0.237976V23.7621L4.53163 16H1V8.00003H4.53163L11 0.237976ZM9 5.76208L5.46838 10H3V14H5.46838L9 18.238V5.76208Z" fill="currentcolor"/><path d="M18.4543 3.03584L19.2094 3.6915C21.5302 5.70682 23.0002 8.68233 23.0002 12C23.0002 15.3177 21.5302 18.2933 19.2094 20.3086L18.4543 20.9642L17.143 19.4541L17.8981 18.7985C19.8001 17.1468 21.0002 14.7142 21.0002 12C21.0002 9.2859 19.8001 6.85324 17.8981 5.20162L17.143 4.54596L18.4543 3.03584Z" fill="currentcolor"/><path d="M15.5472 5.88242L16.3323 6.5018C17.955 7.78202 18.9996 9.76938 18.9996 12.0001C18.9996 14.2309 17.955 16.2183 16.3323 17.4985L15.5472 18.1179L14.3084 16.5477L15.0935 15.9283C16.2562 15.011 16.9996 13.5927 16.9996 12.0001C16.9996 10.4076 16.2562 8.98927 15.0935 8.07199L14.3084 7.45261L15.5472 5.88242Z" fill="currentcolor"/><path d="M12.6351 8.90127L13.5007 9.40199C14.3948 9.9192 15 10.8884 15 12C15 13.1117 14.3948 14.0809 13.5007 14.5981L12.6351 15.0988L11.6337 13.3676L12.4993 12.8669C12.8008 12.6924 13 12.3689 13 12C13 11.6311 12.8008 11.3076 12.4993 11.1332L11.6337 10.6325L12.6351 8.90127Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
