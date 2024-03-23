import { Switch as BaseSwitch, SwitchProps as BaseSwitchProps, switchClasses } from '@mui/base';
import { BaseComponentProps } from '../../utils/types';
import { withField } from '../Field';
import styled from 'styled-components';

export type SwitchProps = BaseSwitchProps & BaseComponentProps;

const Root = styled('div')<any>(({ theme, ...props }) => {
  return {
    display: 'inline-block',
    fontSize: 0,
    position: 'relative',
    width: '50px',
    height: '30px',
    cursor: 'pointer',
    ...theme.getBorderStyle('field'),

    [`&.${switchClasses.disabled}`]: {
      ...theme.getActionStyle('disabled'),
    },

    [`&.${switchClasses.focusVisible}`]: {
      ...theme.getActionStyle('focussed'),
    },

    [`& .${switchClasses.track}`]: {
      background: theme.getColor('dust').hex,
      display: 'block',
      height: '100%',
      width: '100%',
      position: 'absolute',
      transitionProperty: 'all',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDuration: '120ms',
    },

    [`&:hover .${switchClasses.track}`]: {
      background: theme.getColor('dust', { darken: 8 }).hex,
    },

    [`&.${switchClasses.focusVisible} .${switchClasses.track}`]: {
      // boxShadow: `0 0 0 3px ${theme.palette.mode === 'dark' ? blue[700] : blue[200]}`,
    },

    [`& .${switchClasses.thumb}`]: {
      border: `1px solid ${theme.palette.border.default}`,
      display: 'block',
      width: '20px',
      height: '20px',
      top: '3px',
      left: '2px',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      position: 'relative',
      transitionProperty: 'all',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDuration: '120ms',
      boxShadow: theme.getShadow('raised'),

      // boxShadow: `0px 1px 2px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.1)'}`,
    },

    [`&.${switchClasses.checked}`]: {
      [`.${switchClasses.thumb} `]: {
        left: '23px',
        border: `1px solid ${theme.palette.border.default}`,
        backgroundColor: 'white',
        boxShadow: theme.getShadow('raised'),
      },

      [`.${switchClasses.track}`]: {
        border: 'none',
        backgroundColor: theme.getColor(props.intent, { fallback: 'celeste' }).hex,
      },
    },

    [`&:hover .${switchClasses.checked} .${switchClasses.track}`]: {
      background: 'blue',
    },

    [`& .${switchClasses.input}`]: {
      cursor: 'inherit',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      opacity: '0',
      zIndex: '1',
      margin: '0',
    },
  };
});

export const Switch = withField<SwitchProps>(
  ({ context, ...props }) => {
    return <BaseSwitch slots={{ root: Root }} slotProps={{ root: { ...props, ...context } as any }} {...props} />;
  },
  {
    map: {
      onChange: 'onChange:0.target.checked',
      value: 'checked',
    },
  }
);

export default Switch;
