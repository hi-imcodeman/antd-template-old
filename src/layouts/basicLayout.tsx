import { FC } from "react";
import { Routes } from "../routes";
import { Layout } from "antd";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { HeaderMenu } from "../components/HeaderMenu";
import { HeaderMenuConfig } from "../config/HeaderMenu";
import '../styles/less/basicLayout.less'

const { Header, Content, Footer } = Layout;

export const BasicLayout: FC = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <HeaderMenu navLinks={HeaderMenuConfig} />
      </Header>
      <Content className="site-layout-content" style={{ padding: "0 50px" }}>
        <Breadcrumbs />
        <Routes />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};
