import {
  Select as ChakraSelect,
  FormLabel,
  FormControl,
  InputProps as ChakraInputProps,
  FormErrorMessage,
} from "@chakra-ui/react";

import { FieldError } from "react-hook-form";
import { forwardRef, ForwardRefRenderFunction, ReactNode } from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
  children: ReactNode;
}

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, InputProps> = (
  { name, label, children, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && (
        <FormLabel htmlFor={name} fontWeight="normal">
          {label}
        </FormLabel>
      )}
      <ChakraSelect
        id={name}
        focusBorderColor="blue.50"
        bgColor="gray.900"
        variant="filled"
        _hover={{ bgColor: "gray.900" }}
        size="lg"
        ref={ref}
        {...rest}
      >
        {children}
      </ChakraSelect>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Select = forwardRef(SelectBase);
