import { Unstable_Popup as BasePopup, PopupProps as BasePopupProps } from '@mui/base';
import { BaseComponentProps } from '../../utils/types';
import { FC, useMemo } from 'react';
import { styled } from '../../styles/theme';

export type PopupProps = BasePopupProps &
  BaseComponentProps & { anchorRef?: any; anchorId?: string; animated?: boolean };

const Popup: FC<PopupProps> = ({ anchorRef = null, anchorId, animated, ...rest }) => {
  const memoizedAnchor = useMemo(() => {
    if (anchorRef) return anchorRef?.current;
    if (anchorId) return document.getElementById(anchorId);
  }, [anchorRef, anchorId]);

  const [side, align] = (rest.placement || '').split('-');
  return (
    <BasePopup
      {...rest}
      anchor={memoizedAnchor}
      slots={{ root: Root }}
      slotProps={{ root: { ...rest, animated } as any }}>
      as dfsadfasfd
      <Arrow className={`${side ? `side-${side}-${align || 'center'}` : ''} ${animated ? 'animated' : ''}`} />
    </BasePopup>
  );
};

const Root = styled('div')<PopupProps>(({ theme, animated, placement = '' }) => {
  const isY = ['top', 'bottom'].includes(placement);
  const isX = ['left', 'right'].includes(placement);
  return {
    position: 'relative',
    minHeight: '100px',
    width: '300px',
    overflow: 'visible',
    backgroundColor: theme.getColor('secondary').hex,
    boxShadow: theme.getShadow('projection'),
    padding: theme.getSpacing(2),
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: theme.getColor('celeste').hex,
    lineHeight: '1.5rem',
    ...(animated ? { animation: `${isY ? 'arrowAnimY' : isX ? 'arrowAnimX' : 'arrowAnimY'} 0.5s infinite` } : {}),

    '@keyframes arrowAnimY': {
      '0%': { top: '-3px' },
      '50%': { top: '3px' },
      '100%': { top: '-3px' },
    },
    '@keyframes arrowAnimX': {
      '0%': { left: '-3px' },
      '50%': { left: '3px' },
      '100%': { left: '-3px' },
    },
  };
});

const Arrow = styled('div')((props: any) => {
  const arrowOffset = 26;
  const baseArrowStyles = {
    position: 'absolute' as any,
    width: '10px',
    height: '30px',
    border: 'solid 15px transparent',
    borderTop: 'none',
    borderBottom: `solid 20px ${props.theme.getColor('secondary').hex}`,
    zIndex: 999,
  };

  return {
    '&.side': {
      '&-top': {
        ...baseArrowStyles,
        transform: 'rotate(180deg)',
        bottom: -arrowOffset,
        '&-start': { left: 40 },
        '&-center': { left: 'calc(50% - 15px)' },
        '&-end': { right: 40 },
      },
      '&-bottom': {
        ...baseArrowStyles,
        top: -arrowOffset,
        '&-start': { left: 40 },
        '&-center': { left: 'calc(50% - 15px)' },
        '&-end': { right: 40 },
      },
      '&-left': {
        ...baseArrowStyles,
        transform: 'rotate(90deg)',
        right: -arrowOffset,
        '&-start': { top: 20 },
        '&-center': { top: 'calc(50% - 15px)' },
        '&-end': { bottom: 20 },
      },
      '&-right': {
        ...baseArrowStyles,
        transform: 'rotate(-90deg)',
        left: -arrowOffset,
        '&-start': { top: 20 },
        '&-center': { top: 'calc(50% - 15px)' },
        '&-end': { bottom: 20 },
      },
    },
  };
});

export default Popup;
