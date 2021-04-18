import { MenuConfig } from "../components/SiderMenu";
import { UserOutlined, LaptopOutlined } from "@ant-design/icons";

export const SiderMenuConfig: MenuConfig[] = [
  {
    title: "Pages",
    icon: <LaptopOutlined />,
    subMenus: [
      {
        path: "/privacy",
        title: "Privacy",
      },
      {
        path: "/sitemap",
        title: "Sitemap",
      },
    ],
  },
  {
    title: "Users",
    icon: <UserOutlined />,
    subMenus: [
      {
        path: "/users",
        title: "All Users",
      },
      {
        path: "/users/1",
        title: "User 1",
      },
      {
        path: "/users/2",
        title: "User 2",
      },
    ],
  },
];
