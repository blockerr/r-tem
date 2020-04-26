import React from 'react'
import './navigation.css'
import { withRouter } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap'
import { Link, Element } from 'react-scroll'
import Home from '../home/home';
import HomeMaps from '../../components/home/maps/home_maps';
import Services from '../../components/home/services/services';
import Advantages from '../../components/home/advantages/advantages';
import Footer from '../footer/footer';
import Community from '../../components/home/communities/community';


// import Slogan from '../slogan/slogan';

function Navigation({ location }) {
    const path = location.pathname
    console.log(path)

    return (
        <div>
            <div className="_header">
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand href="#home">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-center" defaultActiveKey={path}>
                            <Link activeClass="active" className="_nav-link" to="home" spy={true} smooth={true} duration={1000} offset={-80} >GIỚI THIỆU</Link>
                            <Link activeClass="active" className="_nav-link" to="services" spy={true} smooth={true} duration={500} offset={-80}>DỊCH VỤ TIỆN ÍCH</Link>
                            <Link activeClass="active" className="_nav-link" to="advantage" spy={true} smooth={true} duration={500} offset={-80}>LỢI THẾ</Link>
                            <Link activeClass="active" className="_nav-link" to="map" spy={true} smooth={true} duration={1000} offset={-80} >SƠ ĐỒ PHÂN LÔ</Link>
                            <Link activeClass="active" className="_nav-link" to="community" spy={true} smooth={true} duration={500} offset={-80}>CỘNG ĐỒNG</Link>
                            <Link activeClass="active" className="_nav-link" to="footer" spy={true} smooth={true} duration={500} offset={-80}>LIÊN HỆ</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

            <Element name="home" className="element" >
                <Home />
            </Element>
            <Element name="services" className="element" >
                <Services/>
            </Element>
            <Element name="advantage" className="element" >
                <Advantages/>
            </Element>
            <Element name="map" className="element" >
                <HomeMaps/>
            </Element>
            <Element name="community" className="element" >
                <Community/>
            </Element><Element name="footer" className="element" >
                <Footer/>
            </Element>
        </div>

    )
}

export default withRouter(Navigation) 
