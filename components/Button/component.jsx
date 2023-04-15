import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled, { useTheme } from "styled-components";

const Component = ({
  variant,
  disabled,
  appearance,
  size,
  onClick,
  label,
  height,
  radius,
}) => {
  // variant : text, contained ,outlined
  //color:https://mui.com/material-ui/customization/palette/#adding-new-colors
  // size : small, medium, large

  //startIcon, endIcon
  const theme = useTheme();

  const buttonTheme = createTheme({
    palette: {
      primary: {
        main: theme.colors.primary[300],
      },
      default: {
        main: theme.colors.neutral[80],
      },
    },
  });

  return (
    <ThemeProvider theme={buttonTheme}>
      <StyledButton
        variant={variant}
        disabled={disabled}
        color={appearance}
        size={size}
        onClick={onClick ? onClick : null}
        $radius={radius}
        $height={height}
      >
        {label}
      </StyledButton>
    </ThemeProvider>
  );
};

export default Component;

const StyledButton = styled(Button)`
  height: ${({ $height }) => $height};
  border-radius: ${({ $radius }) => $radius};
  width: 100%;
`;
