import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';


const HeroContainer = React.memo(() => {
    return (
        <div className="heroImage">
            <div className="layer">
                <Container fluid>
                    <Row className="text-size-sm flex-right">
                        <Button className="margin-horizontal-sm" href="/" variant="primary" size="lg">Home</Button>
                        <Button className="margin-horizontal-sm" href="/about" variant="primary" size="lg">About</Button>
                        <Button className="margin-horizontal-sm" href="/contact" variant="primary" size="lg">Contact</Button>
                    </Row>
                    <Row className="welcome flex-column text-size-md flex-center flex-center-align">
                        <div>Hello, I&#x27;m <span className="text-color">Nithesh Dumpala.</span></div>
                        <div>I&#x27;m a Front-end developer </div>
                        <div className="margin-vertical-sm">
                            <Button href="/contact" variant="primary" size="lg">Contact me</Button>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
});
export default HeroContainer;