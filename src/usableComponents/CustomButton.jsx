import { Button, styled } from "@mui/material";

const CustomButton = styled(Button, {
  shouldForwardProp: (prop) =>
    prop !== "size" && prop !== "color" && prop !== "fontWeight",
})(({ theme, size, color, fontWeight, sx }) => ({
  fontSize: size || "16px",
  color: color || "black",
  fontWeight: fontWeight || "normal",
  fontFamily: `"Sour Gummy", sans-serif`,
  border: "1px solid",
  borderColor: color || "black",
  borderRadius: "8px",
  textTransform: "capitalize",
  cursor: "pointer",
  transition: "all 0.3s ease",

  "&:hover": {
    backgroundColor: "black",
    color: "white",
    borderColor: "black",
    transform: "scale(1.05)",
  },
  ...sx,
}));

export default CustomButton;
