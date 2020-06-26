import React, {useEffect, lazy, Suspense} from "react";
import {Redirect, Switch, Route} from "react-router-dom";
import {useSelector} from "react-redux";

import Spin from "antd/es/spin";
import "./App.css";
import {useLocation, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import Products from "./productList";
const PageLayout = lazy(() => import("./components/pages"));

export function PrivateRoute({children, ...rest}) {
  const isAuthenticated = false;
  return (
    <Route
      {...rest}
      render={({location}) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/chaldal",
              state: {from: location}
            }}
          />
        )
      }
    />
  );
}

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.appState.products);
  useEffect(() => {
    dispatch({type: "LOADED_ALL_PRODUCTS", payload: Products});
  }, []);
  return (
    <div className="Apps h-100">
      <Suspense
        fallback={
          <div className="spinner-container">
            <Spin size="large" />
          </div>
        }
      >
        <Switch>
          <Route exact path={"/chaldal"}>
            <PageLayout />
          </Route>

          <PrivateRoute path="/">
            <PageLayout></PageLayout>
          </PrivateRoute>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
