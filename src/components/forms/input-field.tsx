import { Input, type InputProps } from '@heroui/react';
import { useFieldContext } from './form-context';

export const InputField = (props: InputProps) => {
  const field = useFieldContext<string>();
  return (
    <Input
      variant="bordered"
      errorMessage={field.state.meta.errors?.[0]?.message}
      isInvalid={!!field.state.meta.errors.length}
      aria-label={field.name}
      value={field.state.value}
      onValueChange={field.setValue}
      {...props}
    />
  );
};
