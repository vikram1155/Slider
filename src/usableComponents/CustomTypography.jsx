import { Typography, styled } from "@mui/material";

const CustomTypography = styled(Typography)(
  ({ theme, size, color, fontWeight, sx }) => ({
    fontSize: size || "16px", // Default font size if not provided
    color: color || "black", // Default color if not provided
    fontWeight: fontWeight || "normal", // Default font weight if not provided
    fontFamily: `"Sour Gummy", sans-serif`,
    ...sx,
  })
);

export default CustomTypography;
