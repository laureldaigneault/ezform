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
export type BadgeIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<BadgeIconProps>(({ theme, ...props }) => {
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
export default function BadgeIcon({ className = '', ...props }: BadgeIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M17.4142 9.30005L10.5 16.2143L6.58579 12.3L8 10.8858L10.5 13.3858L16 7.88584L17.4142 9.30005Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M8.17892 2.77516C9.09505 1.69082 10.4666 1 12 1C13.5334 1 14.905 1.69083 15.8211 2.77518C17.2357 2.6562 18.694 3.13755 19.7783 4.22185C20.8626 5.30615 21.344 6.76449 21.225 8.17906C22.3092 9.09519 23 10.4667 23 12C23 13.5333 22.3092 14.9048 21.225 15.8209C21.344 17.2355 20.8626 18.6939 19.7783 19.7781C18.694 20.8625 17.2357 21.3438 15.8211 21.2248C14.905 22.3092 13.5334 23 12 23C10.4666 23 9.09505 22.3092 8.17892 21.2248C6.76442 21.3437 5.30615 20.8624 4.22191 19.7781C3.13766 18.6939 2.65631 17.2356 2.77521 15.8211C1.69084 14.905 1 13.5334 1 12C1 10.4666 1.69084 9.095 2.77521 8.17888C2.6563 6.76437 3.13766 5.3061 4.22191 4.22185C5.30615 3.1376 6.76442 2.65625 8.17892 2.77516ZM12 3C10.9371 3 10.0024 3.55205 9.46815 4.3898L9.09204 4.97954L8.40907 4.8285C7.43892 4.61393 6.3877 4.88448 5.63612 5.63607C4.88454 6.38765 4.61399 7.43888 4.82855 8.40903L4.97961 9.09201L4.38984 9.46812C3.55206 10.0024 3 10.9371 3 12C3 13.0629 3.55206 13.9976 4.38984 14.5319L4.97961 14.908L4.82855 15.591C4.61399 16.5611 4.88454 17.6124 5.63612 18.3639C6.3877 19.1155 7.43892 19.3861 8.40907 19.1715L9.09204 19.0205L9.46815 19.6102C10.0024 20.448 10.9371 21 12 21C13.0629 21 13.9976 20.4479 14.5319 19.6102L14.908 19.0204L15.591 19.1715C16.5612 19.3861 17.6125 19.1156 18.3641 18.3639C19.1157 17.6123 19.3863 16.5611 19.1717 15.5909L19.0206 14.9079L19.6103 14.5318C20.448 13.9975 21 13.0629 21 12C21 10.9371 20.448 10.0025 19.6103 9.46822L19.0206 9.09209L19.1717 8.40913C19.3863 7.43895 19.1157 6.38767 18.3641 5.63607C17.6125 4.88444 16.5612 4.61391 15.591 4.82853L14.908 4.97962L14.5319 4.38983C13.9976 3.55206 13.0629 3 12 3Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
