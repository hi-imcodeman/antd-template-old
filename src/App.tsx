import { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MainLayout } from "./layouts";
import "./styles/less/App.less";

export const App: FC = () => (
  <Router>
    <MainLayout />
  </Router>
);
