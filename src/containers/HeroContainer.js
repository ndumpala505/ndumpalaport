import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';


const HeroContainer = React.memo(() => {

//    <Button className="margin-horizontal-sm" href="/" variant="primary" size="lg">Home</Button>
//    <Button className="margin-horizontal-sm" href="/about" variant="primary" size="lg">About</Button>
//    <Button className="margin-horizontal-sm" href="/contact" variant="primary" size="lg">Contact</Button>

    return (
        <div className="heroImage">
            <Container fluid>
                <Row className="text-size-sm flex-left">
                    <img src={require('../Images/logo.png')} alt="logo" height="100" width="100" />
                </Row>
                <Row className="welcome flex-column text-size-md flex-center flex-center-align text-center">
                    <div className="hello">Hello, I&#x27;m <span className="text-color">Nithesh Dumpala.</span></div>
                    <div className="developer">I&#x27;m a Front-end developer </div>
                    <div className="margin-vertical-sm contactButton">
                        <Button href="#contact" rel="nofollow noopener noreferrer" variant="primary" size="lg">Contact me</Button>
                    </div>
                </Row>
            </Container>
        </div>
    );
});

export default HeroContainer;