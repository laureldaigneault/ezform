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
export type ModemIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<ModemIconProps>(({ theme, ...props }) => {
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
export default function ModemIcon({ className = '', ...props }: ModemIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M6.70373 2.92178L6.03682 3.66691C4.76945 5.08293 4 6.95042 4 9C4 9.61243 4.06863 10.2076 4.19823 10.7787L4.41951 11.7539L2.46909 12.1965L2.24781 11.2213C2.08549 10.5059 2 9.76235 2 9C2 6.43946 2.96367 4.10161 4.54655 2.33309L5.21346 1.58795L6.70373 2.92178Z" fill="currentcolor"/><path d="M18.7872 1.58795L19.4541 2.33309C21.037 4.10161 22.0007 6.43946 22.0007 9C22.0007 9.76235 21.9152 10.5059 21.7529 11.2213L21.5316 12.1965L19.5812 11.7539L19.8024 10.7787C19.932 10.2076 20.0007 9.61243 20.0007 9C20.0007 6.95042 19.2312 5.08293 17.9639 3.66691L17.2969 2.92178L18.7872 1.58795Z" fill="currentcolor"/><path d="M9.40017 5.80118L8.79949 6.60068C8.29724 7.26918 8 8.09868 8 9.00049C8 9.57122 8.11893 10.1115 8.3324 10.6001L8.73277 11.5165L6.90006 12.3172L6.49969 11.4009C6.17797 10.6645 6 9.85197 6 9.00049C6 7.65065 6.44694 6.40231 7.20051 5.39933L7.80118 4.59983L9.40017 5.80118Z" fill="currentcolor"/><path d="M16.1988 4.59983L16.7995 5.39933C17.5531 6.40231 18 7.65065 18 9.00049C18 9.85197 17.822 10.6645 17.5003 11.4009L17.0999 12.3172L15.2672 11.5165L15.6676 10.6001C15.8811 10.1115 16 9.57122 16 9.00049C16 8.09868 15.7028 7.26918 15.2005 6.60068L14.5998 5.80118L16.1988 4.59983Z" fill="currentcolor"/><path d="M4 17H6.01V19H4V17Z" fill="currentcolor"/><path d="M7 17H9.01V19H7V17Z" fill="currentcolor"/><path d="M10 17H12.01V19H10V17Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M13 8V14H23V22H1V14H11V8H13ZM3 16V20H21V16H3Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
