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
export type WifiIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<WifiIconProps>(({ theme, ...props }) => {
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
export default function WifiIcon({ className = '', ...props }: WifiIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <path
          d='M11.9999 6C8.41365 6 5.14438 7.34716 2.66685 9.5646L1.92172 10.2315L0.587891 8.74125L1.33303 8.07433C4.16306 5.54138 7.90269 4 11.9999 4C16.0972 4 19.8368 5.54138 22.6669 8.07433L23.412 8.74125L22.0782 10.2315L21.333 9.5646C18.8555 7.34716 15.5862 6 11.9999 6Z'
          fill='currentcolor'
        />
        <path
          d='M12.0002 11C9.6683 11 7.54559 11.8855 5.94627 13.3403L5.20652 14.0132L3.86074 12.5337L4.60049 11.8608C6.55359 10.0842 9.15142 9 12.0002 9C14.8489 9 17.4467 10.0842 19.3998 11.8608L20.1396 12.5337L18.7938 14.0132L18.054 13.3403C16.4547 11.8855 14.332 11 12.0002 11Z'
          fill='currentcolor'
        />
        <path
          d='M12 16C10.9633 16 10.0208 16.3931 9.30955 17.04L8.5698 17.7129L7.22403 16.2334L7.96377 15.5605C9.02877 14.5918 10.4465 14 12 14C13.5536 14 14.9713 14.5918 16.0363 15.5605L16.7761 16.2334L15.4303 17.7129L14.6905 17.04C13.9793 16.3931 13.0368 16 12 16Z'
          fill='currentcolor'
        />
        <path d='M10.9999 19H13.0099V21H10.9999V19Z' fill='currentcolor' />
      </g>
    </StyledIcon>
  );
}
