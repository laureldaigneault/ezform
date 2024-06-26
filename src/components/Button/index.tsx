import { Button as BaseButton, ButtonProps as BaseButtonProps, buttonClasses } from '@mui/base';
import { BaseComponentProps } from '../../utils/types';
import { FC } from 'react';
import { useFormState } from '../Field';
import { styled } from '../../styles/theme';

export type ButtonProps = BaseButtonProps & BaseComponentProps;

const RootButton: FC<ButtonProps> = (props) => {
  const { submitting, submitForm } = useFormState();
  return (
    <BaseButton
      {...props}
      disabled={props.disabled || submitting}
      {...(props.type === 'submit' ? { onClick: () => submitForm() } : {})}>
      {props.type === 'submit' && submitting ? 'Loading...' : props.children}
    </BaseButton>
  );
};

export const Button = styled(RootButton)<ButtonProps>(({ theme, ...props }) => {
  return {
    backgroundColor: theme.getColor(props.intent).hex,
    borderRadius: theme.getShape('borderRadius'),
    padding: theme.getSpacing(2, 4),
    transition: `background-color ${theme.transition.duration.default}ms`,
    cursor: 'pointer',
    ...theme.getTypographyStyle('button'),
    ...theme.getBorderStyle('button'),
    borderColor: theme.getColor(props.intent, { darken: 50 }).hex,
    color: theme.getColor(props.intent).contrastTextHex,
    boxShadow: theme.getShadow('projection'),

    [`&:hover`]: {
      ...theme.getActionStyle('hover'),
    },

    [`&.${buttonClasses.active}`]: {
      ...theme.getActionStyle('pressed'),
    },

    [`&.${buttonClasses.disabled}`]: {
      ...theme.getActionStyle('disabled'),
    },

    [`&.${buttonClasses.focusVisible}`]: {
      outline: 'none',
      ...theme.getActionStyle('focussed'),
    },
  };
});

export default Button;
