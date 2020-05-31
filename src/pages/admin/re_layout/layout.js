import React from 'react'
import './layout.css'
import {  Button} from 'antd';
function Layout() {
  return (
    <div className="_layout-container">
       <h1 >Giao diện</h1>
       <div className="_layout-carousels">
        <h2 style={{ display: 'inline' }}>Hình ảnh slide</h2>
        <Button style={{ float: 'right', backgroundColor: 'rgba(10,148,153,1)' }} type="primary" 
        //onClick={showDrawerCreate}
        >
          <i className="fa fa-plus _menu-icon" aria-hidden="true"> </i> Tạo mới
        </Button>
      </div>
      <div className="_layout-introduces">
        <h2 style={{ display: 'inline' }}>Giới thiệu</h2>
        <Button style={{ float: 'right', backgroundColor: 'rgba(10,148,153,1)' }} type="primary" 
        //onClick={showDrawerCreate}
        >
          <i className="fa fa-plus _menu-icon" aria-hidden="true"> </i> Tạo mới
        </Button>
      </div>
      <div className="_layout-advantages">
        <h2 style={{ display: 'inline' }}>Lợi thế</h2>
        <Button style={{ float: 'right', backgroundColor: 'rgba(10,148,153,1)' }} type="primary" 
        //onClick={showDrawerCreate}
        >
          <i className="fa fa-plus _menu-icon" aria-hidden="true"> </i> Tạo mới
        </Button>
      </div>
      <div className="_layout-services">
        <h2 style={{ display: 'inline' }}>Dịch vụ tiện ích</h2>
        <Button style={{ float: 'right', backgroundColor: 'rgba(10,148,153,1)' }} type="primary" 
        //onClick={showDrawerCreate}
        >
          <i className="fa fa-plus _menu-icon" aria-hidden="true"> </i> Tạo mới
        </Button>
      </div>
      <div className="_layout-communities">
        <h2 style={{ display: 'inline' }}>Cộng đồng</h2>
        <Button style={{ float: 'right', backgroundColor: 'rgba(10,148,153,1)' }} type="primary" 
        //onClick={showDrawerCreate}
        >
          <i className="fa fa-plus _menu-icon" aria-hidden="true"> </i> Tạo mới
        </Button>
      </div>
      <div className="_layout-footer">
        <h2 style={{ display: 'inline' }}>Chân trang</h2>
        <Button style={{ float: 'right', backgroundColor: 'rgba(10,148,153,1)' }} type="primary" 
        //onClick={showDrawerCreate}
        >
          <i className="fa fa-plus _menu-icon" aria-hidden="true"> </i> Tạo mới
        </Button>
      </div>
    </div>
  )
}

export default Layout 