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
export type MailRefreshIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<MailRefreshIconProps>(({ theme, ...props }) => {
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
export default function MailRefreshIcon({ className = '', ...props }: MailRefreshIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M1 3H23V13H21V8.92066L12 15.2207L3 8.92066V19H12.5V21H1V3ZM3 6.47934L12 12.7793L21 6.47934V5H3V6.47934Z" fill="currentcolor"/><path d="M18.5 17.5C17.3954 17.5 16.5 18.3954 16.5 19.5C16.5 20.6046 17.3954 21.5 18.5 21.5C19.0129 21.5 19.4786 21.3083 19.8331 20.991L20.5782 20.3241L21.912 21.8143L21.1669 22.4812C20.4599 23.114 19.5238 23.5 18.5 23.5C16.2909 23.5 14.5 21.7091 14.5 19.5C14.5 17.2909 16.2909 15.5 18.5 15.5C19.4465 15.5 20.3156 15.8286 21 16.3774V15H23V20H18V18H19.8231C19.4701 17.6886 19.0067 17.5 18.5 17.5Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
