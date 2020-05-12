import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SubHeading  from '../components/SubHeading';
import nodeImage from '../Images/nodeImage.png';
import jquery from '../Images/jquery.png';
import react from '../Images/react.png';
import angular from '../Images/angular.png';

const JSAbstractContainer = React.memo(({
    device,
}) => {

    return (
        <Container>
            <Row className="flex-center flex-column margin-vertical-sm margin-horizontal-sm">
                <SubHeading heading="FRONT END FOCUSED" className="text-size-md text-center"/>
                <SubHeading heading="WITH DIFFERENT JS LIBRARY EXPERIENCE" className="text-size-md text-center"/>
            </Row>
            <Row className="padding-horizontal-sm text-left">
                <Col xs={12} md={6}>
                    <Row className="flex-column margin-vertical-lg">
                        <SubHeading heading="MOTIVATED TO PRODUCT RESULTS" className="text-size-sm font-weight-md"/>
                        <div>As a tenacious self-taught programmer, I use continuous iterations to
                        produce results quickly and continuously improve products.</div>
                    </Row>
                    <Row className="flex-column margin-vertical-lg">
                        <SubHeading heading="AN AGILE COLLABORATOR" className="text-size-sm font-weight-md"/>
                        <div>I have contributed to the open source projects, worked on engineering teams,
                        and always stay attuned to the newest frameworks.</div>
                    </Row>
                </Col>
                <Col xs={12} md={6}>
                    <Row className="flex-center text-center flex-center-align logos">
                        <img src={nodeImage} alt="node js logo" height="100" width="100" />
                        <img src={jquery} alt="jquery logo" height="100" width="100" />
                        <img src={react} alt="react js logo" height="100" width="100" />
                        <img src={angular} alt="angular js logo" height="115" width="115" />
                    </Row>
                </Col>
            </Row>
        </Container>
    );
});

export default JSAbstractContainer;