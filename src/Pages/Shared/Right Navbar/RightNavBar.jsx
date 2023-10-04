import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png';

const RightNavBar = () => {
  return (
    <div>
      <h3>Login with</h3>
      <Button className='mb-3' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
      <Button variant="outline-primary"> <FaGithub /> Login with Github</Button>
      <div className='m-4'>
        <h3>Find us on</h3>
        <ListGroup>
          <ListGroup.Item> <FaFacebook /> Facebook</ListGroup.Item>
          <ListGroup.Item> <FaTwitter /> Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg} alt="text" />
        <h4>Connect the world</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta tenetur impedit rem dolores dignissimos incidunt iure cumque, quis maxime eius.</p>
      </div>
    </div>
  );
};

export default RightNavBar;