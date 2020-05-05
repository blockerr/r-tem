import  React  from 'react'
import './admin.css'
import { NavLink, useHistory } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Avatar } from 'antd';
import auth from '../../helpers/auth'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function Admin({ children }) {
  const history = useHistory();
  const path = children.props.location.pathname;
  const logout = () => {
    auth.logout();
    history.push('/login');
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider className="_slider"
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
        <Menu className="_menu" theme="dark" mode="inline" defaultSelectedKeys={path}>
          <Menu.Item key="/admin/home">
            <NavLink to="/admin/home" className="nav-text"><i className="fa fa-home _menu-icon" aria-hidden="true"></i>Trang chủ</NavLink>
          </Menu.Item>
          <Menu.Item key="/admin/investor">
            <NavLink to="/admin/investor" className="nav-text"><i className="fa fa-home _menu-icon" aria-hidden="true"></i> Nhà đầu tư</NavLink>
          </Menu.Item>
          <Menu.Item key="/admin/employee">
            <NavLink to="/admin/employee" className="nav-text"><i className="fa fa-users _menu-icon" /> Nhân viên</NavLink>
          </Menu.Item>
          <Menu.Item key="/admin/map">
            <NavLink to="/admin/map" className="nav-text"><i className="fa fa-picture-o _menu-icon" aria-hidden="true"></i> Sơ đồ phân lô</NavLink>
          </Menu.Item>
          <Menu.Item key="/admin/camera">
            <NavLink to="/admin/camera" className="nav-text"><i className="fa fa-video-camera _menu-icon" aria-hidden="true"></i> Camera</NavLink>
          </Menu.Item>
          <SubMenu key="setting" icon={<i className="fa fa-cogs _menu-icon" aria-hidden="true"></i>} title="Cài đặt">
            {/* <Menu.Item key="4" onClick={() => auth.logout(() => {history.push('/login')})} > <i className="fa fa-sign-out _menu-icon" aria-hidden="true"></i> Đăng xuất</Menu.Item> */}
            <Menu.Item key="4" onClick={logout} > <i className="fa fa-sign-out _menu-icon" aria-hidden="true"></i> Đăng xuất</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0, backgroundColor: '#001529' }}>
          <div className="_avatar-box">
            <Avatar className="_avatar" size='large' icon={<UserOutlined />} />
          </div>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: '100%' }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Layout footer</Footer>
      </Layout>
    </Layout>
  )
}

export default Admin
