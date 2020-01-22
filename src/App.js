import React from "react";
import { BrowserRouter as Router, Route,HashRouter } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

export default () => (
  <HashRouter basename={"/cinoid_admin"}>
    <div>
      {routes.map((route, index) => {
        console.log(process.env.REACT_APP_BASENAME)
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  {<route.component {...props} />}
                </route.layout>
              );
            })}
          />
        );
      })}
    </div>
  </HashRouter>
);
