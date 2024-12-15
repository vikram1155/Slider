import { Box } from "@mui/material";
import "./App.css";
import Loader from "./components/Loader";
import HomePage from "./components/HomePage";
import Description1 from "./components/Description1";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Description2 from "./components/Description2";
import Description3 from "./components/Description3";
import Description4 from "./components/Description4";
import Description5 from "./components/Description5";
import PasswordCheck from "./components/PasswordCheck";
import Description6 from "./components/Description6";

function Layout({ children }) {
  return (
    <Box
      sx={{
        margin: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 60px)",
        boxSizing: "border-box",
      }}
    >
      {children}
    </Box>
  );
}

const ProtectedRoute = ({ children, passwordCheck }) => {
  const passwordEnteredFromLocal = localStorage.getItem("password");
  // Redirect to '/' or '/fbi-open-up' if the user isn't authenticated
  if (passwordEnteredFromLocal !== "VM070999") {
    return (
      <Navigate
        to={
          "/"
          // passwordCheck === "no" ? "/" : "/fbi-open-up"
        }
        replace
      />
    );
  }

  // Render children if authenticated
  return children;
};

function App() {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 6000);
  }, []);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [passwordEntered, setPasswordEntered] = useState("");

  console.log("a-passwordCheck", passwordCheck);
  return (
    // <Router>
    //   {passwordCheck === "yes" ? (
    //     <Routes>
    //       <Route
    //         path="/vaa-di-booshu"
    //         element={
    //           <Layout>
    //             <HomePage />
    //           </Layout>
    //         }
    //       />
    //       <Route
    //         path="/page1"
    //         element={
    //           <Layout>
    //             <Description1 />
    //           </Layout>
    //         }
    //       />
    //       <Route
    //         path="/aginii-siragee-elunthu-vaaa"
    //         element={
    //           <Layout>
    //             <Description2 />
    //           </Layout>
    //         }
    //       />
    //       <Route
    //         path="/reassurance"
    //         element={
    //           <Layout>
    //             <Description3 />
    //           </Layout>
    //         }
    //       />
    //       <Route
    //         path="/bujukku"
    //         element={
    //           <Layout>
    //             <Description4 />
    //           </Layout>
    //         }
    //       />
    //       <Route
    //         path="/uruttugal"
    //         element={
    //           <Layout>
    //             <Description5 />
    //           </Layout>
    //         }
    //       />
    //     </Routes>
    //   ) : (
    //     <Routes>
    //       <Route
    //         path="/"
    //         element={
    //           <Layout>
    //             <Loader showLoader={showLoader} />
    //           </Layout>
    //         }
    //       />
    //       <Route
    //         path="/fbi-open-up"
    //         element={
    //           <Layout>
    //             <PasswordCheck
    //               passwordCheck={passwordCheck}
    //               setPasswordCheck={setPasswordCheck}
    //               passwordEntered={passwordEntered}
    //               setPasswordEntered={setPasswordEntered}
    //             />
    //           </Layout>
    //         }
    //       />
    //     </Routes>
    //   )}
    // </Router>
    <Router>
      <Routes>
        {/* Routes that are always accessible */}
        <Route
          path="/"
          element={
            <Layout>
              <Loader showLoader={showLoader} />
            </Layout>
          }
        />
        <Route
          path="/fbi-open-up"
          element={
            <Layout>
              <PasswordCheck
                passwordCheck={passwordCheck}
                setPasswordCheck={setPasswordCheck}
                passwordEntered={passwordEntered}
                setPasswordEntered={setPasswordEntered}
              />
            </Layout>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/vaa-di-booshu"
          element={
            <ProtectedRoute passwordCheck={passwordCheck}>
              <Layout>
                <HomePage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/page1"
          element={
            <ProtectedRoute passwordCheck={passwordCheck}>
              <Layout>
                <Description1 />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/aginii-siragee-elunthu-vaaa"
          element={
            <ProtectedRoute passwordCheck={passwordCheck}>
              <Layout>
                <Description2 />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/reassurance"
          element={
            <ProtectedRoute passwordCheck={passwordCheck}>
              <Layout>
                <Description3 />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/bujukku"
          element={
            <ProtectedRoute passwordCheck={passwordCheck}>
              <Layout>
                <Description4 />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/uruttugal"
          element={
            <ProtectedRoute passwordCheck={passwordCheck}>
              <Layout>
                <Description5 />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/agremendu"
          element={
            <ProtectedRoute passwordCheck={passwordCheck}>
              {/* <Layout> */}
              <Description6 />
              {/* </Layout> */}
            </ProtectedRoute>
          }
        />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
