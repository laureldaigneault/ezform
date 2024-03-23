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
export type RocketLaunchIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<RocketLaunchIconProps>(({ theme, ...props }) => {
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
export default function RocketLaunchIcon({ className = '', ...props }: RocketLaunchIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M13.5001 8C13.5001 6.61929 14.6194 5.5 16.0001 5.5C17.3808 5.5 18.5001 6.61929 18.5001 8C18.5001 9.38071 17.3808 10.5 16.0001 10.5C14.6194 10.5 13.5001 9.38071 13.5001 8ZM16.0001 7.5C15.7239 7.5 15.5001 7.72386 15.5001 8C15.5001 8.27614 15.7239 8.5 16.0001 8.5C16.2762 8.5 16.5001 8.27614 16.5001 8C16.5001 7.72386 16.2762 7.5 16.0001 7.5Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M10.7378 6C13.2239 2.92171 17.0218 1 21.1981 1H23.0001V2.80196C23.0001 6.97833 21.0784 10.7762 18.0001 13.2623V13.901C18.0001 17.3425 15.5709 20.3056 12.1962 20.9806L11.0001 21.2198V15.4142L8.58587 13H2.78028L3.0195 11.8039C3.69445 8.42917 6.65756 6 10.0991 6H10.7378ZM9.37248 8.05047C7.61868 8.29587 6.1172 9.41736 5.37416 11H8.20586C8.48116 9.95788 8.87557 8.97017 9.37248 8.05047ZM10.0958 11.6815L12.3185 13.9042C17.3321 12.6611 20.9087 8.19339 20.9984 3.00172C15.8067 3.09135 11.339 6.66796 10.0958 11.6815ZM13.0001 15.7942V18.6259C14.5827 17.8829 15.7042 16.3814 15.9496 14.6276C15.0299 15.1245 14.0422 15.5189 13.0001 15.7942Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M2.52256 17.2732C2.97507 15.9157 4.24552 15 5.67651 15C7.51261 15 9.00106 16.4885 9.00106 18.3246C9.00106 19.7555 8.08538 21.026 6.72782 21.4785L0.419922 23.5811L2.52256 17.2732ZM5.67651 17C5.10638 17 4.60021 17.3648 4.41992 17.9057L3.5822 20.4189L6.09537 19.5811C6.63624 19.4009 7.00106 18.8947 7.00106 18.3246C7.00106 17.593 6.40804 17 5.67651 17Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
