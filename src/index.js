import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ProjectsList from "./ProjectsList";

var data = require("./data.json");

const root = ReactDOM.createRoot(document.querySelector("#projects_list"));
root.render(<ProjectsList data={data} />);
