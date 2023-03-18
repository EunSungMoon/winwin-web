import { Controller, useFormContext } from "react-hook-form";
import Input from "@mui/material/TextField";

const Component = () => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="test"
      render={{ field: { onChange, value }, formState }}
    >
      <Input
        onChange={(e) => e.target.value}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
    </Controller>
  );
};

export default Component;
