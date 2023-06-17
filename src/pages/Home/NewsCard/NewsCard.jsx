import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, published_date, total_view, rating } = news;
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                {/* card image start */}
                <Image
                    style=
                    {
                        { height: '40px' }
                    }
                    src={author.img}
                    roundedCircle />
                {/* card image end */}
                {/* author info start */}
                <div className="ps-2 flex-grow-1">
                    <p className='mb-0'>
                        {author?.name}
                    </p>
                    <p>
                        <small>
                            {
                                moment(author?.published_date).format('yyyy-MM-DD')
                            }
                        </small>
                    </p>
                </div>
                {/* icon start */}
                <div>
                    <FaRegBookmark />
                    <FaShareAlt />
                </div>
                {/* icon end */}
                {/* author info end */}
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Img
                    variant="top"
                    src={image_url} />
                <Card.Text>
                    {
                        details.length < 250 ?
                            <>
                                {details}
                            </>
                            :
                            <>
                                {details.slice(0, 250)}....
                            </>
                    }
                    <br />
                    {/* read more link or btn */}
                    <Link
                        className='text-decoration-none text-warning fw-bolder'
                        to={`/news/${_id}`}>
                        Read More
                    </Link>
                </Card.Text>
            </Card.Body>
            {/* card footer start */}
            <Card.Footer
                className="text-muted d-flex">
                {/* rating start */}
                <div className='flex-grow-1'>
                    <Rating
                        className='text-warning fw-bolder'
                        placeholderRating={rating.number}
                        readonly
                        emptySymbol={<FaRegStar />}
                        placeholderSymbol={<FaStar />}
                        fullSymbol={<FaStar />}>
                    </Rating>
                    <span
                        className=' fw-bold'>
                        {rating?.number}
                    </span>
                </div>
                {/* rating end */}
                <div>
                    <FaEye /> {total_view}
                </div>
            </Card.Footer>
            {/* card footer end */}
        </Card>
    );
};

export default NewsCard;