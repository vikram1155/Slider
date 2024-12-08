import { Button, styled } from "@mui/material";

const CustomButton = styled(Button, {
  shouldForwardProp: (prop) =>
    prop !== "size" && prop !== "color" && prop !== "fontWeight", // Prevent passing custom props to DOM
})(({ theme, size, color, fontWeight, sx }) => ({
  fontSize: size || "16px", // Default font size
  color: color || "black", // Default text color
  fontWeight: fontWeight || "normal", // Default font weight
  fontFamily: `"Sour Gummy", sans-serif`, // Custom font
  border: "1px solid", // Button border
  borderColor: color || "black", // Default border color
  borderRadius: "8px", // Rounded corners
  textTransform: "capitalize", // Prevent uppercase text
  cursor: "pointer", // Pointer cursor
  transition: "all 0.3s ease", // Smooth transition for hover effects

  // Hover Styles
  "&:hover": {
    backgroundColor: "black", // Hover background color
    color: "white", // Hover text color
    borderColor: "black", // Hover border color
    transform: "scale(1.05)", // Scale effect
  },
  ...sx, // Spread any additional styles
}));

export default CustomButton;
