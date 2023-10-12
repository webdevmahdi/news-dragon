import moment from 'moment/moment';
import React from 'react';
import { FaEye, FaRegBookmark, FaRegEye, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

function NewsCard({ news }) {
    // ?.name, author.img, author.published_date
    let { _id, title, image_url, details, author, rating, total_view } = news;
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center justify-content-between'>
                <div className='ps-2 d-flex'>
                    <Image style={{ height: 40 }} src={author.img} rounded />
                    <div className='ps-2'>
                        <p className='mb-0'>{author?.name}</p>
                        <span>{moment(author?.published_date).format('yyyy-MM-D')}</span>
                    </div>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Image style={{ width: 518, height: 262 }} src={image_url} />
                <Card.Text className='text-justify'>
                    {details.length < 250 ?
                        <div>{details}</div>
                        :
                        <>
                            {details.slice(0, 278)}...
                            <Link className='p-2' to={`/news/${_id}`} >Read more</Link>
                        </>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                <div>
                    <Rating className='text-warning p-2 fs-3'
                        placeholderRating={rating?.number}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    {rating?.number}
                </div>
                <div className='d-flex align-items-center'>
                    <FaRegEye></FaRegEye>
                    <p className='ps-3'>{total_view}</p>
                </div>
            </Card.Footer>
        </Card>
    );
}

export default NewsCard;