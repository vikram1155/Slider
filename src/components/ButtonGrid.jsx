import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomButton from "../usableComponents/CustomButton";

function ButtonGrid() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "10%",
        width: "100%",
        justifyItems: "center",
        alignContent: "center",
      }}
    >
      <CustomButton
        size="12px"
        onClick={() => navigate("/page1")}
        sx={{
          width: "100px",
          borderRadius: "100%",
          padding: "16px 8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifySelf: "right",
        }}
      >
        🎧<br></br>Earphones<br></br>please
      </CustomButton>
      <CustomButton
        size="12px"
        onClick={() => navigate("/reassurance")}
        sx={{
          width: "100px",
          borderRadius: "100%",
          padding: "16px 8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifySelf: "left",
        }}
      >
        😠<br></br>Reassurance<br></br>No.71099
      </CustomButton>
      <CustomButton
        size="12px"
        onClick={() => navigate("/aginii-siragee-elunthu-vaaa")}
        sx={{
          width: "100px",
          borderRadius: "100%",
          padding: "16px 8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifySelf: "right",
        }}
      >
        😤<br></br>Varuviya<br></br>matiya?
      </CustomButton>
      <CustomButton
        size="12px"
        onClick={() => navigate("/bujukku")}
        sx={{
          width: "100px",
          borderRadius: "100%",
          padding: "16px 8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifySelf: "left",
        }}
      >
        To my<br></br>bujjukku<br></br>🥰
      </CustomButton>

      <CustomButton
        size="12px"
        onClick={() => navigate("/uruttugal")}
        sx={{
          width: "100px",
          borderRadius: "100%",
          padding: "16px 8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifySelf: "right",
        }}
      >
        Other<br></br>Links<br></br>😁
      </CustomButton>

      <CustomButton
        size="12px"
        onClick={() => navigate("/agremendu")}
        sx={{
          width: "100px",
          borderRadius: "100%",
          padding: "16px 8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifySelf: "left",
        }}
      >
        Sign<br></br>Pannunga<br></br>✍🏻
      </CustomButton>
    </Box>
  );
}

export default ButtonGrid;
