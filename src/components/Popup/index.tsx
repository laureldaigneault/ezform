import { Unstable_Popup as BasePopup, PopupProps as BasePopupProps } from '@mui/base';
import { BaseComponentProps } from '../../utils/types';
import { FC, useLayoutEffect, useState } from 'react';
import { styled } from '../../styles/theme';

export type PopupProps = BasePopupProps &
  BaseComponentProps & { anchorRef?: any; anchorId?: string; animated?: boolean; color?: string };

export const Popup: FC<PopupProps> = ({ anchorRef = null, anchorId, animated, color, ...rest }) => {
  const [anchor, setAnchor] = useState<any>();
  useLayoutEffect(() => {
    if (anchorRef?.current) setAnchor(anchorRef.current);
    if (anchorId) setAnchor(document.getElementById(anchorId));
  }, [anchorId]);

  const [side, align] = (rest.placement || '').split('-');
  return (
    <BasePopup
      {...rest}
      anchor={anchor}
      slots={{ root: Root }}
      slotProps={{ root: { ...rest, animated, color } as any }}
      offset={{ mainAxis: 25, crossAxis: -30 }}>
      as dfsadfasfd
      <Arrow
        className={`${side ? `side side-${side} side-${side}-${align || 'center'}` : ''} ${animated ? 'animated' : ''}`}
        color={color}
      />
      {side !== 'right' && (
        <Arrow
          className={`shadow ${side ? `side side-${side} side-${side}-${align || 'center'}` : ''} ${
            animated ? 'animated' : ''
          }`}
          color={color}
        />
      )}
    </BasePopup>
  );
};

const Root = styled('div')<PopupProps>(({ theme, animated, placement = '', color = 'primary' }) => {
  const isY = ['top', 'bottom'].includes(placement);
  const isX = ['left', 'right'].includes(placement);
  return {
    position: 'relative',
    minHeight: '100px',
    width: '300px',
    overflow: 'visible',
    backgroundColor: theme.getColor(color).hex,
    boxShadow: theme.getShadow('projection'),
    padding: theme.getSpacing(2),
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: theme.getColor('celeste').hex,
    lineHeight: '1.5rem',
    zIndex: 1000,
    ...(animated
      ? { animation: `${isY ? 'arrowAnimY' : isX ? 'arrowAnimX' : 'arrowAnimY'} 0.7s ease-in-out infinite` }
      : {}),

    '@keyframes arrowAnimY': {
      '0%': { top: '-2px' },
      '50%': { top: '2px' },
      '100%': { top: '-2px' },
    },
    '@keyframes arrowAnimX': {
      '0%': { left: '-2px' },
      '50%': { left: '2px' },
      '100%': { left: '-2px' },
    },
  };
});

const Arrow = styled('div')((props: any) => {
  const arrowOffsetY = 30;
  const arrowOffsetX = 30;
  const baseArrowStyles = {
    height: '30px',
    border: 'solid 15px transparent',
    borderTop: 'none',
    borderBottom: `solid 20px ${props.theme.getColor(props.color || 'primary').hex}`,
    zIndex: 999,
  };

  return {
    '&.side': {
      ...baseArrowStyles,
      position: 'absolute',
      '&-top': {
        transform: 'rotate(180deg)',
        bottom: -arrowOffsetY,
        '&-start': { left: 40 },
        '&-center': { left: 'calc(50% - 15px)' },
        '&-end': { right: 40 },
      },
      '&-bottom': {
        top: -arrowOffsetY,
        '&-start': { left: 40 },
        '&-center': { left: 'calc(50% - 15px)' },
        '&-end': { right: 40 },
      },
      '&-left': {
        transform: 'rotate(90deg)',
        right: -arrowOffsetX,
        '&-start': { top: 10 },
        '&-center': { top: 'calc(50% - 20px)' },
        '&-end': { bottom: 10 },
      },
      '&-right': {
        transform: 'rotate(-90deg)',
        left: -arrowOffsetX,
        '&-start': { top: 10 },
        '&-center': { top: 'calc(50% - 20px)' },
        '&-end': { bottom: 10 },
      },
    },

    '&.shadow': {
      borderBottom: `solid 20px ${props.theme.getColor('celeste').hex}`,
      zIndex: 998,
      '&.side-top': {
        transform: 'translate(4px, 4px) rotate(180deg)',
      },
      '&.side-left': {
        transform: 'translate(4px, 4px) rotate(90deg)',
      },
      '&.side-right': {
        transform: 'translate(4px, 4px) rotate(-90deg)',
      },
    },
  };
});

export default Popup;
