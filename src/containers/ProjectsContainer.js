import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import coding from '../Images/coding.png';
import design from '../Images/design.png';
import computer from '../Images/computer.png';

const ProjectsContainer = React.memo(() => {

    return (
        <Container fluid className="heroImage2">
            <div className="margin-vertical-xlg">
                <Row className="cardWrapper margin-vertical-lg flex-center flex-center-align">
                    <Col md={4}>
                        <div className="cards margin-horizontal-md  margin-vertical-lg">
                            <div className="margin-vertical-md">
                                <img src={coding} alt="code icon" height="100" width="100" />
                            </div>
                            <>
                            I enjoy hand coding things from scratch using clean, simple and maintainable code that is easy to read.
                            </>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="cards margin-horizontal-md  margin-vertical-lg">
                            <div className="margin-vertical-md">
                                <img src={computer} alt="design icon" height="100" width="100" />
                            </div>
                            <>
                            I focus on crafting beautifully designed websites, and with my code I value simple and clean design patterns.
                            </>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="cards margin-horizontal-md  margin-vertical-lg">
                            <div className="margin-vertical-md">
                                <img src={design} alt="responsive design icon" height="100" width="100" />
                            </div>
                            <>
                            I make Responsive web pages using Bootstrap and Media queries.My projects will work on any kind of devices.
                            </>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
});

export default ProjectsContainer;
