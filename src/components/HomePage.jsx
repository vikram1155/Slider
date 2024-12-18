import { Box } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import CustomTypography from "../usableComponents/CustomTypography";
import ButtonGrid from "./ButtonGrid";
import legoBatman from "../assets/lego-batman.mp4";

function HomePage() {
  const yessDate = useMemo(
    () => new Date("December 23, 2023 11:45:00 GMT+0530"),
    []
  );
  const firstMeetDate = useMemo(
    () => new Date("May 11, 2018 16:30:00 GMT+0530"),
    []
  );
  const firstDayDate = useMemo(
    () => new Date("Sep 25, 2024 12:30:00 GMT+0530"),
    []
  );

  const [timeDiffYess, setTimeDiffYess] = useState({});
  const [timeDiffFirstMeet, setTimeDiffFirstMeet] = useState({});
  const [timeDiffFirstDay, setTimeDiffFirstDay] = useState({});

  const calculateTimeDifference = (targetDate) => {
    const now = Date.now();
    const diff = Math.abs(targetDate - now);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);
    return { days, hours, mins, secs };
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeDiffYess(calculateTimeDifference(yessDate));
      setTimeDiffFirstMeet(calculateTimeDifference(firstMeetDate));
      setTimeDiffFirstDay(calculateTimeDifference(firstDayDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [yessDate, firstMeetDate, firstDayDate]);

  return (
    <Box sx={{ height: "100vh", width: "100%", alignContent: "center" }}>
      {/* {passwordCheck === "yes" ? ( */}
      {timeDiffYess.days ? (
        <>
          {/*  */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              height: "100vh",
              width: "100%",
              alignContent: "center",
            }}
          >
            <CustomTypography
              size="20px"
              fontWeight="bold"
              sx={{ textAlign: "center" }}
            >
              How I met you! <br></br>(Yarraa ivo namaku teriyama ece la
              vellaiya irukaaa!)
            </CustomTypography>
            <Box>
              {/* <iframe
              src="https://giphy.com/embed/l3q2tzon8OCC7BqmY"
              style={{
                display: "block",
                height: "300px",
                position: "relative",
                width: "450px",
              }}
              frameBorder="0"
            ></iframe> */}
              <video
                width="100%"
                controls
                autoPlay
                loop
                muted={false}
                style={{ display: "block" }}
              >
                <source src={legoBatman} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Box>
            <Box>
              Its beeeeen&nbsp;
              {timeDiffFirstMeet.days > 0 && `${timeDiffFirstMeet.days} days, `}
              {timeDiffFirstMeet.hours > 0 &&
                `${timeDiffFirstMeet.hours} hours, `}
              {timeDiffFirstMeet.mins > 0 && `${timeDiffFirstMeet.mins} mins, `}
              {timeDiffFirstMeet.secs > 0 &&
                `${timeDiffFirstMeet.secs} secs`}{" "}
              since I saw you!!
            </Box>
          </Box>
          {/*  */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              height: "100vh",
              width: "100%",
              alignContent: "center",
            }}
          >
            <Box>
              Its beeeeen&nbsp;
              {timeDiffYess.days > 0 && `${timeDiffYess.days} days, `}
              {timeDiffYess.hours > 0 && `${timeDiffYess.hours} hours, `}
              {timeDiffYess.mins > 0 && `${timeDiffYess.mins} mins, `}
              {timeDiffYess.secs > 0 && `${timeDiffYess.secs} secs`} since we
              said yes!
            </Box>
            <CustomTypography
              size="20px"
              fontWeight="bold"
              sx={{ textAlign: "center" }}
            >
              Images here
            </CustomTypography>
          </Box>
          {/*  */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              height: "100vh",
              width: "100%",
              alignContent: "center",
            }}
          >
            <Box>
              Its beeeeen&nbsp;
              {timeDiffFirstDay.days > 0 && `${timeDiffFirstDay.days} days, `}
              {timeDiffFirstDay.hours > 0 &&
                `${timeDiffFirstDay.hours} hours, `}
              {timeDiffFirstDay.mins > 0 && `${timeDiffFirstDay.mins} mins, `}
              {timeDiffFirstDay.secs > 0 &&
                `${timeDiffFirstDay.secs} secs`}{" "}
              since I "SAW" you😂
            </Box>

            <CustomTypography
              size="20px"
              fontWeight="bold"
              sx={{ textAlign: "center" }}
            >
              Images here
            </CustomTypography>
          </Box>
          {/*  */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              height: "100vh",
              width: "100%",
              alignContent: "center",
            }}
          >
            <ButtonGrid />
          </Box>
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
            width: "100%",
            alignContent: "center",
          }}
        >
          Loading...
        </Box>
      )}
    </Box>
  );
}

export default HomePage;
