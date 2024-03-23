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
export type PhoneSlashIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<PhoneSlashIconProps>(({ theme, ...props }) => {
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
export default function PhoneSlashIcon({ className = '', ...props }: PhoneSlashIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <g clipPath="url(#clip0_1718_1692)"><path fillRule="evenodd" clipRule="evenodd" d="M23.4144 2L2.00015 23.4142L0.585938 22L5.00133 17.5846C2.51201 14.7646 1.00015 11.0581 1.00015 7V0.999998H7.81995L9.08569 7.32867L6.41404 10.0003C6.83842 11.5008 7.57373 12.8718 8.54686 14.0391L22.0002 0.585785L23.4144 2ZM7.12774 15.4582C5.785 13.8923 4.80756 12.002 4.32954 9.9197L4.2057 9.38023L6.91461 6.67132L6.18035 3H3.00015V7C3.00015 10.5065 4.28816 13.7105 6.41866 16.1673L7.12774 15.4582Z" fill="currentcolor"/><path d="M16.6715 14.9145L23.0002 16.1802V23H17.0002C14.1173 23 11.4097 22.2367 9.0717 20.9004L8.20349 20.4042L9.1959 18.6678L10.0641 19.164C12.1079 20.3321 14.4745 21 17.0002 21H21.0002V17.8198L17.3288 17.0855L14.6199 19.7944L14.0804 19.6706C13.127 19.4517 12.2137 19.1281 11.3532 18.7125L10.4527 18.2776L11.3225 16.4767L12.223 16.9116C12.7899 17.1854 13.3839 17.4119 13.9998 17.5861L16.6715 14.9145Z" fill="currentcolor"/></g><defs><clipPath id="clip0_1718_1692"><rect width="24" height="24" fill="white"/></clipPath></defs>
      </g>
    </StyledIcon>
  );
}
