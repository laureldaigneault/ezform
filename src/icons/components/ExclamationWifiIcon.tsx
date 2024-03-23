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
export type ExclamationWifiIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<ExclamationWifiIconProps>(({ theme, ...props }) => {
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
export default function ExclamationWifiIcon({ className = '', ...props }: ExclamationWifiIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M12.9999 3V17H10.9999V3H12.9999Z" fill="currentcolor"/><path d="M9.22995 6.23795L8.26599 6.504C6.15974 7.08532 4.25146 8.14715 2.66685 9.56541L1.92172 10.2323L0.587891 8.74205L1.33303 8.07514C3.14226 6.45583 5.32346 5.24136 7.73389 4.57608L8.69785 4.31003L9.22995 6.23795Z" fill="currentcolor"/><path d="M15.302 4.31003L16.266 4.57608C18.6764 5.24136 20.8576 6.45583 22.6669 8.07514L23.412 8.74205L22.0782 10.2323L21.333 9.56541C19.7484 8.14715 17.8401 7.08532 15.7339 6.504L14.7699 6.23795L15.302 4.31003Z" fill="currentcolor"/><path d="M9.31666 12.3459L8.40031 12.7463C7.39072 13.1874 6.47692 13.8089 5.69998 14.5705L4.98588 15.2706L3.5858 13.8424L4.2999 13.1423C5.24798 12.2129 6.36423 11.4533 7.59957 10.9136L8.51592 10.5132L9.31666 12.3459Z" fill="currentcolor"/><path d="M15.484 10.5132L16.4003 10.9136C17.6356 11.4533 18.7519 12.2129 19.7 13.1423L20.4141 13.8424L19.014 15.2706L18.2999 14.5705C17.523 13.8089 16.6092 13.1874 15.5996 12.7463L14.6832 12.3459L15.484 10.5132Z" fill="currentcolor"/><path d="M10.9999 19H13.0099V21H10.9999V19Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
