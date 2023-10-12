import React from 'react';
import Header from '../../Pages/Shared/Header/Header';
import Footer from '../../Pages/Shared/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNavbar from '../../Pages/Shared/Left Navbar/LeftNavbar';
import RightNavBar from '../../Pages/Shared/Right Navbar/RightNavBar';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col xs={9}>
            <Outlet></Outlet>
          </Col>
          <Col>
            <RightNavBar></RightNavBar>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default NewsLayout