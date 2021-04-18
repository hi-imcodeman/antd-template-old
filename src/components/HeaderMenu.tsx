import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";

export interface HeaderNavLink {
  path: string;
  title: string;
}

export interface HeaderMenuProps {
  navLinks: HeaderNavLink[];
}

export const HeaderMenu: FC<HeaderMenuProps> = (props) => {
  const { pathname } = useLocation();
  const {navLinks} = props;
  let activeKey:number[] = [];
  navLinks.forEach((item, i) => {
    if (item.path === pathname) activeKey = [i];
  });
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[`${activeKey}`]}>
      {navLinks.map((item, i) => (
        <Menu.Item key={i}>
          <Link to={item.path}>{item.title}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};
