import { FC } from "react";
import { Routes } from "../routes";
import { Layout } from "antd";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { HeaderMenu } from "../components/HeaderMenu";
import { SiderMenu } from "../components/SiderMenu";
import { HeaderMenuConfig } from "../config/HeaderMenu";
import { SiderMenuConfig } from "../config/SiderMenu";

const { Header, Content, Sider, Footer } = Layout;

export const MainLayout: FC = () => {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <HeaderMenu navLinks={HeaderMenuConfig} />
      </Header>
      <Layout>
        <Sider
          width={200}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            marginTop:'60px'
          }}
        >
          <SiderMenu menuItems={SiderMenuConfig} />
        </Sider>
        <Layout style={{ padding: "0 24px 24px", marginLeft: "200px" ,marginTop:'60px',height:'86vh'}}>
          <Breadcrumbs />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <div style={{backgroundColor:'white',padding:10}}>
              <Routes />
            </div>
          </Content>
        </Layout>
      </Layout>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};
