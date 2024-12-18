import { Typography, styled } from "@mui/material";

const CustomTypography = styled(Typography)(
  ({ theme, size, color, fontWeight, sx }) => ({
    fontSize: size || "16px",
    color: color || "black",
    fontWeight: fontWeight || "normal",
    fontFamily: `"Sour Gummy", sans-serif`,
    ...sx,
  })
);

export default CustomTypography;
