import React, { useContext } from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className="div text-center">
                <img
                    className='mt-4'
                    src={logo}
                    alt="" />
                <p
                    className='text-secondary'>
                    <small>
                        Journalism Without Fear or Favour
                    </small>
                </p>
                <p>
                    {
                        moment().format("dddd, MMMM D, YYYY")
                    }
                </p>
                <p>
                    {
                        moment().format("h:mm:ss a")
                    }
                </p>
            </div>
            <div className='d-flex'>
                <Button
                    variant="danger">
                    Latest
                </Button>
                <Marquee
                    pauseOnHover
                    className='text-danger'
                    speed={90}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;