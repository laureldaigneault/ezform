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
export type ScissorsIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<ScissorsIconProps>(({ theme, ...props }) => {
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
export default function ScissorsIcon({ className = '', ...props }: ScissorsIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M1 18.9775C1 21.1867 2.79086 22.9775 5 22.9775C7.20914 22.9775 9 21.1867 9 18.9775C9 17.4592 8.15404 16.1385 6.90775 15.4609L10.6328 13.1688L22.3266 20.376L23.376 18.6734L12.5403 11.995L23.3757 5.32761L22.3276 3.62425L10.6337 10.8199L6.90177 8.51986C8.15133 7.8433 9 6.52076 9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 6.48499 1.80921 7.78097 3.01072 8.47105L8.7262 11.9937L3.08521 15.4648C1.84277 16.1434 1 17.4621 1 18.9775ZM4.07687 17.2029L3.83497 17.3517C3.32936 17.7147 3 18.3076 3 18.9775C3 20.0821 3.89543 20.9775 5 20.9775C6.10457 20.9775 7 20.0821 7 18.9775C7 17.873 6.10457 16.9775 5 16.9775C4.66702 16.9775 4.35304 17.0589 4.07687 17.2029ZM3.88401 6.65993C3.35075 6.30071 3 5.69132 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5C7 6.10457 6.10457 7 5 7C4.64472 7 4.31107 6.90736 4.0219 6.74492L3.88401 6.65993Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
