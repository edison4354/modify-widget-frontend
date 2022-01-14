import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages";
import Form from "./components/common/Form";
import DashBoardPage from "./pages/dashboard.js";
import NewWidgetPage from "./pages/createWidget.js"
import { app } from "./firebase-config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAction = (id) => {
    const authentication = getAuth();

    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate("/dashboard");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            toast.error("Please check the Password");
          }
          if (error.code === "auth/user-not-found") {
            toast.error("Please check the Email");
          }
        });
    }

    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate("/dashboard");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            toast.error("Email Already in Use");
          }
        });
    }
  };

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/dashboard/new-widget" element={<NewWidgetPage />} />
        <Route
          path="/login"
          element={
            <Form
              title="Login"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(1)}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Form
              title="Register"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(2)}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
