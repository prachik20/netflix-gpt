import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG } from "../utils/constants";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isErrorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

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
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: null,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover" src={BG_IMG} alt="bg image" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-10 my-32 bg-black w-full md:w-3/12 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-sm"
      >
        <h1 className="font-bold my-2 p-2 text-2xl md:text-3xl">
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
        <p className="text-sm text-red-600">
          {" "}
          {/* <img className="text-red-600" src="https://cdn-icons-png.flaticon.com/128/2198/2198359.png" /> */}
          {isErrorMessage}
        </p>
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
