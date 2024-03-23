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
export type FolderHeartIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<FolderHeartIconProps>(({ theme, ...props }) => {
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
export default function FolderHeartIcon({ className = '', ...props }: FolderHeartIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M11.997 9.43295C10.9974 8.83944 9.68367 8.7979 8.62297 9.66103C7.32953 10.7135 7.11986 12.5349 8.16768 13.819C8.3699 14.0668 8.66756 14.2962 8.91417 14.4749C9.15778 14.6515 9.44231 14.8415 9.71744 15.0252C9.74455 15.0433 9.77157 15.0613 9.79844 15.0793C10.4457 15.5118 10.9902 15.888 11.2739 16.1876L12.0007 16.9551L12.7267 16.1869C13.0098 15.8874 13.5532 15.5113 14.1993 15.0788C14.2265 15.0606 14.2539 15.0423 14.2813 15.0239C14.5556 14.8405 14.8393 14.6507 15.0822 14.4745C15.3285 14.2958 15.6256 14.0665 15.8275 13.819C16.8659 12.5465 16.6948 10.7078 15.3617 9.65259C14.2966 8.80951 12.9947 8.84021 11.997 9.43295ZM11.2536 11.3801C10.8531 10.9342 10.2851 10.887 9.88531 11.2123C9.42522 11.5867 9.38802 12.1511 9.71726 12.5546C9.71509 12.5519 9.72091 12.5593 9.73928 12.5772C9.75709 12.5945 9.78215 12.6174 9.81595 12.6459C9.88452 12.7039 9.97459 12.7735 10.0877 12.8554C10.2984 13.0081 10.5505 13.1765 10.8345 13.3662C10.8593 13.3828 10.8844 13.3995 10.9097 13.4164L10.9174 13.4216C11.2492 13.6433 11.6388 13.9036 11.9994 14.1786C12.3596 13.9035 12.7486 13.6431 13.0798 13.4215L13.0868 13.4167C13.1125 13.3995 13.138 13.3825 13.1632 13.3657C13.4462 13.1763 13.6975 13.0082 13.9076 12.8557C14.0206 12.7738 14.1105 12.7042 14.1791 12.6462C14.2129 12.6176 14.2379 12.5947 14.2558 12.5774C14.2742 12.5594 14.28 12.552 14.2779 12.5546C14.6166 12.1395 14.571 11.5774 14.1204 11.2208C13.695 10.884 13.1348 10.9423 12.7416 11.3801L11.9976 12.2085L11.2536 11.3801Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M1 3H9.30278L12.3028 5H23V21H1V3ZM3 5V19H21V7H11.6972L8.69722 5H3Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
