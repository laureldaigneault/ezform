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
export type ShieldCheckIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<ShieldCheckIconProps>(({ theme, ...props }) => {
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
export default function ShieldCheckIcon({ className = '', ...props }: ShieldCheckIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <path
          d='M17.4129 8.9386L10.5 16.4799L6.58712 12.2113L8.06143 10.8599L10.5 13.5201L15.9386 7.58715L17.4129 8.9386Z'
          fill='currentcolor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12 0.585815L14.4142 3.00003H22V12.801C22 16.3577 19.9054 19.5808 16.6552 21.0253L12 23.0943L7.34475 21.0253C4.0946 19.5808 2 16.3577 2 12.801V3.00003H9.58579L12 0.585815ZM12 3.41424L10.4142 5.00003H4V12.801C4 15.5674 5.62914 18.0742 8.15703 19.1977L12 20.9057L15.843 19.1977C18.3709 18.0742 20 15.5674 20 12.801V5.00003H13.5858L12 3.41424Z'
          fill='currentcolor'
        />
      </g>
    </StyledIcon>
  );
}
