import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { client, darkModeVar, isLoggedInVar } from "./apollo";
import Layout from "./components/Layout";
import Home from "./screens/public/Home";
import Data from "./screens/data/Data";
import NotFound from "./screens/NotFound";
import routes from "./screens/routes";
import SignUp from "./screens/auth/SignUp";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";
import NutrientUpdate from "./screens/data/NutrientUpdate";
import Login from "./screens/auth/Login";
import Category from "./screens/public/shop/Category";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <GlobalStyles />
          <Router>
            <Switch>
              <Route path={routes.data} exact>
                <Data></Data>
              </Route>
              <Route path={routes.nutrientUpdate} exact>
                <NutrientUpdate></NutrientUpdate>
              </Route>
              <Route path={routes.home} exact>
                <Layout>
                  <Home></Home>
                </Layout>

                {/* {isLoggedIn ? (
                  <Layout>
                    <Home></Home>
                  </Layout>
                ) : (
                  <Login />
                )} */}
              </Route>
              <Route path={routes.category}>
                <Layout>
                  <Category></Category>
                </Layout>
              </Route>

              {!isLoggedIn ? (
                <Route path={routes.signUp}>
                  <SignUp />
                </Route>
              ) : null}

              <Route>
                <NotFound></NotFound>
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </HelmetProvider>
    </ApolloProvider>
  );
}

export default App;
