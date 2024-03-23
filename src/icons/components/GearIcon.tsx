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
export type GearIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<GearIconProps>(({ theme, ...props }) => {
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
export default function GearIcon({ className = '', ...props }: GearIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M9.27936 1H14.7209L15.5395 3.45577L17.8553 2.29806L21.703 6.14575L20.5454 8.46106L23.0002 9.27952V14.721L20.5444 15.5395L21.7018 17.8544L17.854 21.7021L15.5392 20.5446L14.7208 23H9.27926L8.46083 20.5447L6.14633 21.7018L2.29863 17.8541L3.45598 15.5394L1 14.721V9.27935L3.45604 8.46074L2.29851 6.14568L6.14629 2.2979L8.46088 3.45543L9.27936 1ZM10.7209 3L9.62896 6.27574L6.54111 4.73151L4.73203 6.54058L6.2762 9.62893L3 10.7209V13.2793L6.27621 14.371L4.73215 17.4592L6.5413 19.2683L9.62901 17.7247L10.7208 21H13.2793L14.3711 17.7244L17.4592 19.2686L19.2683 17.4595L17.7241 14.3712L21.0002 13.2794V10.7209L17.7253 9.62906L19.2695 6.54066L17.4604 4.7315L14.3713 6.27573L13.2794 3H10.7209Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
