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
export type VolumeMediumIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<VolumeMediumIconProps>(({ theme, ...props }) => {
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
export default function VolumeMediumIcon({ className = '', ...props }: VolumeMediumIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M11 0.237976V23.7621L4.53163 16H1V8.00003H4.53163L11 0.237976ZM9 5.76208L5.46838 10H3V14H5.46838L9 18.238V5.76208Z" fill="currentcolor"/><path d="M15.5472 5.88218L16.3323 6.50155C17.955 7.78177 18.9996 9.76913 18.9996 11.9999C18.9996 14.2307 17.955 16.218 16.3323 17.4982L15.5472 18.1176L14.3084 16.5474L15.0935 15.9281C16.2562 15.0108 16.9996 13.5924 16.9996 11.9999C16.9996 10.4073 16.2562 8.98902 15.0935 8.07174L14.3084 7.45237L15.5472 5.88218Z" fill="currentcolor"/><path d="M12.6351 8.90127L13.5007 9.40199C14.3948 9.9192 15 10.8884 15 12C15 13.1117 14.3948 14.0809 13.5007 14.5981L12.6351 15.0988L11.6337 13.3676L12.4993 12.8669C12.8008 12.6924 13 12.3689 13 12C13 11.6311 12.8008 11.3076 12.4993 11.1332L11.6337 10.6325L12.6351 8.90127Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
