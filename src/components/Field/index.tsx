import { ZodObject } from 'zod';

import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  forwardRef,
  useRef,
} from 'react';
import { ComponentIntent } from '../../utils/types';
import { cloneDeep, get } from 'lodash';

/**
 * TODO:
 * - isDirty property in the form?
 * - draft saving to local storage
 */

// Context
export type FormContextType = {
  hold?: boolean;
  fields: Record<string, FormFieldType>;
  registerField: (name: string, field: Partial<FormFieldType>) => void;
  reregisterField: (name: string) => void;
  unregisterField: (name: string) => void;
  updateField: (name: string, field: Partial<FormFieldType>) => void;
  validateForm: () => void;
  resetForm: () => void;
  clearForm: () => void;
  submitForm: (
    submitHandler?: (args: {
      valid: boolean;
      errors: Record<string, string | null | undefined> | null | undefined;
      fields: Record<string, any>;
    }) => Promise<void>
  ) => void;
  isFieldRegistered: (fieldName: string) => boolean;
  submitting: boolean;
  valid: boolean;
  errors?: Record<string, string | null | undefined> | null | undefined;
};
const defaultContext: FormContextType = {
  hold: false,
  fields: {},
  registerField: (a) => a,
  reregisterField: (b) => b,
  unregisterField: (c) => c,
  updateField: (d) => d,
  validateForm: () => true,
  resetForm: () => true,
  clearForm: () => true,
  submitForm: () => true,
  isFieldRegistered: (a) => !!a,
  submitting: false,
  valid: false,
  errors: undefined,
};
export const FormContext = createContext<FormContextType>(defaultContext);
// Types
export type FormProps = {
  initialValues?: any;
  schema: ZodObject<any>;
  onSubmit?: (args: {
    valid: boolean;
    errors: Record<string, string | null | undefined> | null | undefined;
    fields: Record<string, any>;
  }) => Promise<void>;
  hold?: boolean;
  children: ReactNode | ((formContext: FormContextType) => ReactNode);
};
export type FormFieldType = {
  required: boolean;
  touched: boolean;
  originalValue: any;
  value: any;
  error: any;
  errorMessage: string | null;
  _registered: boolean;
};
export const useFormRef = () => useRef<FormContextType>(defaultContext);
export const useFormState = () => useContext<FormContextType>(FormContext);
/**
 * Form component that exposes a global form context.
 * Each nested Fields will register to it.
 * @param initialValues
 */
