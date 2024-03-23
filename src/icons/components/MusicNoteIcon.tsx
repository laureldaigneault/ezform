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
export type MusicNoteIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<MusicNoteIconProps>(({ theme, ...props }) => {
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
export default function MusicNoteIcon({ className = '', ...props }: MusicNoteIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M19.5 0.646057V7.73859L13 9.73859V19.5C13 20.5971 12.3757 21.4961 11.5561 22.0815C10.7346 22.6683 9.65089 23 8.5 23C7.34911 23 6.26542 22.6683 5.44389 22.0815C4.62427 21.4961 4 20.5971 4 19.5C4 18.4029 4.62427 17.504 5.44389 16.9185C6.26542 16.3317 7.34911 16 8.5 16C9.40685 16 10.272 16.206 11 16.5804V3.26144L19.5 0.646057ZM11 19.5C11 19.2164 10.8408 18.8654 10.3936 18.546C9.94842 18.228 9.2821 18 8.5 18C7.7179 18 7.05158 18.228 6.60636 18.546C6.15923 18.8654 6 19.2164 6 19.5C6 19.7836 6.15923 20.1347 6.60636 20.4541C7.05158 20.7721 7.7179 21 8.5 21C9.2821 21 9.94842 20.7721 10.3936 20.4541C10.8408 20.1347 11 19.7836 11 19.5ZM13 7.64606L17.5 6.26144V3.35398L13 4.73859V7.64606Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
