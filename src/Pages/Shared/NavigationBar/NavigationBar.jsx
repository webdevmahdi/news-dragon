import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';


const NavigationBar = () => {
    let { user } = useContext(AuthContext);
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Nav className="me-auto mx-auto">
                        <Link to='/'> Home</Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#career">Career</Nav.Link>
                    </Nav>
                    <Nav>
                        {user && <FaUser style={{ fontSize: '2rem' }}></FaUser>}
                        {
                            user ? <Button variant="secondary">Log out</Button>
                            : <Link to='/login'><Button variant="secondary">Log in</Button> </Link>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </Container>
    )
}

export default NavigationBar