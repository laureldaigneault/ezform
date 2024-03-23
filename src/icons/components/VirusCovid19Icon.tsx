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
export type VirusCovid19IconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<VirusCovid19IconProps>(({ theme, ...props }) => {
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
export default function VirusCovid19Icon({ className = '', ...props }: VirusCovid19IconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M8.5 9.5H12.5V13.5H8.5V9.5Z" fill="currentcolor"/><path d="M13 15V13H15.01V15H13Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M9.5 1H14.5V3H13V4.06189C14.4605 4.24402 15.7988 4.81985 16.9052 5.67982L17.9491 4.63599L16.8885 3.57544L18.3027 2.16123L21.8383 5.69676L20.4241 7.11097L19.3633 6.0502L18.3195 7.09394C19.1799 8.20055 19.7559 9.53911 19.9381 11H21V9.5H23V14.5H21V13H19.9381C19.7559 14.4608 19.1799 15.7993 18.3196 16.9059L19.3634 17.9497L20.4241 16.889L21.8383 18.3032L18.3027 21.8388L16.8885 20.4246L17.9492 19.3639L16.9054 18.3201C15.7989 19.1801 14.4606 19.756 13 19.9381V21H14.5V23H9.5V21H11V19.9381C9.53941 19.756 8.2011 19.1801 7.09463 18.3201L6.05093 19.3638L7.11171 20.4245L5.69749 21.8388L2.16196 18.3032L3.57617 16.889L4.63672 17.9496L5.68036 16.9059C4.82008 15.7993 4.24406 14.4608 4.06189 13H3V14.5H1V9.5H3V11H4.06189C4.24406 9.53911 4.82013 8.20055 5.68046 7.09394L4.63684 6.05032L3.57617 7.11099L2.16196 5.69678L5.69749 2.16124L7.11171 3.57546L6.05105 4.63611L7.09477 5.67982C8.20121 4.81985 9.53947 4.24402 11 4.06189V3H9.5V1ZM12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
