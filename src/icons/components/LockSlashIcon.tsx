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
export type LockSlashIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<LockSlashIconProps>(({ theme, ...props }) => {
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
export default function LockSlashIcon({ className = '', ...props }: LockSlashIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <g clipPath="url(#clip0_1718_1399)"><path fillRule="evenodd" clipRule="evenodd" d="M2.00015 0.585815L6.36079 4.94645C7.1994 2.6441 9.40778 1.00003 12.0002 1.00003C15.3139 1.00003 18.0002 3.68632 18.0002 7.00003V9.00006C18.4592 9.00033 18.8594 9.00316 19.1952 9.0306C19.5905 9.0629 19.9837 9.13421 20.3621 9.32701C20.9266 9.61463 21.3855 10.0736 21.6732 10.6381C21.866 11.0164 21.9373 11.4097 21.9696 11.805C22.0002 12.1796 22.0002 12.6343 22.0002 13.1615V18.8319C22.0002 19.3284 22.0002 19.7586 21.9755 20.1158C21.9663 20.2501 21.953 20.3845 21.9327 20.5183L23.4144 22L22.0002 23.4142L0.585938 2.00003L2.00015 0.585815ZM20.0002 18.5858V13.2C20.0002 12.6235 19.9994 12.2512 19.9762 11.9679C19.954 11.6962 19.9163 11.5955 19.8912 11.546C19.7953 11.3579 19.6423 11.2049 19.4541 11.109C19.4047 11.0838 19.304 11.0462 19.0323 11.024C18.749 11.0008 18.3767 11 17.8002 11H12.4144L20.0002 18.5858ZM10.4144 9.00003H16.0002V7.00003C16.0002 4.79089 14.2093 3.00003 12.0002 3.00003C9.92429 3.00003 8.21776 4.58132 8.0194 6.60507L10.4144 9.00003Z" fill="currentcolor"/><path d="M5.67148 10.8503L4.69388 11.0608C4.6175 11.0773 4.57425 11.0947 4.54616 11.109C4.358 11.2049 4.20502 11.3579 4.10914 11.546C4.08395 11.5955 4.04627 11.6962 4.02408 11.9679C4.00093 12.2512 4.00015 12.6235 4.00015 13.2V18.8C4.00015 19.3766 4.00093 19.7489 4.02408 20.0322C4.04627 20.3039 4.08395 20.4046 4.10914 20.454C4.20502 20.6422 4.358 20.7952 4.54616 20.891C4.5956 20.9162 4.69632 20.9539 4.96799 20.9761C5.25132 20.9993 5.6236 21 6.20015 21H17.4002V23H6.16158C5.63445 23 5.17969 23.0001 4.80512 22.9695C4.40978 22.9372 4.01656 22.8658 3.63818 22.673C3.07369 22.3854 2.61475 21.9265 2.32713 21.362C2.13434 20.9836 2.06302 20.5904 2.03072 20.1951C2.00012 19.8205 2.00013 19.3657 2.00015 18.8386V13.1615C2.00013 12.6343 2.00012 12.1796 2.03072 11.805C2.06302 11.4097 2.13434 11.0164 2.32713 10.6381C2.61475 10.0736 3.07369 9.61463 3.63818 9.32701C3.84505 9.2216 4.05671 9.15219 4.27288 9.10564L5.25048 8.89514L5.67148 10.8503Z" fill="currentcolor"/></g><defs><clipPath id="clip0_1718_1399"><rect width="24" height="24" fill="white"/></clipPath></defs>
      </g>
    </StyledIcon>
  );
}
