import React from "react";
import { BrowserRouter } from "react-router-dom";

// Custom Components
import NavbarC from "./components/NavBarC";
import CarouselC from "./components/CarouselC";
import BookSearch from "./components/BookSearch";
import Results from "./components/Results";


// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <BrowserRouter>
    <div>
        <NavbarC />
        <CarouselC />
        <BookSearch />
        <Results />
    </div>
    </BrowserRouter>
  );
}

export default App;
