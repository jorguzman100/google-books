import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Custom Components
import NavbarC from "./components/NavBarC";
import CarouselC from './components/CarouselC';
import Search from './pages/Search';


// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarC />
        <CarouselC />
        <Route exact path={['/', '/home', '/Search']} component={Search} />
      </BrowserRouter>
    </div>
  );
}

export default App;
