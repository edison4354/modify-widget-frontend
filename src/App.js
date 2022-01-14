import React, { useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages";
import Form from "./components/common/Form";
import DashBoardPage from "./pages/dashboard.js";
import { app } from "./firebase-config";
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

    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password).then(
        (response) => {
          navigate('/dashboard')
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        }
      );
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/dashboard" element={<DashBoardPage />} />
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
