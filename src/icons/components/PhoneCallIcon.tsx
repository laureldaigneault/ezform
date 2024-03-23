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
export type PhoneCallIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<PhoneCallIconProps>(({ theme, ...props }) => {
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
export default function PhoneCallIcon({ className = '', ...props }: PhoneCallIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M1 0.999878H7.8198L9.08554 7.32855L6.41389 10.0002C7.44973 13.6626 10.3373 16.5501 13.9997 17.586L16.6713 14.9143L23 16.1801V22.9999H17C8.16344 22.9999 1 15.8364 1 6.99988V0.999878ZM3 2.99988V6.99988C3 14.7319 9.26801 20.9999 17 20.9999H21V17.8197L17.3287 17.0854L14.6198 19.7943L14.0803 19.6705C9.24414 18.5603 5.4396 14.7557 4.32939 9.91958L4.20555 9.38011L6.91446 6.6712L6.1802 2.99988H3Z" fill="currentcolor"/><path d="M12 0.999878H13C18.5228 0.999878 23 5.47703 23 10.9999V11.9999H21V10.9999C21 6.5816 17.4183 2.99988 13 2.99988H12V0.999878Z" fill="currentcolor"/><path d="M12 4.99988H13C16.3137 4.99988 19 7.68617 19 10.9999V11.9999H17V10.9999C17 8.79074 15.2091 6.99988 13 6.99988H12V4.99988Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
