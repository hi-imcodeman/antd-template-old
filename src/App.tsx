import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BasicLayout } from "./layouts/basicLayout";
import { Login } from './pages/Login'
import "./styles/less/App.less";

export const App: FC = () => (
  <Router>
    <Switch>
      <Route path='/login' exact children={<Login/>}/>
      <Route path='*' children={<BasicLayout />}/>
    </Switch>
  </Router>
);
