import { Box, Button, Container, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomButton from "../usableComponents/CustomButton";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Signature from "../assets/Signature.png";
import ShakingHands from "../assets/ShakingHands.png";
import CustomTypography from "../usableComponents/CustomTypography";

function Description6() {
  const [done, setDone] = useState(false);
  const [formValues, setFormValues] = useState({
    enPeru: "Vikram S",
    enVayasu: "25",
    enAddress: "Madurakkaren",
    enChellaPergal: "Jingu, Jingudu, Gundaa",
    enConfirmation:
      "Mudiyum, Naa Pathukren, Ena kalyanam paniko nu solren, Seiviya✨? Klingg Klingg Klinnggg😂",
    unName: "Monica S",
    unVayasu: "25",
    unAddress: "Vaddakiii",
    unChellaPergal:
      "Bujuku, Booshu, Boomchu, Darmlinguuu, Gundulu, Dooma, Panda, add if you want..",
    unConfirmation: "",
  });
  const [pdfValue, setPdfValue] = useState(<></>);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  useEffect(() => {
    setPdfValue(
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: "80%",
          margin: "auto",
        }}
      >
        <h1>Vanga thambee, agreemendu la sign ah poteenga! Nallathu!!</h1>
        <h3>En Affirmation:</h3>
        <p>
          Athavathu nga, Vikram S ennum naan, Monica S ennum pennai march past
          la pathu, pesi, crct panni, oor suthi, clg suthi, theatre lam poi,
          pidchi poi ippo aalu, bf, gf, pondati, valkai partner aga etrukolgiren
          endru therivikiren!
        </p>
        <h3>Un Affirmation:</h3>
        <p>Monica S ennum naan Monica V aga oppu kolgiren😂?</p>
        {formValues.unConfirmation}
        <h3>
          Mana poorvamaga agreemendu potutom!<br></br>1st year sirpaga
          mudinthathu, adutha varsham paklamaaa.. varta mame durrrrr!<br></br>
          <br></br>
          VM🧡
        </h3>
      </div>
    );
  }, [formValues.unConfirmation]);

  const handleSubmit = async () => {
    const input = document.getElementById("pdf-content");
    if (input) {
      const canvas = await html2canvas(input, {
        useCORS: true,
        scale: 2,
      });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("VM-Agreement.pdf");
    }
    setDone(true);
  };

  //   CSS
  const textFieldStyles = {
    InputLabelProps: {
      sx: { fontFamily: "Sour Gummy, sans-serif" },
    },
    InputProps: {
      sx: { fontFamily: "Sour Gummy, sans-serif" },
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px",
        height: "100%",
      }}
    >
      <Container maxWidth="md">
        <Box component="form" noValidate autoComplete="off" sx={{ mt: 4 }}>
          <Box
            container
            spacing={3}
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
              },
              gap: "20px",
            }}
          >
            <Box item xs={12} sm={6}>
              <TextField
                fullWidth
                label="En Peru"
                name="enPeru"
                variant="outlined"
                margin="normal"
                {...textFieldStyles}
                value={formValues.enPeru}
                // onChange={handleChange}
              />
              <TextField
                fullWidth
                label="En Vayasu"
                name="enVayasu"
                variant="outlined"
                margin="normal"
                {...textFieldStyles}
                value={formValues.enVayasu}
                // onChange={handleChange}
              />
              <TextField
                fullWidth
                label="En Address"
                name="enAddress"
                variant="outlined"
                margin="normal"
                {...textFieldStyles}
                value={formValues.enAddress}
                // onChange={handleChange}
              />
              <TextField
                fullWidth
                label="En Chella Pergal"
                name="enChellaPergal"
                variant="outlined"
                margin="normal"
                {...textFieldStyles}
                value={formValues.enChellaPergal}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="En Affirmation!"
                name="enConfirmation"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                {...textFieldStyles}
                value={formValues.enConfirmation}
                // onChange={handleChange}
              />
            </Box>
            <Box item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Ungal Per"
                name="unName"
                variant="outlined"
                margin="normal"
                {...textFieldStyles}
                value={formValues.unName}
                // onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Ungal Vayasu"
                name="unVayasu"
                variant="outlined"
                margin="normal"
                {...textFieldStyles}
                value={formValues.unVayasu}
                // onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Ungal Address"
                name="unAddress"
                variant="outlined"
                margin="normal"
                {...textFieldStyles}
                value={formValues.unAddress}
                // onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Ungal Chella Pergal"
                name="unChellaPergal"
                variant="outlined"
                margin="normal"
                {...textFieldStyles}
                value={formValues.unChellaPergal}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Ungal Confirmation???"
                name="unConfirmation"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                {...textFieldStyles}
                value={formValues.unConfirmation}
                onChange={handleChange}
                placeholder="Ethachum eluthi vudu 🥲"
              />
            </Box>
          </Box>
          <Box sx={{ mt: 4, textAlign: "center" }}>
            <CustomButton
              onClick={handleSubmit}
              disabled={formValues.unConfirmation.length < 40 ? true : false}
            >
              {formValues.unConfirmation.length < 40
                ? "Konjom extra eluthu da🙂"
                : "Aan ipo podra Sign ah!"}
            </CustomButton>
          </Box>
        </Box>
      </Container>
      <br></br>
      <br></br>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 600,
          margin: "auto",
        }}
      >
        <Box
          sx={{
            width: "100%",
            position: "absolute",
            height: "100%",
            opacity: 1,
            zIndex: 3,
            background: "#fff",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <CustomTypography
            sx={{ padding: "0 30px 30px", textAlign: "center" }}
          >
            {done
              ? "Shoooppparr Daa boomchu!"
              : "Yen, Ethuku lam qusetion kekama.. form a filling panni sumbit pannunga boomchu!"}
          </CustomTypography>{" "}
          <img
            src={done ? ShakingHands : Signature}
            alt="Overlay"
            style={{
              width: "90%",
            }}
          />
        </Box>

        <Box
          id="pdf-content"
          sx={{
            position: "relative",
            zIndex: 2,
            background: "rgba(255, 255, 255, 0.8)",
            padding: 2,
            textAlign: "center",
          }}
        >
          {pdfValue}
        </Box>
      </Box>
    </Box>
  );
}

export default Description6;
