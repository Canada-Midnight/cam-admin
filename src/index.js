/**
 =========================================================
 * Material Dashboard 2 React - v2.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2022 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faSwatchbook } from "@fortawesome/free-solid-svg-icons";
import App from "./App";
import { GoogleAuthProvider } from "./components/GoogleAuth/googleAuth";

library.add(fab, faSwatchbook, faCoffee, faCheckSquare);

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <GoogleAuthProvider>
        <App />
      </GoogleAuthProvider>
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
