import React from 'react';
import Header from '../../Pages/Shared/Header/Header';
import Footer from '../../Pages/Shared/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNavbar from '../../Pages/Shared/Left Navbar/LeftNavbar';
import RightNavBar from '../../Pages/Shared/Right Navbar/RightNavBar';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../../Pages/Shared/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div className='text-center'>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col xs={3}>
                        <LeftNavbar></LeftNavbar>
                    </Col>
                    <Col xs={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col xs={3}>
                        <RightNavBar></RightNavBar>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;