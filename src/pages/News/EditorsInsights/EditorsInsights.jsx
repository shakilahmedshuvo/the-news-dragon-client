import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../assets/1.png';
import second from '../../../assets/2.png';
import third from '../../../assets/3.png';

const EditorsInsights = () => {
    return (
        <Row
            xs={1}
            md={2}
            lg={3}
            className="g-4 mt-4">
            {/*  editors insights card start */}
            <Col>
                <Card>
                    <Card.Img
                        variant="top"
                        src={first} />
                    <Card.Body>
                        <Card.Title>
                            21 The Most Stylish Wedding Guest Dresses For Spring
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img
                        variant="top"
                        src={second} />
                    <Card.Body>
                        <Card.Title>
                            21 The Most Stylish Wedding Guest Dresses For Spring
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img
                        variant="top"
                        src={third} />
                    <Card.Body>
                        <Card.Title>
                            21 The Most Stylish Wedding Guest Dresses For Spring
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            {/*  editors insights card end */}
            {/* work here add calendar and date */}
        </Row>
    );
};

export default EditorsInsights;