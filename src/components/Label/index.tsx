import { BaseComponentWithChildrenProps } from '../../utils/types';
import { FC } from 'react';
import clsx from 'clsx';
import { useField } from '../Field';
import { styled } from '../../styles/theme';

export type LabelProps = BaseComponentWithChildrenProps;

const RootLabel: FC<LabelProps> = (props) => {
  const field = useField();

  return (
    <label
      className={clsx(props.className, {
        'component-label--error': field.error,
        [`component-label--${field.intent}`]: !!field.intent,
      })}>
      {props.children}
      {field.required ? ' *' : ''}
    </label>
  );
};

export const Label = styled(RootLabel)<LabelProps>(({ theme }) => {
  return {
    ...theme.getTypographyStyle('fieldLabel'),
    [`&.component-label--error `]: {
      color: theme.getColor('bad').hex,
    },
  };
});

export default Label;
