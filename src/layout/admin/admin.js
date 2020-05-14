import React from 'react'
import './admin.css'
import {Link} from 'react-router-dom'

import { Layout, Menu, Breadcrumb } from 'antd';
import { VideoCameraOutlined, HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Admin({children}) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" > </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <SubMenu
            key="sub1"
            title={
              <span>
                <UserOutlined />
                <span>List</span>
              </span>
            }
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <Menu.Item key="1">
            <UserOutlined />
            <span className="nav-text"><Link to="/users">Users</Link></span>
          </Menu.Item>
          <Menu.Item key="2">
            <VideoCameraOutlined />
            <span className="nav-text"><Link to="/list">List</Link></span>
          </Menu.Item>
          <SubMenu
            key="sub2"
            title={
              <span>
                <SettingOutlined />
                <span>Setting</span>
              </span>
            }
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24 }}>
            <Breadcrumb>
              <Breadcrumb.Item href="">
                <HomeOutlined />
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">
                <UserOutlined />
                <span>Application List</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Application</Breadcrumb.Item>
            </Breadcrumb>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default Admin
