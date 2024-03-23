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
export type CarrotIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<CarrotIconProps>(({ theme, ...props }) => {
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
export default function CarrotIcon({ className = '', ...props }: CarrotIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M16.9336 0.519592L18.1402 1.72618C18.7697 2.35563 19.2733 3.09937 19.6241 3.91752L19.7617 4.23844L20.082 4.37573C20.9003 4.72652 21.6443 5.23022 22.2739 5.85982L23.4815 7.06743L21.7863 8.47926C20.8989 9.21834 19.8021 9.55667 18.724 9.50464C19.2895 11.9147 18.2426 14.5814 15.8343 15.8489L2.4659 22.8849L1.11523 21.5343L8.15124 8.16585C9.41849 5.75808 12.0843 4.7111 14.494 5.27581C14.4416 4.19505 14.7814 3.09554 15.5238 2.20699L16.9336 0.519592ZM17.2263 6.81204C17.22 6.80565 17.2136 6.79927 17.2073 6.79291C17.2005 6.78618 17.1938 6.77947 17.187 6.77278C16.3114 5.87767 16.2517 4.46448 17.051 3.49847C17.3514 3.86341 17.599 4.26974 17.7859 4.70564L18.2386 5.76159L19.294 6.21397C19.7294 6.40061 20.1354 6.64786 20.5 6.94774C19.534 7.74688 18.1213 7.68702 17.2263 6.81204ZM15.7712 8.18546C14.115 6.55552 11.4158 6.86128 10.1428 8.72843L11.9144 10.5L10.5002 11.9142L9.14942 10.5635L4.38581 19.6144L9.50564 16.9197L8.08594 15.5L9.50015 14.0858L11.3587 15.9444L14.9028 14.0791C17.0933 12.9262 17.5468 9.98808 15.814 8.22824C15.8067 8.22102 15.7994 8.21378 15.7921 8.2065C15.7851 8.19951 15.7782 8.1925 15.7712 8.18546Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
