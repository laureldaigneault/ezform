import { Select as BaseSelect, SelectProps as BaseSelectProps, selectClasses } from '@mui/base/Select';
import { Option as BaseOption } from '@mui/base/Option';
import { optionClasses } from '@mui/base/Option';
import { BaseComponentProps } from '../../utils/types';
import { withField } from '../Field';
import { styled } from '../../styles/theme';

export type SelectProps = BaseComponentProps;

const RootContainer = styled('div')<SelectProps>(({ theme }) => {
  return {
    display: 'inline-block',
    position: 'relative',
    span: {
      position: 'absolute',
      right: theme.getSpacing(1),
      top: 'calc(50% - 9px)',
      fontSize: '0.8rem',
    },
  };
});

const SelectButton = styled('button')<SelectProps>(({ theme, ...props }) => {
  return {
    display: 'inline-block',
    position: 'relative',
    textAlign: 'left',
    backgroundColor: theme.getColor(props.intent, { lighten: 20 }).hex,
    borderColor: theme.getColor(props.intent).hex,
    padding: theme.getSpacing(1.5),
    borderRadius: theme.getShape('borderRadius'),
    boxShadow: theme.getShadow(),
    transition: `background-color ${theme.transition.duration.default}ms`,
    width: '100%',
    outline: 'none',
    cursor: 'pointer',
    ...theme.getTypographyStyle('field'),
    ...theme.getBorderStyle('field'),
    color: props.value ? theme.palette.text.primary : theme.palette.text.placeholder,

    [`&.${selectClasses.focusVisible}`]: {
      ...theme.getActionStyle('focussed'),
    },

    [`&.${selectClasses.disabled}`]: {
      ...theme.getActionStyle('disabled'),
    },

    ...(props.error
      ? {
          backgroundColor: theme.getColor('bad', { lighten: 50 }).hex,
          ...theme.getBorderStyle('field', 'bad'),
        }
      : {}),
  };
});

const Listbox = styled('ul')<SelectProps>(({ theme, ...props }) => {
  return {
    backgroundColor: theme.palette.background.default,
    top: theme.getSpacing(1),
    position: 'relative',
    boxShadow: theme.getShadow('projection'),
    ...theme.getTypographyStyle('field'),
    ...theme.getBorderStyle('field'),
    color: theme.palette.text.primary,

    [`.${optionClasses.root}`]: {
      listStyle: 'none',
      padding: theme.getSpacing(1),
      outline: 'none',
      cursor: 'pointer',
      backgroundColor: theme.palette.background.default,

      ['&:hover']: {
        borderBottom: 'none',
        backgroundColor: theme.getColor(props.intent, { lighten: 10 }).hex,
      },

      ['&:last-of-type']: {
        borderBottom: 'none',
      },

      [`&.${optionClasses.selected}`]: {
        backgroundColor: theme.getColor(props.intent).hex,
      },

      [`&.${optionClasses.highlighted}`]: {
        backgroundColor: theme.getColor(props.intent, { lighten: 0 }).hex,
      },

      [`&.${optionClasses.disabled}`]: {
        ...theme.getActionStyle('disabled'),
      },
    },
  };
});

const Popup = styled('div')<SelectProps>(({ theme }) => {
  return {
    width: '100%',
    zIndex: theme.zIndex.contextualMenu,
  };
});

export const Select = withField<BaseSelectProps<any, any> & SelectProps>(
  ({ context, placeholder, ...props }) => {
    return (
      <RootContainer id='lolol'>
        <BaseSelect
          slots={{ root: SelectButton, listbox: Listbox, popup: Popup }}
          slotProps={{
            root: { ...props, ...context } as any,
            listbox: { ...props, ...context } as any,
            popup: { disablePortal: true },
          }}
          placeholder={placeholder || 'Select...'}
          {...props}
        />
        <span>▼</span>
      </RootContainer>
    );
  },
  {
    map: {
      onChange: 'onChange:1',
    },
  }
);

export default Select;

const Option = BaseOption;
export { Option };
