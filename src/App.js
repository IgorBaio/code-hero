import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loading from "./components/Loading";
import {  useDispatch } from "react-redux";

import { getDataFromApi } from "./Service";
// import { useDispatch } from "react-redux";
import { characterPopulate } from "./store/actions/character";


const Home = lazy(() => import("./screens/Home"));
const Details = lazy(() => import("./screens/Details"));



const App = () => {
const dispatch = useDispatch()
  useEffect(()=>{
    const teste = async () => {
      const dataJson = await getDataFromApi()
      console.log(dataJson)
      dispatch(characterPopulate(dataJson))
    }
    teste()
},[])
  return (
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
  );
};

export default App;
