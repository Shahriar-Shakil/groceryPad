import React from "react";
import {Layout, Menu, Breadcrumb} from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined
} from "@ant-design/icons";
import PageHeader from "../header/index";
import LandingBanner from "./../landingBanner/index";
import ProductCategories from "./../productCategories/index";
const {Content, Header, Sider} = Layout;
const {SubMenu} = Menu;

const PageLayout = () => {
  return (
    <Layout className="content h-100">
      <PageHeader />

      <Layout>
        <Sider collapsible>
          <div className="logo" />
          <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} />
          </Menu>
        </Sider>

        <Content className="bg-white overflow-hidden h-100 position-relative">
          <LandingBanner />
          <ProductCategories />
        </Content>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
