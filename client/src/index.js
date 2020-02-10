import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";

import registerServiceWorker from "./registerServiceWorker";
import theme from "./theme";
import client from "./apollo";
import AppRoutes from "./routes";

import ItemPreviewProvider from "./context/ItemPreviewProvider";
import ViewerProvider from "./context/ViewerProvider";

import "./index.css";

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <ItemPreviewProvider>
          <ViewerProvider>
            <Router>
              <AppRoutes />
            </Router>
          </ViewerProvider>
        </ItemPreviewProvider>
      </ApolloProvider>
    </MuiThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
