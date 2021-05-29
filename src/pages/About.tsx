import { FC } from "react";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";

export const About: FC = () => {
  console.log('useRouteMatch():',useRouteMatch());
  console.log('useHistory():',useHistory());
  console.log('useLocation():',useLocation());
  return <h1>About Us</h1>;
};
