import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SubHeading  from '../components/SubHeading';
const ContactDetailsContainer = React.memo(() => {

    return (
        <Container fluid className="margin-vertical-md color-white bgBlack">
            <Container className="padding-vertical-xlg">
                <Row className="padding-horizontal-sm">
                    <Col xs={12} md={6} className="margin-vertical-md">
                        <strong className="font-size-md">
                            Nithesh Dumpala
                        </strong>
                        <div className="margin-vertical-md">
                            Experienced User Interface Engineer with a demonstrated history of working in the IT industry.
                            Skilled in Frontend Technologies like HTML, CSS, JAVASCRIPT, JQUERY, JSF, SASS, LESS, Github, SQL,
                            NodeJS, AngularJS, ReactJS, Redux. Mocha, Jest as a test runner with assertions handled by Chai-Enzyme for
                            React support and Agile Methodologies.
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="margin-vertical-md ">
                         <strong className="font-size-md margin-vertical-md">
                            Let's Talk:
                        </strong>
                        <div className="diplay-flex flex-column margin-vertical-md text-underline">
                            <div>+1(615)784-3440</div>
                            <div>ui.nitesh@gmail.com</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
});

export default ContactDetailsContainer;