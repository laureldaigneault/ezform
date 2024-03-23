import { BaseComponentWithChildrenProps } from '../../utils/types';
import { FC } from 'react';
import clsx from 'clsx';
import { useField } from '../Field';
import styled from 'styled-components';

export type LabelProps = BaseComponentWithChildrenProps;

const Label: FC<LabelProps> = (props) => {
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

export default styled(Label)<LabelProps>(({ theme }) => {
  return {
    ...theme.getTypographyStyle('fieldLabel'),
    [`&.component-label--error `]: {
      color: theme.getColor('bad').hex,
    },
  };
});
