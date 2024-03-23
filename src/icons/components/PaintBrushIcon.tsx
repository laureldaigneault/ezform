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
export type PaintBrushIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<PaintBrushIconProps>(({ theme, ...props }) => {
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
export default function PaintBrushIcon({ className = '', ...props }: PaintBrushIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M21.0277 0.61351L23.3344 2.92023L11.3143 18.2186C11.081 20.3453 9.27864 22 7.08979 22H1.99995L1.55273 20.1056L2.95502 19.4044L2.83979 17.7856V17.75C2.83979 15.4103 4.7304 13.5122 7.06723 13.5001L21.0277 0.61351ZM10.91 15.4959L12.7454 13.1599L11.6121 12.0266L9.44301 14.0289L10.91 15.4959ZM13.0829 10.669L13.9899 11.576L18.9786 5.22679L13.0829 10.669ZM5.00248 20L4.84002 17.7177C4.85732 16.4899 5.85795 15.5 7.08979 15.5C8.33243 15.5 9.33979 16.5074 9.33979 17.75C9.33979 18.9926 8.33243 20 7.08979 20H5.00248Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
