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
export type TeamMemberIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<TeamMemberIconProps>(({ theme, ...props }) => {
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
export default function TeamMemberIcon({ className = '', ...props }: TeamMemberIconProps): React.ReactElement {
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
          d='M2.99978 5C2.99978 3.34315 4.34292 2 5.99978 2C7.65663 2 8.99978 3.34315 8.99978 5C8.99978 6.65685 7.65663 8 5.99978 8C4.34292 8 2.99978 6.65685 2.99978 5ZM5.99978 4C5.44749 4 4.99978 4.44772 4.99978 5C4.99978 5.55228 5.44749 6 5.99978 6C6.55206 6 6.99978 5.55228 6.99978 5C6.99978 4.44772 6.55206 4 5.99978 4Z'
          fill='currentcolor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M14.9998 5C14.9998 3.34315 16.3429 2 17.9998 2C19.6566 2 20.9998 3.34315 20.9998 5C20.9998 6.65685 19.6566 8 17.9998 8C16.3429 8 14.9998 6.65685 14.9998 5ZM17.9998 4C17.4475 4 16.9998 4.44772 16.9998 5C16.9998 5.55228 17.4475 6 17.9998 6C18.5521 6 18.9998 5.55228 18.9998 5C18.9998 4.44772 18.5521 4 17.9998 4Z'
          fill='currentcolor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7.99972 12C7.99972 9.79086 9.79058 8 11.9997 8C14.2089 8 15.9997 9.79086 15.9997 12C15.9997 14.2091 14.2089 16 11.9997 16C9.79058 16 7.99972 14.2091 7.99972 12ZM11.9997 10C10.8952 10 9.99972 10.8954 9.99972 12C9.99972 13.1046 10.8952 14 11.9997 14C13.1043 14 13.9997 13.1046 13.9997 12C13.9997 10.8954 13.1043 10 11.9997 10Z'
          fill='currentcolor'
        />
        <path
          d='M1.20028 11.3988C2.29326 9.94409 4.03641 9 5.99978 9H6.99978V11H5.99978C4.69194 11 3.53075 11.6266 2.79927 12.6002L2.1986 13.3997L0.599609 12.1983L1.20028 11.3988Z'
          fill='currentcolor'
        />
        <path
          d='M16.9998 9H17.9998C19.9634 9 21.7068 9.94434 22.7997 11.3994L23.4003 12.199L21.8012 13.4001L21.2006 12.6006C20.4691 11.6268 19.3078 11 17.9998 11H16.9998V9Z'
          fill='currentcolor'
        />
        <path
          d='M5.43344 20.4279C6.87739 18.3578 9.27952 17 11.9989 17C14.7184 17 17.1205 18.3578 18.5644 20.4279L19.1365 21.2481L17.4962 22.3923L16.9241 21.5721C15.8381 20.0152 14.037 19 11.9989 19C9.96086 19 8.15976 20.0152 7.07381 21.5721L6.50171 22.3923L4.86134 21.2481L5.43344 20.4279Z'
          fill='currentcolor'
        />
      </g>
    </StyledIcon>
  );
}
