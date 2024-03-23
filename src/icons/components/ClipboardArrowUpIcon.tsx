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
export type ClipboardArrowUpIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<ClipboardArrowUpIconProps>(({ theme, ...props }) => {
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
export default function ClipboardArrowUpIcon({ className = '', ...props }: ClipboardArrowUpIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M12.0004 9.58579L15.4146 13L14.0004 14.4142L13.0004 13.4142V18H11.0004V13.4142L10.0004 14.4142L8.58622 13L12.0004 9.58579Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M8.58622 1H15.4146L17.0004 2.58579V3H21.0004V23H3.0088L2.84082 3H7.00044V2.58579L8.58622 1ZM7.00044 5H4.85769L4.99207 21H19.0004V5H17.0004V7H7.00044V5ZM15.0004 3.41421L14.5862 3H9.41465L9.00044 3.41421V5H15.0004V3.41421Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
