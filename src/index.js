import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PaginatedProjectsList from "./PaginatedProjectsList";
import ThemeSwitcher from "./ThemeSwitcher";

const projects_list = ReactDOM.createRoot(
    document.querySelector("#projects_list")
);
projects_list.render(<PaginatedProjectsList itemsPerPage={6} />);

const theme_switcher = ReactDOM.createRoot(
    document.querySelector("#theme_switcher")
);
theme_switcher.render(<ThemeSwitcher />);
