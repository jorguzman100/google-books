import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarC from "./components/NavBarC";
import CarouselC from "./components/CarouselC";
import Search from "./pages/Search";
import Save from "./pages/Save";
import "./App.css";

const THEME_STORAGE_KEY = "google_books_theme";

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }

  return "light";
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  return (
    <BrowserRouter>
      <div className={`app-shell theme-${theme}`}>
        <div className="app-glow app-glow-left" />
        <div className="app-glow app-glow-right" />
        <NavbarC
          theme={theme}
          onToggleTheme={toggleTheme}
          toggleLabel={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        />
        <main className="app-content">
          <CarouselC />
          <Switch>
            <Route exact path={["/", "/home", "/Search"]} component={Search} />
            <Route exact path="/Save" component={Save} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
