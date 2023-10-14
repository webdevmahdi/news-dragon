import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap'
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'

const LeftNavbar = () => {
  let [catagories, setCatagories] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/categories')
      .then(res => res.json())
      .then(data => setCatagories(data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <h3>All catagories</h3>
      <div className='p-4'>
        {
          catagories.map(category => <p key={category.id}>
            <Link className='d-flex align-items-start text-decoration-none text-black fs-5 p-3 border-rounded' to={`/category/${category.id}`}>{category.name}</Link>
          </p>)
        }
      </div>
      <div>
        <Row xs={1} md={1} lg={1} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={first} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to additional content. this content is a little bit longer
                </Card.Text>
                <div className='d-flex justify-content-between'>
                  <b>Sports</b>
                  <p>Jun 4, 2022</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={second} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to additional content. this content is a little bit longer
                </Card.Text>
                <div className='d-flex justify-content-between'>
                  <b>Sports</b>
                  <p>Jun 4, 2022</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={third} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to additional content. this content is a little bit longer
                </Card.Text>
                <div className='d-flex justify-content-between'>
                  <b>Sports</b>
                  <p>Jun 4, 2022</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LeftNavbar;