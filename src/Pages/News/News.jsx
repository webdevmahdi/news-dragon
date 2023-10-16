import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom'
import NewsFooter from '../Shared/News/NewsFooter';

const News = () => {
  const news = useLoaderData();
  let { category_id, title, image_url, details } = news;

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className='text-right'>
            {details}
          </Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger"> <FaArrowLeft></FaArrowLeft> All news in this category</Button>
          </Link>
        </Card.Body>
      </Card>
      <NewsFooter></NewsFooter>
    </div>
  )
}

export default News