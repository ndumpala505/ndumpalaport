import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import logo from '../Images/logo_128.png';

const HeroContainer = React.memo(() => {

    return (
        <div className="heroImage">
            <Container fluid>
                <Row className="text-size-sm flex-left">
                    <img src={logo} alt="logo" height="100" width="100" />
                </Row>
                <Row className="welcome flex-column text-size-md flex-center flex-center-align text-center">
                    <div className="hello">Hello, I&#x27;m <span className="text-color">Nithesh Dumpala.</span></div>
                    <div className="developer">I&#x27;m a Front-end developer </div>
                    <div className="margin-vertical-sm contactButton">
                        <Button href="#contact" rel="nofollow noopener noreferrer" variant="warning" size="lg">Contact me</Button>
                    </div>
                </Row>
            </Container>
        </div>
    );
});

export default HeroContainer;