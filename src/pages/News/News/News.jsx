import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import EditorsInsights from '../EditorsInsights/EditorsInsights';

const News = () => {
  const news = useLoaderData();
  const { _id, title, details, image_url, category_id } = news;
  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src={image_url} />
        <Card.Body>
          <Card.Title>
            {title}
          </Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          {/* card btn start */}
          <Link
            to={`/category/${category_id}`}>
            <Button
              variant="danger">
              <FaArrowLeft /> All news in this category
            </Button>
          </Link>
          {/* card btn end */}
        </Card.Body>
      </Card>
      <EditorsInsights />
    </div>
  );
};

export default News;