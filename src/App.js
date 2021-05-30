import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Home = React.lazy(() => import("./components/Home"));
const MovieListingPage = React.lazy(() => import("./components/MovieListingPage"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <img
        src={`../images/nav_bar.png`}
        alt=""
        loading="lazy"
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
      </Suspense>
    </div>
  );
};

export default App;
