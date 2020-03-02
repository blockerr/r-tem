import React from 'react'
import './navigation.css'
import { Button } from 'antd';
import { UnorderedListOutlined, CloseCircleOutlined } from '@ant-design/icons';

function Navigation() {
    return (
        <div className="_header">
            <h1 className="_logo">Logo</h1>
            <input type="checkbox" id="chk" />
            <label htmlFor="chk" className="_show-menu-btn">
                <UnorderedListOutlined />
            </label>
            <div className="_menu">
            <ul >
                <a href="/#">Trang chủ</a>
                <a href="/#">Nhà đầu tư</a>
                <a href="/#">Sơ đồ phân lô</a>
                <a href="/#">Các hoạt động</a>
                <a href="/#">Giới thiệu</a>
                <label htmlFor="chk" className="_menu-hide-button">
                    <CloseCircleOutlined />
                </label>
                <Button className="_login-btn" type="primary">Primary</Button>
            </ul>
            </div>
          
           
        </div>
    )
}

export default Navigation
