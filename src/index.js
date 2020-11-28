import React from "react";
import ReactDOM from "react-dom";
import { MyBook, Whitespace } from "./components/exercice/exercice";
import { HelloArray, HelloFrogs } from "./components/stuff/stuff";

/**
 * Entry point
 */
const frog = "gay";

ReactDOM.render(
  <React.StrictMode>{frog === "gay" && <div></div>}</React.StrictMode>,
  document.getElementById("root")
);

ReactDOM.render(<Whitespace />, document.querySelector("#root"));
