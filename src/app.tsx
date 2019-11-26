import "core-js/stable";
import "regenerator-runtime/runtime";
import React, { FC, useState } from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routes/Router";
// import NavBar from "./pages/nav/NavBar";
import "bootstrap-css-only/css/bootstrap.min.css";
import "./scss/styles.scss";

/**
 * ? Optional Redux DevTools ?
 * declare global {
 * interface Window {
 *  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
 *   }
 * }
 */

const App: FC = (): JSX.Element => {
  const [active, setActive] = useState("home");
  return (
    <div id="app">
      {/* <NavBar active={active} setActive={setActive} /> */}
      <AppRouter />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
