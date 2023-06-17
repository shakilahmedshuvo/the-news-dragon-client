import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png';

const RightNav = () => {
    return (
        <div>
            <h4>
                Login With
            </h4>
            <div className='mt-4'>
                <Button className='mb-2'
                    variant="outline-primary"><FaGoogle /> Login with Google
                </Button>
                <Button
                    variant="outline-secondary"><FaGithub /> Login with Github
                </Button>
            </div>
            <div className='mt-4'>
                <h4>Find us on</h4>
                <ListGroup className='mt-3'>
                    <ListGroup.Item>
                        <FaFacebook /> Facebook
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaTwitterSquare /> Twitter
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaInstagramSquare /> Instagram
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <QZone />
            <div>
                <img
                    src={bg}
                    alt="" />
                {/* work here.... */}
            </div>
        </div>
    );
};

export default RightNav;