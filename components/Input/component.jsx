import { Controller, useFormContext, get } from "react-hook-form";
import Input from "@mui/material/TextField";

const Component = ({
  name,
  label,
  required,
  placeholder,
  variant,
  size,
  ...props
}) => {
  const { control, formState } = useFormContext();

  const dv = get(
    control._defaultValues,
    name,
    typeof defaultValue !== "undefined" ? defaultValue : null
  );
  const error = get(formState.errors, name);

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={dv}
      render={({ field: { onChange, value }, formState }) => (
        <Input
          error={error && error}
          label={label}
          variant={variant}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          required={required}
          placeholder={placeholder}
          size={size}
          {...props}
        />
      )}
    />
  );
};

export default Component;
