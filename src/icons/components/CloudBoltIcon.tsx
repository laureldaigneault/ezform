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
export type CloudBoltIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<CloudBoltIconProps>(({ theme, ...props }) => {
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
export default function CloudBoltIcon({ className = '', ...props }: CloudBoltIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M12 4C9.51785 4 7.45643 5.80967 7.0665 8.18158L6.94118 8.94386L6.17196 9.0151C4.39329 9.17984 3 10.6778 3 12.5C3 14.0224 3.97251 15.3201 5.33325 15.8011L6.27609 16.1343L5.60959 18.02L4.66675 17.6868C2.53192 16.9322 1 14.8963 1 12.5C1 9.8925 2.8139 7.70961 5.24923 7.14303C6.0632 4.17816 8.7764 2 12 2C15.866 2 19 5.13401 19 9C19 9.00916 19 9.01831 18.9999 9.02746C21.2499 9.27616 23 11.1837 23 13.5C23 15.7679 21.3233 17.6424 19.1416 17.9545L18.1517 18.0961L17.8685 16.1162L18.8584 15.9746C20.069 15.8015 21 14.7586 21 13.5C21 12.1193 19.8807 11 18.5 11C18.3549 11 18.2134 11.0123 18.0763 11.0356L16.677 11.2738L16.9237 9.876C16.9738 9.59225 17 9.2996 17 9C17 6.23858 14.7614 4 12 4Z" fill="currentcolor"/><path d="M13.372 10.657L10.7662 15H16.7662L12.343 22.372L10.628 21.343L13.2338 17H7.23381L11.657 9.62801L13.372 10.657Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
