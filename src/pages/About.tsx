import { FC } from "react";
import {useRouteMatch} from 'react-router-dom'

export const About: FC<any> = (props) => {
  console.log(useRouteMatch());
  return <h1>About Us</h1>;
};
