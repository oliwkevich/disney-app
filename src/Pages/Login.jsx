import React from "react";
import { db } from "../Fi/firebase.js";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const SignInWithFirebase = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(db, provider)
      .then((re) => {
        const TokenAPI = re.user.accessToken;
        localStorage.setItem("TokenAPI", TokenAPI);
        if (TokenAPI) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="absolute top-[30%] left-[25%] md:left-[45%] my-32">
      <button
        className="auth-btn flex m-2"
        onClick={SignInWithFirebase}
      >
        Sign with Google
      </button>
    </div>
  );
};
