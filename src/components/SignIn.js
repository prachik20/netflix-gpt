import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isFormValid, setIsFormValid] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSetSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleValidation = () => {
    const FullName = !isSignIn ? name.current.value : "Default";
    const message = checkValidData(
      FullName,
      email.current.value,
      password.current.value
    );
    setIsFormValid(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/ed364e5c-e3d7-4631-baa4-3fb3052492b2/FR-en-20240827-TRIFECTA-perspective_WEB_961e038d-bdc8-486e-a174-2b23391fdb25_large.jpg"
          alt="bg image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-10 my-32 bg-black w-3/12 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-sm"
      >
        <h1 className="font-bold my-2 p-2 text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 rounded-sm w-full bg-transparent border border-white border-opacity-40"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-3 my-3 rounded-sm w-full bg-transparent border border-white border-opacity-40"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-3 rounded-sm w-full bg-transparent border border-white border-opacity-40"
        />
        <p className="text-sm text-red-600">{isFormValid}</p>
        <button
          className="p-2 my-6 bg-red-600 rounded-sm w-full"
          onClick={handleValidation}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn ? (
          <p className="my-2">
            New to Netflix?{" "}
            <span
              className="font-bold cursor-pointer"
              onClick={handleSetSignIn}
            >
              Sign Up now
            </span>
          </p>
        ) : (
          <p className="my-2">
            Already a user?{" "}
            <span
              className="font-bold cursor-pointer"
              onClick={handleSetSignIn}
            >
              Sign In
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default SignIn;
