import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// @TODO: Uncomment each module as needed in your client app
// import { ApolloProvider } from 'react-apollo'
// import { BrowserRouter } from 'react-router-dom'
// -------------------------------

import registerServiceWorker from "./registerServiceWorker";
import theme from "./theme";

/**
 * @TODO: Initialize Apollo Client
 *
 * Uncomment the following line when Apollo Client is configured:
 *
 * import client from './apollo'
 *
 * Below in your <App />, wrap your pages in an <ApolloProvider /> component
 * and pass it `client` as the `client` prop value so they will
 * have access to data exposed by your GraphQL API.
 */

/**
 * @TODO: Add Routing
 *
 * Uncomment the following line when your routes are configured
 *
 * import AppRoutes from './routes'
 *
 * Below in your <App />, nest your <AppRoutes /> inside of <BrowserRouter />
 * component to enable routing in your client app.
 */

/**
 * @TODO: Wrap your app with the Item Preview Provider
 *
 * import ItemPreviewProvider from './context/ItemPreviewProvider'
 *
 * Wrap this component around your app to access Item Preview Context API.
 */

/**
 * @TODO: Wrap your app with the Viewer Context
 *
 * import ViewerProvider from './context/ViewerProvider'
 *
 * Below in your <App />, wrap the <ViewerProvider /> component around
 * the <BrowserRouter /> component so the router is aware of whether a
 * user is currently logged in and who that user is.
 */

// @TODO: Remove this import once you have your router working below
import Home from "./pages/Home";
// -------------------------------

import "./index.css";

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </MuiThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
