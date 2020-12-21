import React from "react";
import { render } from "@testing-library/react";
import { Browse } from "../../pages";
import { FirebaseContext } from "../../context/firebase";
import selectionFilter from "../../utils/selection-filter";

jest.mock("react-router-dom", () => ({
  Link: "Link",
}));

jest.mock("../../utils/selection-filter", () => ({
  __esModule: true, // this property makes it work
  default: () => ({
    series: [
      {
        title: "Documentaries",
        data: [
          {
            id: "series-1x",
            title: "Tiger King",
            description:
              "An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.",
            genre: "documentaries",
            maturity: "18",
            slug: "tiger-king",
          },
        ],
      },
    ],
    films: [
      {
        title: "Suspense",
        data: [
          {
            id: "film-1x",
            title: "Amanda Knox",
            description:
              "Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.",
            genre: "documentaries",
            maturity: "12",
            slug: "amanda-knox",
          },
        ],
      },
    ],
  }),
}));

const firebase = {};
Object.defineProperty(firebase, "auth", {
  value: () => ({
    currentUser: {
      photoURL: "/images/user.png",
      displayName: "Nelly",
    },
  }),
});

Object.defineProperty(firebase, "firestore", {
  value: () => ({
    collection: jest.fn(() => ({
      get: jest.fn(() => Promise.resolve("I get content!")),
      add: jest.fn(() => Promise.resolve("I add content!")),
    })),
  }),
});

describe("Browse page", () => {
  it("renders the browse page with some data", () => {
    const { container } = render(
      <FirebaseContext.Provider value={{ firebase }}>
        <Browse />
      </FirebaseContext.Provider>
    );
  });
});
