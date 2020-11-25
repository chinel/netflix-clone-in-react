import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signup, Signin } from "./pages";
import { IsUserRedirect } from "./helpers/routes";

export default function App() {
  const user = {};

  return (
    <Router>
      <Route exact path={ROUTES.SIGN_IN}>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <Signin />
        </IsUserRedirect>
      </Route>
      <Route>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
        >
          <Signup />
        </IsUserRedirect>
      </Route>

      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>

      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}
