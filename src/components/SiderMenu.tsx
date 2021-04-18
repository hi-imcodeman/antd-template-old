import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";

const { SubMenu } = Menu;

export interface SubMenuConfig {
  path: string;
  title: string;
}

export interface MenuConfig {
  title: string;
  icon: JSX.Element;
  subMenus:SubMenuConfig[]
}

export interface SiderMenuProps{
  menuItems:MenuConfig[]
}

export const SiderMenu: FC<SiderMenuProps> = (props) => {
  const {menuItems} = props;
  const { pathname } = useLocation();
  let openMenu:string[] = [];
  let activeSubMenu:string[] = [];
  const menuList = menuItems.map((menu, menuKey) => {
    return (
      <SubMenu key={`menu${menuKey}`} icon={menu.icon} title={menu.title}>
        {menu.subMenus.map((subMenu, subMenuKey) => {
          if (pathname === subMenu.path) {
            openMenu = [`menu${menuKey}`];
            activeSubMenu = [`menu${menuKey}-sub${subMenuKey}`];
          }
          return (
            <Menu.Item key={`menu${menuKey}-sub${subMenuKey}`}>
              <Link to={subMenu.path}>{subMenu.title}</Link>
            </Menu.Item>
          );
        })}
      </SubMenu>
    );
  });
  return (
    <Menu
      mode="inline"
      theme='dark'
      defaultOpenKeys={openMenu}
      defaultSelectedKeys={activeSubMenu}
      style={{ height: "100%", borderRight: 0 }}
    >
      {menuList}
    </Menu>
  );
};
