/* eslint-disable */
import React, { useState } from "react";
import { logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { Link } from "react-router-dom";
import bg from "./assets/login-left.jpg";
import glogo from "./assets/google.svg";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div
      className="flex flex-row bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-3/5 h-screen bg-yellow-300/75"></div>
      <div className="grid place-items-center w-2/5 bg-white"></div>
    </div>
  );
}

export default Login;
