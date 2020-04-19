import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

require("dotenv").config();

ReactDOM.render(<App />, document.getElementById("root"));

console.log(process.env.REACT_APP_YT_API);