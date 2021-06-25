import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loading from "./components/Loading";
import {  useDispatch } from "react-redux";

import { getDataFromApi } from "./Service";
import { characterPopulate } from "./store/actions/character";
import Styles from "./screens/Styles";

const Home = lazy(() => import("./screens/Home"));
const Details = lazy(() => import("./screens/Details"));

const App = () => {
const dispatch = useDispatch()
  useEffect(()=>{
    const requestDataFromApi = async () => {
      const dataJson = await getDataFromApi()
      console.log(dataJson)
      dispatch(characterPopulate(dataJson))
    }
    requestDataFromApi()
},[])
  return (
      <BrowserRouter basename={"/"}>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path={"/"} exact={true} component={Home} />
          </Switch>
          <Switch>
            <Route path={"/detalhe"} exact={true} component={Details} />
          </Switch>
          <Switch>
            <Route path={"/estilo"} exact={true} component={Styles} />
          </Switch>
        </Suspense>
      </BrowserRouter>
  );
};

export default App;
