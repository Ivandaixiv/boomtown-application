import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Items from "../pages/Items";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Share from "../pages/Share";
import Navigation from "../components/Navigation";
import { ViewerContext } from "../context/ViewerProvider";
import PrivateRoute from "../components/PrivateRoute";
import FullSreenLoader from "../components/FullScreenLoader";

export default () => (
  <ViewerContext.Consumer>
    {({ viewer, loading }) => {
      if (loading) return <FullSreenLoader />;

      if (!viewer) {
        return (
          <Switch>
            <Route exact path="/home" name="home" component={Home} />
            <Redirect from="*" to="/home" />
          </Switch>
        );
      }
      return (
        <Fragment>
          <Navigation />
          <Switch>
            <PrivateRoute exact path="/items" component={Items} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/profile/:userid" component={Profile} />
            <PrivateRoute exact path="/share" component={Share} />
            <Redirect from="*" to="/items" />

            {/**
             * Later, we'll add logic to send users to one set of routes if they're logged in,
             * or only view the /welcome page if they are not.
             */}
          </Switch>
        </Fragment>
      );
    }}
  </ViewerContext.Consumer>
);
