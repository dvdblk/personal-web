import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PaginatedProjectsList from "./PaginatedProjectsList";

const root = ReactDOM.createRoot(document.querySelector("#projects_list"));
root.render(<PaginatedProjectsList itemsPerPage={6} />);
