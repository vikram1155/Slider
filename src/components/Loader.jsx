import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import loader1 from "../assets/loader1.png";
import loader2 from "../assets/loader2.png";
import loader3 from "../assets/loader3.png";
import angryLuvey from "../assets/angryLuvey.png";
import { useNavigate } from "react-router-dom";
import CustomButton from "../usableComponents/CustomButton";
import CustomTypography from "../usableComponents/CustomTypography";

function Loader({ showLoader }) {
  const [loadingImage, setLoadingImage] = useState(1);
  const [scale, setScale] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const updateLoadingImage = () => {
      setTimeout(() => {
        setLoadingImage(2);
        setTimeout(() => {
          setLoadingImage(3);
        }, 2000);
      }, 2000);
    };

    const animateImage = () => {
      setScale(1.1);
      setTimeout(() => {
        setScale(1);
      }, 1000);

      const interval = setInterval(() => {
        setScale(1.1);
        setTimeout(() => {
          setScale(1);
        }, 1000);
      }, 2000);

      return () => clearInterval(interval);
    };

    updateLoadingImage();
    animateImage();
  }, []);

  const [showAngryLuveyImage, setShowAngryLuveyImage] = useState(false);
  const handleButtonClick = () => {
    setShowAngryLuveyImage(true);
    setTimeout(() => {
      navigate("/fbi-open-up");
    }, 5000);
  };

  return (
    <Box display="flex" justifyContent="center">
      {showLoader ? (
        <Box
          sx={{
            display: "flex",
            height: loadingImage === 3 ? "320px" : "300px",
            justifyContent: "center",
          }}
        >
          <img
            src={
              loadingImage === 1
                ? loader1
                : loadingImage === 2
                ? loader2
                : loader3
            }
            alt="Loading images"
            style={{
              transform: `scale(${scale})`,
              transition: "transform 1.5s ease-in-out",
              width: "100%",
              paddingTop: loadingImage === 3 ? "35px" : 0,
              userSelect: "none",
              outline: "none",
              WebkitUserDrag: "none",
            }}
          />
        </Box>
      ) : showAngryLuveyImage ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={angryLuvey}
            alt="angryLuvey"
            style={{
              width: "60%",
              userSelect: "none",
              outline: "none",
              WebkitUserDrag: "none",
            }}
          />
          <CustomTypography sx={{ textAlign: "center" }}>
            Pannatha nu sonna<br></br>panviyaa nee 🤨?
          </CustomTypography>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CustomButton
            variant="outlined"
            onClick={handleButtonClick}
            sx={{
              animation: "pulse 3s infinite",
              "@keyframes pulse": {
                "0%": {
                  transform: "scale(1)",
                },
                "50%": {
                  transform: "scale(1.1)",
                },
                "100%": {
                  transform: "scale(1)",
                },
              },
            }}
          >
            Yēthē klik &nbsp;❌&nbsp; karū nakā
          </CustomButton>

          {/* <img
            src={ClickHere}
            alt="Click here"
            style={{
              transform: `scale(${scale})`,
              transition: "transform 1.5s ease-in-out",
              width: "50%",
              userSelect: "none",
              outline: "none",
              WebkitUserDrag: "none",
              position: "absolute",
            }}
          /> */}
        </Box>
      )}
    </Box>
  );
}

export default Loader;
