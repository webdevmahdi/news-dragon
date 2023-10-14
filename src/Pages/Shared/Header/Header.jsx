import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt="logo" />
        <p>Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM Do, YYYY")}</p>
        <div className='d-flex'>
          <Button variant="danger">Breaking news</Button>
          <Marquee speed={80}>
            I can be a React component, multiple React components, or just some text.I can be a React component, multiple React components, or just some text.I can be a React component, multiple React components, or just some text.I can be a React component, multiple React components, or just some text.
          </Marquee>
        </div>
      </div>
    </Container>
  );
};

export default Header;