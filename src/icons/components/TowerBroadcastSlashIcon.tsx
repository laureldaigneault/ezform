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
export type TowerBroadcastSlashIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<TowerBroadcastSlashIconProps>(({ theme, ...props }) => {
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
export default function TowerBroadcastSlashIcon({ className = '', ...props }: TowerBroadcastSlashIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <g clipPath="url(#clip0_1718_1639)"><path fillRule="evenodd" clipRule="evenodd" d="M2.00015 0.585815L3.93487 2.52053C4.02836 2.41985 4.12406 2.32052 4.22198 2.22261L4.92908 1.5155L6.3433 2.92972L5.63619 3.63682C5.53811 3.7349 5.4428 3.83464 5.35026 3.93593L6.76638 5.35205C6.85764 5.24946 6.95239 5.14897 7.05063 5.05073L7.75773 4.34363L9.17195 5.75784L8.46484 6.46495C8.36615 6.56364 8.27254 6.6653 8.18397 6.76964L9.60626 8.19193C10.1539 7.46787 11.0225 7.00003 12.0004 7.00003C13.6572 7.00003 15.0004 8.34317 15.0004 10C15.0004 10.9779 14.5325 11.8465 13.8085 12.3941L15.2429 13.8286L15.5355 13.536C17.4881 11.5834 17.4881 8.41757 15.5355 6.46495L14.8283 5.75784L16.2426 4.34363L16.9497 5.05073C19.6833 7.78441 19.6833 12.2166 16.9497 14.9502L16.6571 15.2428L18.0718 16.6575L18.3646 16.3647C21.8793 12.85 21.8793 7.15154 18.3646 3.63682L17.6574 2.92972L19.0717 1.5155L19.7788 2.22261C24.0745 6.51838 24.0745 13.4832 19.7788 17.779L19.486 18.0717L23.4144 22L22.0002 23.4142L0.585938 2.00003L2.00015 0.585815ZM12.3511 10.9368C12.7304 10.7947 13.0004 10.4289 13.0004 10C13.0004 9.44774 12.5527 9.00003 12.0004 9.00003C11.5715 9.00003 11.2057 9.27001 11.0636 9.64928L12.3511 10.9368Z" fill="currentcolor"/><path d="M3.42815 7.07466L3.21258 8.05115C2.57158 10.9547 3.38081 14.1094 5.63619 16.3647L6.3433 17.0719L4.92908 18.4861L4.22198 17.779C1.46373 15.0207 0.477626 11.1622 1.2596 7.62L1.47517 6.64352L3.42815 7.07466Z" fill="currentcolor"/><path d="M6.94184 10.6448L7.2594 11.5931C7.49685 12.3021 7.89783 12.969 8.46484 13.536L9.17195 14.2431L7.75773 15.6573L7.05063 14.9502C6.25987 14.1595 5.69646 13.2242 5.36292 12.2282L5.04536 11.28L6.94184 10.6448Z" fill="currentcolor"/><path d="M13.0004 16.5999V22H11.0004V16.5999H13.0004Z" fill="currentcolor"/></g><defs><clipPath id="clip0_1718_1639"><rect width="24" height="24" fill="white"/></clipPath></defs>
      </g>
    </StyledIcon>
  );
}
