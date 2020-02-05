import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Items from "../pages/Items";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Share from "../pages/Share";
import Navigation from "../components/Navigation";

export default () => (
  <Fragment>
    {window.location.pathname !== "/home" ? <Navigation location /> : ""}
    <Switch>
      <Route exact path="/items" component={Items} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/profile/:userid" component={Profile} />
      <Route exact path="/share" component={Share} />
      <Redirect from="*" to="/profile" />

      {/**
       * Later, we'll add logic to send users to one set of routes if they're logged in,
       * or only view the /welcome page if they are not.
       */}
    </Switch>
  </Fragment>
);
