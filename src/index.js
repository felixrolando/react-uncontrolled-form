import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { FormRegister } from "./screens/FormRegister";

ReactDOM.render(
  <React.StrictMode>
    <FormRegister />
  </React.StrictMode>,
  document.getElementById("root")
);
