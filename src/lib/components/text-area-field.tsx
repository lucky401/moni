/* eslint-disable react/require-default-props */

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';

interface TextAreaFieldProps {
  label?: string;
  name?: string;
  value?: string | number;
  errorMessage?: string;
  helperText?: string;
  placeholder?: string;
  id?: string;
  type?:
    | 'text'
    | 'address'
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps?: any;
  disabled?: boolean;
  [key: string]: any;
}

function TextAreaField({
  label,
  name,
  value,
  errorMessage,
  helperText,
  placeholder,
  id,
  type = 'text',
  onChange,
  inputProps,
  disabled,
  ...customProps
}: TextAreaFieldProps): JSX.Element {
  const isInvalid = !!errorMessage;

  return (
    <FormControl {...customProps} isInvalid={isInvalid}>
      {label && <FormLabel htmlFor={id || label}>{label}</FormLabel>}
      <Textarea
        id={id || label}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        {...inputProps}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
}

export {TextAreaField};
