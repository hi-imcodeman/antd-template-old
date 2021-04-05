import React, { FC } from "react";
import { Button } from "antd";
import "./less/App.less";

export const App: FC = () => (
  <div className="App">
    <Button type="primary">Button</Button>
    <span>Hello</span>
  </div>
);
