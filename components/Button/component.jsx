import Button from "@mui/material/Button";

const Component = ({ variant, disabled, appearance, size, onClick, label }) => {
  // variant : text, contained ,outlined
  //color:https://mui.com/material-ui/customization/palette/#adding-new-colors
  // size : small, medium, large

  //startIcon, endIcon

  return (
    <Button
      variant={variant}
      disabled={disabled}
      color={appearance}
      size={size}
      onClick={onClick ? onClick : null}
    >{label}</Button>
  );
};

export default Component;
