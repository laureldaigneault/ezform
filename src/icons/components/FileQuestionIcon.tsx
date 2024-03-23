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
export type FileQuestionIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<FileQuestionIconProps>(({ theme, ...props }) => {
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
export default function FileQuestionIcon({ className = '', ...props }: FileQuestionIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M11.9673 13C11.5027 13 11.1098 13.3177 10.9987 13.7493L10.7495 14.7177L8.81258 14.2192L9.06184 13.2507C9.39481 11.957 10.568 11 11.9673 11C13.6241 11 14.9673 12.3431 14.9673 14C14.9673 14.9314 14.5128 15.5493 14.0367 16.0087C13.8439 16.1949 13.6243 16.3769 13.4269 16.5405C13.3978 16.5646 13.3691 16.5883 13.3412 16.6116C13.1107 16.8033 12.8902 16.9913 12.6744 17.2071L11.9673 17.9142L10.5531 16.5L11.2602 15.7929C11.5443 15.5087 11.8238 15.2723 12.0622 15.074C12.0937 15.0478 12.1242 15.0225 12.1536 14.998C12.3582 14.8282 12.5134 14.6994 12.6478 14.5697C12.9218 14.3053 12.9673 14.1732 12.9673 14C12.9673 13.4477 12.5195 13 11.9673 13Z" fill="currentcolor"/><path d="M10.9668 18H12.9768V20H10.9668V18Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M3 1H14.4142L21 7.58579V23H3V1ZM5 3V21H19V9H13V3H5ZM15 4.41421L17.5858 7H15V4.41421Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
