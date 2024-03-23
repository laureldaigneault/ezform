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
export type LocationPinSlashIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<LocationPinSlashIconProps>(({ theme, ...props }) => {
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
export default function LocationPinSlashIcon({
  className = '',
  ...props
}: LocationPinSlashIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <g clipPath='url(#clip0_1718_1464)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M2.00015 0.585815L0.585938 2.00003L22.0002 23.4142L23.4144 22L18.244 16.8297C19.8338 14.7807 21.0002 12.5478 21.0002 10C21.0002 5.02947 16.9707 1.00003 12.0002 1.00003C9.36515 1.00003 6.99491 2.1331 5.35004 3.93571L2.00015 0.585815ZM19.0002 10C19.0002 11.8474 18.1867 13.5907 16.8174 15.4031L14.5206 13.1063C15.4232 12.3732 16.0005 11.2547 16.0005 10C16.0005 7.79089 14.2097 6.00003 12.0005 6.00003C10.7459 6.00003 9.62731 6.5773 8.8943 7.47996L6.76609 5.35175C8.0494 3.90767 9.91884 3.00003 12.0002 3.00003C15.8661 3.00003 19.0002 6.13404 19.0002 10ZM14.0005 10C14.0005 10.7013 13.6391 11.3198 13.0913 11.677L10.3236 8.90924C10.6808 8.36144 11.2992 8.00003 12.0005 8.00003C13.1051 8.00003 14.0005 8.89546 14.0005 10Z'
            fill='currentcolor'
          />
          <path
            d='M5.00837 9.6574L5.0564 8.65856L3.0587 8.5625L3.01068 9.56135C3.00368 9.70677 3.00015 9.85303 3.00015 10C3.00015 12.5262 4.14698 14.7403 5.70787 16.767C7.01219 18.4607 8.6816 20.1156 10.3493 21.7688C10.6647 22.0815 10.9802 22.3943 11.293 22.7071L12.0002 23.4142L12.7073 22.7071C13.0201 22.3943 13.339 22.078 13.6577 21.762C14.0822 21.341 14.5062 20.9205 14.9144 20.5095L15.6192 19.8001L14.2002 18.3906L13.4955 19.1001C13.0869 19.5115 12.6773 19.9176 12.2611 20.3302L12.0002 20.589L11.7324 20.3233C10.0629 18.6673 8.50756 17.1245 7.29243 15.5467C5.85332 13.6781 5.00015 11.8921 5.00015 10C5.00015 9.88508 5.00291 9.77085 5.00837 9.6574Z'
            fill='currentcolor'
          />
        </g>
        <defs>
          <clipPath id='clip0_1718_1464'>
            <rect width='24' height='24' fill='white' />
          </clipPath>
        </defs>
      </g>
    </StyledIcon>
  );
}
