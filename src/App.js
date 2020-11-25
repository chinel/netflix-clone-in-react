import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signup, Signin } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

export default function App() {
  const user = {};

  return (
    <Router>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
        exact
      >
        <Signin />
      </IsUserRedirect>

      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
        exact
      >
        <Signup />
      </IsUserRedirect>

      <ProtectedRoute user={user} exact path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>

      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}
