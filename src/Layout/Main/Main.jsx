import React from 'react'
import Header from '../../Pages/Shared/Header/Header'
import Footer from '../../Pages/Shared/Footer/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import moment from 'moment';
import Col from 'react-bootstrap/Col';
import LeftNavbar from '../../Pages/Shared/Left Navbar/LeftNavbar';
import RightNavBar from '../../Pages/Shared/Right Navbar/RightNavBar';

const Main = () => {
    return (
        <div className='text-center'>
            <Header></Header>
            <Container>
                <Row>
                    <Col>
                        <LeftNavbar></LeftNavbar>
                    </Col>
                    <Col xs={6}>{moment().format()}</Col>
                    <Col>
                        <RightNavBar></RightNavBar>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    )
}

export default Main