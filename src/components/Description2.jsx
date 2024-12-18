import React from "react";
import loader3 from "../assets/loader3.png";
import { Box } from "@mui/material";

function Description2() {
  return (
    <div>
      Kaathu force ah iruku, weather rough ah iruku, flight eduka mudiyathunu
      pilot sonnan Tyre rough ah iruku, road tough ah iruku, vandi eduka
      mudiyathunu driver sonnan
      ghilli
      singam
      agini sirage song
      
      <Box
        sx={{
          backgroundColor: "red",
          filter: "blur(10px)",
          "&:hover": { filter: "blur(0px)" },
        }}
      >
        <img
          src={loader3}
          alt="Loading images"
          style={{
            width: "100%",
            userSelect: "none",
            outline: "none",
            WebkitUserDrag: "none",
          }}
        />
      </Box>
    </div>
  );
}

export default Description2;
