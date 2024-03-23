import { Input as BaseInput, InputProps as BaseInputProps, inputClasses } from '@mui/base';
import { BaseComponentProps } from '../../utils/types';
import { withField } from '../Field';
import styled from 'styled-components';

export type InputProps = BaseInputProps & BaseComponentProps;

const Root = styled('div')<any>(({ theme, ...props }) => {
  return {
    display: 'inline-block',

    [`& .${inputClasses.input}`]: {
      backgroundColor: theme.getColor(props.intent, { lighten: 50 }).hex,
      borderColor: theme.getColor(props.intent).hex,
      padding: theme.getSpacing(1.5),
      borderRadius: theme.getShape('borderRadius'),
      boxShadow: theme.getShadow(),
      transition: `background-color ${theme.transition.duration.default}ms`,
      width: '100%',
      outline: 'none',
      ...theme.getTypographyStyle('field'),
      ...theme.getBorderStyle('field'),
      color: theme.palette.text.primary,
    },

    [`&.${inputClasses.error} .${inputClasses.input}`]: {
      backgroundColor: theme.getColor('bad', { lighten: 50 }).hex,
      borderColor: theme.getColor('bad').hex,
      color: theme.getColor('bad').hex,
    },

    [`&.${inputClasses.focused} .${inputClasses.input}`]: {
      ...theme.getActionStyle('focussed'),
    },

    [`&.${inputClasses.disabled} .${inputClasses.input}`]: {
      ...theme.getActionStyle('disabled'),
    },
  };
});

export default withField<InputProps>(
  ({ context, ...props }) => {
    return <BaseInput slots={{ root: Root }} slotProps={{ root: { ...props, ...context } as any }} {...props} />;
  },
  {
    map: {
      onChange: 'onChange.target.value',
    },
  }
);
