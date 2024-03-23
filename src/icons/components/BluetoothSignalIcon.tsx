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
export type BluetoothSignalIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<BluetoothSignalIconProps>(({ theme, ...props }) => {
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
export default function BluetoothSignalIcon({ className = '', ...props }: BluetoothSignalIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M7.00015 2.00001L8.70726 1.29291L14.4144 7.00001L9.41436 12L14.4144 17L8.70726 22.7071L7.00015 22V14.4142L3.00015 18.4142L1.58594 17L6.58594 12L1.58594 7.00001L3.00015 5.5858L7.00015 9.5858V2.00001ZM9.00015 14.4142L11.5859 17L9.00015 19.5858V14.4142ZM9.00015 9.5858V4.41423L11.5859 7.00001L9.00015 9.5858Z" fill="currentcolor"/><path d="M19.8858 4.26618L20.5189 5.04024C22.0694 6.93591 23.0003 9.36064 23.0003 12.0001C23.0003 14.6418 22.0678 17.0683 20.5151 18.9647L19.8815 19.7384L18.3341 18.4713L18.9676 17.6976C20.2385 16.1455 21.0003 14.1631 21.0003 12.0001C21.0003 9.83888 20.2398 7.85796 18.9708 6.30646L18.3377 5.5324L19.8858 4.26618Z" fill="currentcolor"/><path d="M17.1244 7.12804L17.7046 7.94252C18.5201 9.08729 18.9999 10.4891 18.9999 12.0001C18.9999 13.5116 18.5197 14.9139 17.7037 16.0589L17.1233 16.8732L15.4946 15.7125L16.075 14.8981C16.6575 14.0808 16.9999 13.0819 16.9999 12.0001C16.9999 10.9186 16.6577 9.92008 16.0756 9.10292L15.4954 8.28845L17.1244 7.12804Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
