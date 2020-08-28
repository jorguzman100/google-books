import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Custom Components
import NavbarC from "./components/NavBarC";
import Search from './pages/Search';


// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <div>
      <NavbarC />
      <BrowserRouter>
        <Route exact path={['/', '/Search']} component={Search} />
      </BrowserRouter>
    </div>
  );
}

export default App;
