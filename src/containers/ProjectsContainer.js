import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProjectsContainer = React.memo(() => {

    return (
        <Container fluid>
            <div className="heroImage2 margin-vertical-xlg">
                <Row className="cardWrapper margin-vertical-lg flex-center flex-center-align">
                    <Col md={4}>
                        <div className="cards margin-horizontal-md  margin-vertical-md">
                            <div className="margin-vertical-md"><img src={require('../Images/coding.png')} alt="react js logo" height="100" width="100" /></div>
                            <div>
                            I Enjoy Hand coding things from scratch using clean, simple and maintainable code that is easy to read
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="cards margin-horizontal-md  margin-vertical-md">
                            <div className="margin-vertical-md"><img src={require('../Images/design.png')} alt="react js logo" height="100" width="100" /></div>
                            <div>
                            I focus on crafting beautifully designed websites, and as with my code. I value simple and clean design patterns.
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="cards margin-horizontal-md  margin-vertical-md">
                            <div className="margin-vertical-md"><img src={require('../Images/computer.png')} alt="react js logo" height="100" width="100" /></div>
                            <div>
                            I make Responsive web pages using Bootstrap and media queries.My Projects will work on any kind of devices.
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
});

export default ProjectsContainer;