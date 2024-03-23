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
export type BellIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<BellIconProps>(({ theme, ...props }) => {
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
export default function BellIcon({ className = '', ...props }: BellIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M22.267 17.3607L21.5002 19H16.0002C16.0002 21.2091 14.2094 23 12.0002 23C9.79107 23 8.00021 21.2091 8.00021 19H2.50029L1.73345 17.3607C1.73217 17.3597 1.73214 17.3597 1.7321 17.3598L1.73068 17.3615L1.72998 17.3623L1.74097 17.3485C1.75266 17.3335 1.77288 17.3072 1.80042 17.2695C1.85552 17.1941 1.93989 17.0732 2.044 16.9069C2.25224 16.5742 2.53923 16.0603 2.82919 15.3651C3.40808 13.9771 4.00254 11.8579 4.00021 9.00125C4.00021 9.00111 4.00021 9.00139 4.00021 9.00125L4.00016 8.97328C4.0146 4.56725 7.59077 1 12.0001 1C16.4089 1 19.9848 4.56636 20.0001 8.97163L20.0001 8.97333M6.00017 8.97739L6.00021 8.99826C6.00284 12.1414 5.34736 14.523 4.67508 16.1349C4.54214 16.4537 4.40868 16.742 4.27974 17H19.7207C19.5918 16.742 19.4583 16.4537 19.3254 16.1349C18.6533 14.5235 17.998 12.1438 18.0002 9.00203L18.0001 8.98157L18.0001 8.97987C17.9893 5.67546 15.3071 3 12.0001 3C8.69396 3 6.01232 5.67412 6.00017 8.97739ZM20.0001 8.97333L20.0002 9.00084C19.9978 11.8577 20.5923 13.977 21.1713 15.3651C21.4612 16.0603 21.7482 16.5742 21.9565 16.9069C22.0606 17.0732 22.145 17.1941 22.2001 17.2695C22.2276 17.3072 22.2478 17.3335 22.2595 17.3485L22.2698 17.3615L22.2689 17.3604C22.2689 17.3604 22.2683 17.3597 22.267 17.3607M10.0002 19C10.0002 20.1046 10.8956 21 12.0002 21C13.1048 21 14.0002 20.1046 14.0002 19H10.0002Z" fill="currentcolor"/><path d="M22.2709 17.3628C22.2714 17.3634 22.2716 17.3637 22.2709 17.3628V17.3628Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
