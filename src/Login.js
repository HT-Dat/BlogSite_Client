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
      <div className="grid place-items-center w-2/5 bg-white">
        <div className="w-2/3">
          <div>
            <div className="text-2xl font-bold">Welcome Back!</div>
            <div className="text-gray-600 pt-2 text">
              Please sign in to your account
            </div>
          </div>
          <div className="grid place-items-start pt-10">
            <div className="w-full bg-gradient-to-t from-black/25 via-transparent rounded-full h-12 p-px">
              <input
                type="text"
                className="w-full h-full border-none rounded-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail Address"
              />
            </div>
          </div>
          <div className="grid place-items-start mt-5">
            <div className="w-full bg-gradient-to-t from-black/25 via-transparent rounded-full h-12 p-px">
              <input
                type="password"
                className="w-full h-full border-none rounded-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex justify-between pt-3">
            <div className="flex justify-start gap-3">
              <input
                type="checkbox"
                className="place-self-center rounded text-yellow-500 form-checkbox"
              ></input>
              <div>Remember me</div>
            </div>
            <div>
              <Link to="/reset">Forgot your password?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
