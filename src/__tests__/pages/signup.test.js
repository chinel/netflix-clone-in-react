import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
//because we will be handling asynchronous code we will be importing the below act from react-dom/test-utils
import { act } from "react-dom/test-utils";
import { FirebaseContext } from "../../context/firebase";
import { Signup } from "../../pages";

//mock the react router dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => {},
}));

//mocking firebase
/* const firebase = {
  auth: jest.fn(() => ({
    signInWithEmailAndPassword: jest.fn((email, password) =>
      Promise.resolve("I am signed in!")
    ),
  })),
}; */

const firebase = {};
Object.defineProperty(firebase, "auth", {
  value: () => ({
    createUserWithEmailAndPassword: jest.fn((email, password) =>
      Promise.resolve({
        user: {
          updateProfile: jest.fn(() => Promise.resolve("I am signed up")),
        },
      })
    ),
  }),
});


describe("<Signup/>", () => {
  it("renders the sign up page with a form submission", async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <Signup />
        </FirebaseContext.Provider>
      </Router>
    );
    await act(async () => {
      await fireEvent.change(getByPlaceholderText("First Name"), {
        target: { value: "nelly" },
      });

      await fireEvent.change(getByPlaceholderText("Email Address"), {
        target: { value: "nelly@gmail.com" },
      });
      await fireEvent.change(getByPlaceholderText("Password"), {
        target: { value: "password" },
      });

      fireEvent.click(queryByTestId("sign-up"));
      expect(getByPlaceholderText("First Name").value).toBe("nelly");
      expect(getByPlaceholderText("Email Address").value).toBe(
        "nelly@gmail.com"
      );
      expect(getByPlaceholderText("Password").value).toBe("password");
      expect(queryByTestId("error")).toBeFalsy();
    });
  });
});