export const Form = forwardRef<any, FormProps>(
  ({ initialValues = {}, schema, onSubmit, hold, children }, parentRef) => {
    const [fields, setFields] = useState<Record<string, FormFieldType>>({});
    const [submitting, setSubmitting] = useState<boolean>(false);
    /**
     * Registers a field into the form state. This method is typically
     * called from the Field component, on mount.
     */
    const registerField = useCallback((name: string, field: Partial<FormFieldType> = {}) => {
      setFields((_prev) => {
        return {
          ..._prev,
          [name]: {
            required: false,
            touched: !!initialValues[name],
            value: initialValues[name] ?? undefined,
            originalValue: field.value ?? undefined,
            error: false,
            errorMessage: null,
            ...field,
            _registered: true,
          },
        };
      });
    }, []);

    /**
     * Re-registers a previously registered field. The difference lies in the fact that it
     * will not set default values, it will only switch back the _registered flag to true.
     */
    const reregisterField = useCallback((name: string) => {
      setFields((_prev) => {
        return {
          ..._prev,
          [name]: {
            ...(_prev[name] || {}),
            _registered: true,
          },
        };
      });
    }, []);

    /**
     * Unregisters a field from the form state. This method is typically
     * called from the Field component, before unmounting.
     */
    const unregisterField = useCallback((name: string) => {
      setFields((_prev) => {
        return {
          ..._prev,
          [name]: {
            ...(_prev[name] || {}),
            _registered: false,
          },
        };
      });
    }, []);

    /**
     * Checks if a field is registered and returns a boolean value
     */
    const isFieldRegistered = useCallback(
      (name: string) => {
        return fields[name]?._registered === true;
      },
      [fields]
    );

    /**
     * Updates the data of a form field
     */
    const updateField = useCallback((name: string, field: Partial<FormFieldType> = {}) => {
      setFields((_prev) => {
        return {
          ..._prev,
          [name]: {
            ...(_prev[name] || {}),
            ...field,
          },
        };
      });
    }, []);

    /**
     * Check if form is valid, and returns result
     */
    const isFormValid = useCallback((_fields: Record<string, FormFieldType> = {}) => {
      const errors = Object.entries(_fields).reduce((acc, [k, v]) => {
        if (v.error) acc[k] = v.errorMessage;
        return acc;
      }, {} as Record<string, string | null | undefined>);
      const valid = Object.keys(errors).length === 0;
      return {
        valid,
        errors,
      };
    }, []);

    /**
     * Validate the form
     */
    const validateForm = useCallback(
      (options: { touch?: boolean } = {}) => {
        const { touch } = options;
        const allRequiredFields: Record<string, true> = {};
        const flattenedFields = Object.entries(fields).reduce((acc, [k, v]) => {
          if (v._registered) {
            if (v.required) allRequiredFields[k] = true;
            acc[k] = v.value;
          }
          return acc;
        }, {} as Record<string, any>);

        // Testing schema
        const validationResult = schema.partial().required(allRequiredFields).safeParse(flattenedFields);
        const erroredFieldKeys: Record<string, string> = {};
        if (!validationResult.success) {
          (validationResult.error.issues || []).forEach((issue) => {
            const { path, message } = issue;
            erroredFieldKeys[(path || []).join('.')] = message;
          });
        }

        // setFields((_prev) => {
        const updatedFields = Object.entries(cloneDeep(fields)).reduce((acc, [k, v]) => {
          acc[k] = erroredFieldKeys[k]
            ? {
                ...v,
                error: true,
                errorMessage: erroredFieldKeys[k],
                ...(touch ? { touched: true } : {}),
              }
            : {
                ...v,
                error: false,
                errorMessage: null,
                ...(touch ? { touched: true } : {}),
              };
          return acc;
        }, {} as Record<string, FormFieldType>);
        setFields(updatedFields);
        const { valid, errors } = isFormValid(updatedFields);

        const simpleFields = Object.entries(updatedFields).reduce((acc, [k, v]) => {
          acc[k] = v.value;
          return acc;
        }, {} as Record<string, any>);

        return {
          fields: simpleFields,
          valid,
          errors,
        };
        // });
      },
      [schema, fields]
    );

    /**
     * Resets the form to it's original values, set via
     * the initialValues prop on mount
     */
    const resetForm = useCallback(() => {
      setFields((_prev) => {
        return Object.entries(_prev).reduce((acc, [k, v]) => {
          acc[k] = {
            ...v,
            touched: !!v.originalValue,
            value: v.originalValue ?? undefined,
            error: false,
            errorMessage: null,
          };
          return acc;
        }, {} as Record<string, FormFieldType>);
      });
    }, [initialValues]);

    /**
     * Clears the form by setting all field values to undefined,
     * touched to false and clearing all errors. Note that this
     * does not clear the originalValue property, so the form
     * can still be resetted after being cleared
     */
    const clearForm = useCallback(() => {
      setFields((_prev) => {
        return Object.entries(_prev).reduce((acc, [k, v]) => {
          acc[k] = {
            ...v,
            touched: false,
            value: undefined,
            error: false,
            errorMessage: null,
          };
          return acc;
        }, {} as Record<string, FormFieldType>);
      });
    }, [initialValues]);

    /**
     * Triggers the action of "submitting" the form, which involves:
     * 1. validating all fields
     * 2. setting all fields as "touched"
     * 3. returning "valid" and "errors" properties for easy access
     */
    const submitForm = useCallback(
      async (
        submitHandler?: (args: {
          valid: boolean;
          errors: Record<string, string | null | undefined> | null | undefined;
          fields: Record<string, FormFieldType>;
        }) => void
      ) => {
        if (submitting) {
          console.warn('Cannot submit a form while is it already submitting');
          return;
        }
        setSubmitting(true);
        const { valid, errors, fields: _fields } = validateForm({ touch: true });
        const handlerParams = {
          valid,
          errors,
          fields: _fields,
        };
        if (submitHandler) {
          await submitHandler(handlerParams);
        } else if (onSubmit) {
          await onSubmit(handlerParams);
        }

        setSubmitting(false);
      },
      [initialValues, submitting, onSubmit, validateForm]
    );

    /**
     * Memoized "valid" and "errors" property to make it
     * accessible on form context. This also conveniently triggers
     * the validation, so we don't need a separate useEffect
     */
    const { valid, errors } = useMemo(() => validateForm(), [JSON.stringify(fields || {})]);

    /**
     * Context value to pass to context provider
     * and parent ref
     */
    const contextValue = {
      hold,
      fields,
      registerField,
      reregisterField,
      unregisterField,
      isFieldRegistered,
      updateField,
      validateForm,
      resetForm,
      clearForm,
      submitForm,
      submitting,
      valid,
      errors,
    };

    /**
     * Validate form on change
     */
    useEffect(() => {
      if (parentRef) (parentRef as any).current = contextValue;
    }, [JSON.stringify(contextValue || {})]);

    return (
      <FormContext.Provider value={contextValue}>
        {typeof children === 'function' ? children(contextValue) : children}
      </FormContext.Provider>
    );
  }
);

