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
export type DiamondTurnRightIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<DiamondTurnRightIconProps>(({ theme, ...props }) => {
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
export default function DiamondTurnRightIcon({
  className = '',
  ...props
}: DiamondTurnRightIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <g clipPath='url(#clip0_1718_1453)'>
          <path
            d='M8.00015 11L12.5859 11L11.5859 9.99998L13.0002 8.58576L16.4144 12L13.0002 15.4142L11.5859 14L12.5859 13H10.0002V15H8.00015V11Z'
            fill='currentcolor'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M0.585938 12L12.0002 0.585693L23.4145 12L12.0002 23.4143L0.585938 12ZM3.41436 12L12.0002 20.5858L20.5861 12L12.0002 3.41412L3.41436 12Z'
            fill='currentcolor'
          />
        </g>
        <defs>
          <clipPath id='clip0_1718_1453'>
            <rect width='24' height='24' fill='white' />
          </clipPath>
        </defs>
      </g>
    </StyledIcon>
  );
}
