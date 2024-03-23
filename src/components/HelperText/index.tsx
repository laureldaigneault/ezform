import { BaseComponentWithChildrenProps } from '../../utils/types';
import { FC } from 'react';
import clsx from 'clsx';
import { useField } from '../Field';
import { styled } from '../../styles/theme';

export type HelperTextProps = BaseComponentWithChildrenProps;

const RootHelperText: FC<HelperTextProps> = (props) => {
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

export const HelperText = styled(RootHelperText)<HelperTextProps>(({ theme }) => {
  return {
    ...theme.getTypographyStyle('fieldHelperText'),
    [`&.component-helperText--error `]: {
      color: theme.getColor('bad').hex,
    },
  };
});

export default HelperText;
