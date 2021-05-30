import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import MovieListingPage from "./components/MovieListingPage";

const App = () => {
  return (
    <div>
      <img
        src={`../images/nav_bar.png`}
        alt=""
        className="w-full sticky top-0 h-24"
      />

      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/:title" exact={true} component={MovieListingPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
