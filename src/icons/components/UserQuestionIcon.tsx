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
export type UserQuestionIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<UserQuestionIconProps>(({ theme, ...props }) => {
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
export default function UserQuestionIcon({ className = '', ...props }: UserQuestionIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6C17 8.76142 14.7614 11 12 11C9.23858 11 7 8.76142 7 6ZM12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9C13.6569 9 15 7.65685 15 6C15 4.34315 13.6569 3 12 3Z" fill="currentcolor"/><path d="M4.06189 21C4.55399 17.0537 7.92038 14 12 14C12.9596 14 13.8776 14.1685 14.7274 14.4767L15.6675 14.8176L16.3493 12.9374L15.4092 12.5965C14.344 12.2102 13.1954 12 12 12C6.47715 12 2 16.4772 2 22V23H17V21H4.06189Z" fill="currentcolor"/><path d="M19.9673 16C19.5027 16 19.1098 16.3177 18.9987 16.7493L18.7495 17.7177L16.8126 17.2192L17.0618 16.2507C17.3948 14.957 18.568 14 19.9673 14C21.6241 14 22.9673 15.3431 22.9673 17C22.9673 17.9314 22.5128 18.5493 22.0367 19.0087C21.8439 19.1949 21.6243 19.3769 21.4269 19.5405C21.3978 19.5646 21.3691 19.5883 21.3412 19.6116C21.1107 19.8033 20.8902 19.9913 20.6744 20.2071L19.9673 20.9142L18.5531 19.5L19.2602 18.7929C19.5443 18.5087 19.8238 18.2723 20.0622 18.074C20.0937 18.0478 20.1242 18.0225 20.1537 17.998C20.3582 17.8282 20.5134 17.6994 20.6478 17.5697C20.9218 17.3053 20.9673 17.1732 20.9673 17C20.9673 16.4477 20.5195 16 19.9673 16Z" fill="currentcolor"/><path d="M18.9668 21H20.9768V23H18.9668V21Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
