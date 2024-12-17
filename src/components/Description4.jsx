import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomTypography from "../usableComponents/CustomTypography";
import CustomButton from "../usableComponents/CustomButton";

function Description4() {
  const [showLetter, setShowLetter] = useState(0);
  const [currentButton, setCurrentButton] = useState(1);
  const [buttonArray, setButtonArray] = useState([
    {
      id: 1,
      status: "open",
      value: "Arambikalama?😊",
      top: "0px",
      right: "auto",
      bottom: "auto",
      left: "0px",
    },
    {
      id: 2,
      status: "close",
      value: "Thakita thak dhim(1)👻",
      top: "40%",
      right: "auto",
      bottom: "auto",
      left: "15%",
    },
    {
      id: 3,
      status: "close",
      value: "Thak dhim tha thak dhim(1)😈",
      top: "80%",
      right: "auto",
      bottom: "auto",
      left: "30%",
    },
    {
      id: 4,
      status: "close",
      value: "Thakita thak dhim(2)👻",
      top: "40%",
      right: "auto",
      bottom: "auto",
      left: "30%",
    },
    {
      id: 5,
      status: "close",
      value: "Thak dhim tha thak dhim(2)😈",
      top: "0",
      right: "auto",
      bottom: "auto",
      left: "30%",
    },
    {
      id: 6,
      status: "close",
      value: "Thakita thak dhim(3)👻",
      top: "40%",
      right: "auto",
      bottom: "auto",
      left: "45%",
    },
    {
      id: 7,
      status: "close",
      value: "Thak dhim tha thak dhim(3)😈",
      top: "80%",
      right: "auto",
      bottom: "auto",
      left: "60%",
    },
    {
      id: 8,
      status: "close",
      value: "Content kammi.. so konjom sutha vudren😁",
      top: "40%",
      right: "auto",
      bottom: "auto",
      left: "75%",
    },
    {
      id: 9,
      status: "close",
      value: "Ithan final, click⚡️",
      top: "0",
      right: "auto",
      bottom: "auto",
      left: "90%",
    },
    {
      id: 10,
      status: "close",
      value: "Urutitenn🤓",
      top: "40%",
      right: "auto",
      bottom: "auto",
      left: "90%",
    },
    {
      id: 11,
      status: "close",
      value: "Aan nottu😎",
      top: "80%",
      right: "auto",
      bottom: "auto",
      left: "90%",
    },
    {
      id: 12,
      status: "close",
      value: "Wohoooo🥳",
      right: "auto",
      bottom: "auto",
      left: "calc(50% - 50px)",
      top: "calc(50% - 24px)",
    },
  ]);

  const handleButtonClick = (buttonNumber) => {
    setCurrentButton(currentButton + 1);
    setButtonArray((prevState) =>
      prevState.map((button) => {
        if (button.id === buttonNumber) {
          //   return { ...button, status: "close" };
        } else if (button.id === buttonNumber + 1) {
          return { ...button, status: "open" };
        } else if (buttonNumber === 11) {
          setShowLetter(1);
        } else if (buttonNumber === 12) {
          setShowLetter(2);
        }
        return button;
      })
    );
  };

  return (
    <Box
      sx={{
        height: "calc(100vh - 100px)",
        width: "calc(100% - 50px)",
        position: "relative",
      }}
    >
      {showLetter === 1 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "calc(50vh - 60px)",
          }}
        >
          <CustomButton
            sx={{
              borderRadius: "100px",
              fontSize: "12px",
              textTransform: "none",
            }}
            onClick={() => handleButtonClick(12)}
          >
            Wohoooo🥳
          </CustomButton>
        </Box>
      ) : showLetter === 2 ? (
        <>hello</>
      ) : (
        <>
          {buttonArray.map((button) => (
            <>
              {button.status === "open" && (
                <Box
                  sx={{
                    position: "absolute",
                    left: button.left,
                    right: button.right,
                    bottom: button.bottom,
                    top: button.top,
                    display: "flex",
                    flexDirection: "column",
                    width: "100px",
                    alignItems: "center",
                  }}
                >
                  <CustomButton
                    sx={{
                      borderRadius: "100px",
                      fontSize: "14px",
                      textTransform: "none",
                    }}
                    onClick={() => handleButtonClick(button.id)}
                  >
                    {button.id % 2 === 0 ? "Thodavum" : "Amukavum"}
                  </CustomButton>
                  <CustomTypography
                    size="14px"
                    fontWeight="normal"
                    sx={{ textAlign: "center" }}
                  >
                    {button.value}
                  </CustomTypography>
                </Box>
              )}
            </>
          ))}
        </>
      )}
    </Box>
  );
}

export default Description4;
