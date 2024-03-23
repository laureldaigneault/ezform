export default function iconTemplate({ componentName, height, width, viewBox, svgPaths, globalFill }: any) {
  return `import React from 'react';
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
export type ${componentName}Props = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<${componentName}Props>(({ theme, ...props }) => {
  return {
    userSelect: 'none',
    cursor: props.onClick ? 'pointer' : 'default',
    position: 'relative',
    height: '1em',
    minHeight: '1em',
    transition: 'zoom .3s ease-in-out',
    width: '${width >= 0 && height >= 0 ? width / height + 'em' : 'auto'}',
    minWidth: '${width >= 0 && height >= 0 ? width / height + 'em' : 'auto'}',
    fontSize: props.size && typeof props.size === 'string' ? props.size : props.size + 'px',
    color:
      props.color && typeof props.color === 'string'
        ? (theme.palette as any)[props.color]
          ? (theme.palette as any)[props.color]?.main?.color
          : props.color
        : 'inherit',
    animation: props.spin ? \`$fidgetSpin \${typeof props.spin === 'boolean' ? '1s' : props.spin} linear infinite\` : '',
    transform: props.rotate ? \`rotate(\${props.rotate})\` : '',
    '@keyframes fidgetSpin': {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' },
    },
  }
})
export default function ${componentName}({ className = '', ...props }: ${componentName}Props): React.ReactElement {

  return (
    <StyledIcon
      ${viewBox ? `viewBox='${viewBox}'` : ''}
      {...props}
      className={\`\${className}\`}
      preserveAspectRatio={'xMidYMid meet'}
      ${globalFill ? globalFill : ''}>
      <g>
        ${svgPaths}
      </g>
    </StyledIcon>
  );
}
`;
}
