/* eslint-disable react/require-default-props */

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Switch,
} from '@chakra-ui/react';

interface SwitchFieldProps {
  label?: string;
  name?: string;
  value?: string | number;
  errorMessage?: string;
  helperText?: string;
  id?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps?: any;
  disabled?: boolean;
  [key: string]: any;
}

function SwitchField({
  label,
  name,
  value,
  errorMessage,
  helperText,
  id,
  onChange,
  inputProps,
  disabled,
  ...customProps
}: SwitchFieldProps): JSX.Element {
  const isInvalid = !!errorMessage;

  return (
    <FormControl {...customProps} isInvalid={isInvalid}>
      {label && <FormLabel htmlFor={id || label}>{label}</FormLabel>}
      <Switch
        id={id || label}
        name={name}
        isChecked={inputProps.value}
        onChange={onChange}
        disabled={disabled}
        {...inputProps}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
}

export {SwitchField};
