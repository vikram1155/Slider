import { Box, Input } from "@mui/material";
import React from "react";
import CustomTypography from "../usableComponents/CustomTypography";
import CustomButton from "../usableComponents/CustomButton";
import { useNavigate } from "react-router";
import blackCat from "../assets/blackCat.png";

function PasswordCheck({
  showLoader,
  passwordCheck,
  passwordEntered,
  setPasswordCheck,
  setPasswordEntered,
}) {
  const navigate = useNavigate();
  const passwordInputChange = (val) => {
    setPasswordEntered(val);
  };
  const handlePasswordButton = () => {
    if (passwordEntered === "VM070999") {
      localStorage.setItem("password", passwordEntered);
      setPasswordCheck("yes");
      navigate("/vaa-di-booshu");
    } else {
      setPasswordCheck("no");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <CustomTypography sx={{ textAlign: "center" }}>
        {passwordCheck === "no"
          ? "Adaa paavvviiii😮"
          : "Password enanu neeye yoschu podunga thambee😊"}
      </CustomTypography>
      <br></br>
      <Input
        variant="solid"
        onChange={(e) => passwordInputChange(e.target.value)}
        autoFocus
        sx={{
          textAlignLast: "center",
          caretColor: "transparent",
          fontFamily: `"Sour Gummy", sans-serif`,
        }}
      />
      <br></br>
      <CustomButton
        size="18px"
        color="black"
        fontWeight="normal"
        onClick={handlePasswordButton}
      >
        {passwordCheck === "no" ? "Retryy" : "Confirm ah?"}
      </CustomButton>
      {passwordCheck === "no" && (
        <>
          <br></br>
          <CustomTypography>Yosiii daww🤨</CustomTypography>
          <img
            src={blackCat}
            alt="gunCat"
            style={{ width: "300px", paddingRight: "25px" }}
          />
        </>
      )}
    </Box>
  );
}

export default PasswordCheck;
