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
export type MaskFaceIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<MaskFaceIconProps>(({ theme, ...props }) => {
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
export default function MaskFaceIcon({ className = '', ...props }: MaskFaceIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M9 11H15V13H9V11Z" fill="currentcolor"/><path d="M10 14H14V16H10V14Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M10.6972 4H13.3028L16.3028 6H19V7H23V14.7208L19 16.0541V17.5352L15.3028 20H8.69722L5 17.5352V16.0541L1 14.7208V7H5V6H7.69722L10.6972 4ZM5 9H3V13.2792L5 13.9459V9ZM7 8H8.30278L11.3028 6H12.6972L15.6972 8H17V16.4648L14.6972 18H9.30278L7 16.4648V8ZM19 9V13.9459L21 13.2792V9H19Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
