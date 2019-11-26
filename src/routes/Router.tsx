import React, { FC } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "../pages/home/components/Home";
import NotFoundPage from "../pages/_misc/components/NotFoundPage";
import Creates from "../pages/_misc/components/Creations";

export const history = createBrowserHistory();

const AppRouter: FC = (): JSX.Element => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/creates" component={Creates} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
