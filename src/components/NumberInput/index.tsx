import {
  Unstable_NumberInput as BaseNumberInput,
  NumberInputProps as BaseNumberInputProps,
  numberInputClasses,
} from '@mui/base/Unstable_NumberInput';
import { BaseComponentProps } from '../../utils/types';
import { withField } from '../Field';
import { styled } from '../../styles/theme';

export type NumberInputProps = BaseNumberInputProps & BaseComponentProps;

const Root = styled('div')<NumberInputProps>(({ theme, intent }) => {
  return {
    display: 'inline-block',
    position: 'relative',

    [`& .${numberInputClasses.incrementButton}, .${numberInputClasses.decrementButton}`]: {
      position: 'absolute',
      right: '1px',
      width: '24px',
      height: '50%',
      lineHeight: '22px',
      textAlign: 'center',
      userSelect: 'none',
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: theme.getColor(intent).hex,
      },
    },
    [`& .${numberInputClasses.incrementButton}`]: {
      top: '1px',
    },

    [`& .${numberInputClasses.decrementButton}`]: {
      bottom: '1px',
    },

    [`& .${numberInputClasses.input}`]: {
      backgroundColor: theme.getColor(intent, { lighten: 50 }).hex,
      padding: theme.getSpacing(1.5),
      transition: `background-color ${theme.transition.duration.default}ms`,
      width: '100%',
      outline: 'none',
      boxShadow: theme.getShadow(),
      borderRadius: theme.getShape('borderRadius'),
      ...theme.getTypographyStyle('field'),
      ...theme.getBorderStyle('field'),
      borderColor: theme.getColor(intent, { darken: 50 }).hex,
    },

    [`&.${numberInputClasses.error} .${numberInputClasses.input}`]: {
      backgroundColor: theme.getColor('bad', { lighten: 50 }).hex,
      borderColor: theme.getColor('bad').hex,
      color: theme.getColor('bad').hex,
    },

    [`&.${numberInputClasses.focused} .${numberInputClasses.input}`]: {
      ...theme.getActionStyle('focussed'),
    },

    [`&.${numberInputClasses.disabled} .${numberInputClasses.input}`]: {
      ...theme.getActionStyle('disabled'),
    },
  };
});

export const NumberInput = withField<NumberInputProps>(
  ({ context, ...props }) => {
    return (
      <BaseNumberInput
        slots={{
          root: Root,
          incrementButton: (_p) => <div {..._p}>+</div>,
          decrementButton: (_p) => <div {..._p}>-</div>,
        }}
        slotProps={{
          root: { ...props, ...context } as any,
        }}
        {...props}
      />
    );
  },
  {
    map: {
      onChange: 'onChange:1',
    },
  }
);

export default NumberInput;
