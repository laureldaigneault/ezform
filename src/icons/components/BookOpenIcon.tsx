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
export type BookOpenIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<BookOpenIconProps>(({ theme, ...props }) => {
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
export default function BookOpenIcon({ className = '', ...props }: BookOpenIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12 4.51569C10.5698 3.55859 8.8491 3 7 3C4.87259 3 2.91514 3.73938 1.37453 4.97438L1 5.27462V22.0879L2.62547 20.7849C3.82406 19.8241 5.34362 19.25 7 19.25C8.65638 19.25 10.1759 19.8241 11.3745 20.7849L12 21.2863L12.6255 20.7849C13.8241 19.8241 15.3436 19.25 17 19.25C18.6564 19.25 20.1759 19.8241 21.3745 20.7849L23 22.0879V5.27462L22.6255 4.97438C21.0849 3.73938 19.1274 3 17 3C15.1509 3 13.4302 3.55859 12 4.51569ZM3 6.25457V18.1858C4.20526 17.5869 5.56391 17.25 7 17.25C8.43609 17.25 9.79474 17.5869 11 18.1858V6.25457C9.8662 5.46348 8.48833 5 7 5C5.51167 5 4.1338 5.46348 3 6.25457ZM13 6.25457V18.1858C14.2053 17.5869 15.5639 17.25 17 17.25C18.4361 17.25 19.7947 17.5869 21 18.1858V6.25457C19.8662 5.46348 18.4883 5 17 5C15.5117 5 14.1338 5.46348 13 6.25457Z'
          fill='currentcolor'
        />
      </g>
    </StyledIcon>
  );
}
