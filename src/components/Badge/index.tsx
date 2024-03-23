import { Badge as BaseBadge, badgeClasses, BadgeProps as BaseBadgeProps } from '@mui/base';
import { BaseComponentProps } from '../../utils/types';
import { FC } from 'react';
import styled from 'styled-components';

export type BadgeProps = BaseBadgeProps & BaseComponentProps;

const Badge: FC<BadgeProps> = (props) => {
  return <BaseBadge {...props} />;
};

export default styled(Badge)<BadgeProps>(({ theme, ...props }) => {
  return {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    position: 'relative',
    display: 'inline-block',

    [`& .${badgeClasses.badge}`]: {
      zIndex: 'auto',
      position: 'absolute',
      top: 0,
      right: 0,
      minWidth: '28px',
      height: '28px',
      padding: theme.getSpacing(0, 1),
      whiteSpace: 'nowrap',
      textAlign: 'center',
      borderRadius: '16px',
      background: theme.getColor(props.intent, { fallback: 'celeste' }).hex,
      color: 'white',
      transform: 'translate(50%, -50%)',
      transformOrigin: '100% 0',
      fontSize: '1.3rem',
      lineHeight: '26px',
      fontWeight: 800,
      // boxShadow: theme.getShadow('projection'),
      ...theme.getBorderStyle('field'),
    },
  };
});
