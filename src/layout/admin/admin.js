import React from 'react'
import './admin.css'
import { NavLink } from 'react-router-dom'

import { Layout, Menu } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

function Admin({ children }) {
  const path = children.props.location.pathname

  return (
    <Layout style={{minHeight:'100vh'}}>
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
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={path}>
          <Menu.Item key="/admin/investor">
            <NavLink to="/admin/investor" className="nav-text"><i class="fa fa-home _menu-icon" aria-hidden="true"></i> Nhà đầu tư</NavLink>
          </Menu.Item>
          <Menu.Item key="/admin/employee">
            <NavLink to="/admin/employee" className="nav-text"><i className="fa fa-users _menu-icon" /> Nhân viên</NavLink>
          </Menu.Item>
          <Menu.Item key="/admin/map">
            <NavLink to="/admin/map" className="nav-text"><i class="fa fa-picture-o _menu-icon" aria-hidden="true"></i> Sơ đồ phân lô</NavLink>
          </Menu.Item>
          <Menu.Item key="/admin/camera">
            <NavLink to="/admin/camera" className="nav-text"><i class="fa fa-video-camera _menu-icon" aria-hidden="true"></i> Camera</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: '100%' }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default Admin
