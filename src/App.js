import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loading from "./components/Loading";
import { Provider } from "react-redux";
import { configureStore } from "./store/reducers/index";

const Home = lazy(() => import("./screens/Home"));
const Details = lazy(() => import("./screens/Details"));

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename={"/"}>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path={"/"} exact={true} component={Home} />
          </Switch>
          <Switch>
            <Route path={"/details"} exact={true} component={Details} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
