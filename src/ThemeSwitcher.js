import React, { useState, useEffect, useCallback } from "react";

function ThemeSwitcher() {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const [isDarkMode, setIsDarkMode] = useState(mediaQuery.matches);

    // Wrap updateTheme in useCallback to memoize it
    const updateTheme = useCallback(() => {
        const colorMode = isDarkMode ? "dark" : "light";
        document.querySelector("html").setAttribute("data-bs-theme", colorMode);

        // Apply dark mode class if needed
        document.documentElement.classList.toggle("dark-mode", isDarkMode);
    }, [isDarkMode]);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
    };

    // Set theme on load
    useEffect(() => {
        updateTheme();
    }, [isDarkMode, updateTheme]);

    // Update theme when the preferred scheme changes
    useEffect(() => {
        const listener = () => {
            setIsDarkMode(mediaQuery.matches);
            updateTheme();
        };

        mediaQuery.addEventListener("change", listener);

        return () => {
            mediaQuery.removeEventListener("change", listener);
        };
    }, [mediaQuery, updateTheme]);

    return (
        <div>
            {/* Toggle button */}
            {isDarkMode ? (
                <button className="btn btn-light" onClick={toggleDarkMode}>
                    <i className="fas fa-sun"></i>
                </button>
            ) : (
                <button className="btn btn-dark" onClick={toggleDarkMode}>
                    <i className="fas fa-moon"></i>
                </button>
            )}
        </div>
    );
}

export default ThemeSwitcher;
