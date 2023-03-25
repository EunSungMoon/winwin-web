import { Controller, useFormContext, get } from "react-hook-form";
import Input from "@mui/material/TextField";

const Component = ({ name, placeholder }) => {
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
      render={({ field: { onChange, value }, formState }) => (
        <Input
          id="outlined-basic"
          label={placeholder}
          variant="outlined"
          onChange={(e) => onChange(e.target.value)}
          value={value}
          defaultValue={dv}
        />
      )}
    />
  );
};

export default Component;
