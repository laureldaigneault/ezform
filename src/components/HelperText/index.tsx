import { BaseComponentWithChildrenProps } from '../../utils/types';
import { FC } from 'react';
import clsx from 'clsx';
import { useField } from '../Field';
import styled from 'styled-components';

export type HelperTextProps = BaseComponentWithChildrenProps;

const HelperText: FC<HelperTextProps> = (props) => {
  const field = useField();

  return (
    <p
      className={clsx(props.className, {
        'component-helperText--error': field.error,
        [`component-helperText--${field.intent}`]: !!field.intent,
      })}>
      {field.error && field.errorMessage ? field.errorMessage : props.children}
    </p>
  );
};

export default styled(HelperText)<HelperTextProps>(({ theme }) => {
  return {
    ...theme.getTypographyStyle('fieldHelperText'),
    [`&.component-helperText--error `]: {
      color: theme.getColor('bad').hex,
    },
  };
});
