import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch,Route } from "react-router-dom";

import Loading from "./components/Loading";
const Home = lazy(() => import("./screens/Home"));
const Details = lazy(() => import("./screens/Details"));

const App = () => {
  return (
        <BrowserRouter basename={'/'}>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route
                path={'/'}
                exact={true}
                component={Home}
              />
              </Switch>
            <Switch>
              <Route
                path={'/details'}
                exact={true}
                component={Details}
              />
              
            </Switch>
          </Suspense>
        </BrowserRouter>
  );
};

export default App;