// Context
export type FieldContextType = {
  setTouched: (touched: boolean) => void;
  setError: (error: boolean, message?: string) => void;
  setErrorMessage: (message?: string | null) => void;
  setValue: (value?: any | null) => void;
  intent?: ComponentIntent;
} & Partial<FormFieldType>;
export const FieldContext = createContext<FieldContextType>({
  setTouched: (a) => a,
  setError: (b) => b,
  setErrorMessage: (c) => c,
  setValue: (d) => d,
});
export const useField = () => useContext(FieldContext);
// Types
export type FieldProps = {
  name: string;
  children: ReactNode;
  inline?: boolean;
  intent?: ComponentIntent;
  required?: boolean;
};
/**
 * Field component
 */
export const Field: FC<FieldProps> = ({ name, children, inline, intent, ...fieldOptions }) => {
  const formCtx = useContext(FormContext);
  const { registerField, unregisterField, updateField, fields, isFieldRegistered, hold } = formCtx;
  const field = useMemo(() => fields[name], [fields, name]);

  useEffect(() => {
    if (hold || isFieldRegistered(name)) return;
    registerField(name, fieldOptions || {});
    return () => unregisterField(name);
  }, [hold]);

  useEffect(() => {
    if (!field || !field._registered || hold) return;
    updateField(name, fieldOptions || {});
  }, [hold, field?._registered, fieldOptions?.required]);

  /**
   * Sets a field's "touched" property
   */
  const setTouched = useCallback(
    (_touched: boolean) => {
      updateField(name, { touched: _touched });
    },
    [name]
  );

  /**
   * Sets a field's "error" property
   */
  const setError = useCallback(
    (_error: boolean, _errorMessage?: string) => {
      updateField(name, {
        error: _error,
        ...(_error ? (_errorMessage ? { errorMessage: _errorMessage } : {}) : { errorMessage: undefined }),
      });
    },
    [name]
  );

  /**
   * Sets a field's "errorMessage" property
   */
  const setErrorMessage = useCallback(
    (_errorMessage?: string | null) => {
      updateField(name, {
        errorMessage: _errorMessage || undefined,
      });
    },
    [name]
  );

  /**
   * Sets a field's "value" property
   */
  const setValue = useCallback(
    (_value?: any | null) => {
      updateField(name, { value: _value });
    },
    [name]
  );

  const contextValue = {
    setTouched,
    setError,
    setErrorMessage,
    setValue,
    intent,
    ...field,
    error: field?.error && field?.touched,
  };

  return (
    <FieldContext.Provider value={contextValue}>
      <div style={{ display: 'flex', flexDirection: inline ? 'row' : 'column' }}>{children}</div>
    </FieldContext.Provider>
  );
};

/**
 * HOC to tap into the callbacks and props of a component.
 */
type WithFieldFunctionType = <T extends JSX.IntrinsicAttributes>(
  C: FC<T & { context?: FieldContextType }>,
  config?: {
    map?: { value?: keyof T; onChange?: string; onFocus?: keyof T; onBlur?: keyof T; onClick?: keyof T };
  }
) => FC<T & { _isolated?: boolean }>;
export const withField: WithFieldFunctionType = (C, config = {}) => {
  const { map } = config;
  const {
    value: valueProp = 'value',
    onChange: _onChange = 'onChange',
    onFocus: onFocusProp = 'onFocus',
    onBlur: onBlurProp = 'onBlur',
    onClick: onClickProp = 'onClick',
  } = map || {};

  return (props) => {
    const field = useField();

    if (props._isolated) {
      return <C {...props} />;
    }
    const [_onChangePropWithPotentialIndex, ...onChangePath] = _onChange.split('.');
    const [onChangeProp, onChangeArgIndex] = _onChangePropWithPotentialIndex.split(':');
    const augmentedProps = {
      ...(props || {}),
      [onChangeProp]: (...args: any[]) => {
        (props as any)?.[onChangeProp]?.(...args);
        const argIndex = Number(onChangeArgIndex || 0) || 0;
        const valueFromHandler = onChangePath?.length ? get(args[argIndex], onChangePath.join('.')) : args[argIndex];
        field.setValue(valueFromHandler);
        field.setTouched(true);
      },
      [onFocusProp]: (...args: any[]) => {
        (props as any)?.[onFocusProp]?.(...args);
        // ...
      },
      [onBlurProp]: (...args: any[]) => {
        (props as any)?.[onBlurProp]?.(...args);
        // ...
      },
      [onClickProp]: (...args: any[]) => {
        (props as any)?.[onClickProp]?.(...args);
        // ...
      },
      [valueProp]: (props as any)?.[valueProp] || field.value,
      error: (props as any)?.error || field.error,
      context: field,
    };
    return <C {...augmentedProps} />;
  };
};

/*

<EZProvider>
  ...
  const { Form, submitting... } = useForm('form-name');
  <Form>
    <Field />
  </Form
</EZProvider>


*/
