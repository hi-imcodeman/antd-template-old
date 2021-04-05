import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, About } from "../pages";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about" children={<About />} />
      <Route
        path="/user/:id?"
        render={({ match }) => <h1>User {match.params.id}</h1>}
      />
    </Switch>
  );
};
