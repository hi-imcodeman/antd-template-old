import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about" children={<About />} />
      <Route
        path="/users/:id?"
        render={({ match }) => match.params.id ? <h1>User {match.params.id}</h1> : <h1>All Users</h1>}
      />
      <Route path="*"><h1>404 - Not Found</h1></Route>
    </Switch>
  );
};
