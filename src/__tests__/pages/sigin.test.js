import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
//because we will be handling asynchronous code we will be importing the below act from react-dom/test-utils
import { act } from "react-dom/test-utils";
import { FirebaseContext } from "../../context/firebase";

//mock the react router dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => {},
}));

//mocking firebase
const firebase = { 
    auth: jest.fn(() => ({
        signInWithEmailAndPassword: jest.fn(() => Promise.resolve('I am signed in'))
    }))
 };
