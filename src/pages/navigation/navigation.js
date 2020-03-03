import React from 'react'
import './navigation.css'
import { withRouter } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap'

function Navigation({ location }) {
    const path = location.pathname
    console.log(path)

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" sticky='top'>
                <Navbar.Brand href="#home">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-center" defaultActiveKey={path}>
                        <Nav.Link href="/home" eventKey="/home">Trang chủ</Nav.Link>
                        <Nav.Link href="/investor" eventKey="/investor">Các nhà đầu tư</Nav.Link>
                        <Nav.Link href="/map" eventKey="/map">Sơ đồ phân lô</Nav.Link>
                        <Nav.Link href="/activity" eventKey="/activity">Các hoạt động</Nav.Link>
                        <Nav.Link href="/about" eventKey="/about">Giới thiệu</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default withRouter(Navigation) 
