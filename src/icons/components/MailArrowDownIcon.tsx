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
export type MailArrowDownIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<MailArrowDownIconProps>(({ theme, ...props }) => {
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
export default function MailArrowDownIcon({ className = '', ...props }: MailArrowDownIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V12C23 12.5523 22.5523 13 22 13C21.4477 13 21 12.5523 21 12V8.92066L13.7204 14.0164C12.6874 14.7395 11.3126 14.7395 10.2796 14.0164L3 8.92066V18C3 18.5523 3.44772 19 4 19H14C14.5523 19 15 19.4477 15 20C15 20.5523 14.5523 21 14 21H4C2.34315 21 1 19.6569 1 18V6ZM3 6.47934L11.4265 12.3779C11.7709 12.6189 12.2291 12.6189 12.5735 12.3779L21 6.47934V6C21 5.44772 20.5523 5 20 5H4C3.44772 5 3 5.44772 3 6V6.47934Z" fill="currentcolor"/><path d="M20 15C20.5523 15 21 15.4477 21 16V19.5858L21.2929 19.2929C21.6834 18.9024 22.3166 18.9024 22.7071 19.2929C23.0976 19.6834 23.0976 20.3166 22.7071 20.7071L20.7071 22.7071C20.3166 23.0976 19.6834 23.0976 19.2929 22.7071L17.2929 20.7071C16.9024 20.3166 16.9024 19.6834 17.2929 19.2929C17.6834 18.9024 18.3166 18.9024 18.7071 19.2929L19 19.5858V16C19 15.4477 19.4477 15 20 15Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
