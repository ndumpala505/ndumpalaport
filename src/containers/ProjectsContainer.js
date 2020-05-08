import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProjectsContainer = React.memo(() => {

    return (
        <Container fluid>
            <div className="flex-center flex-center-align cardsWrapper heroImage2 margin-vertical-xlg">
                <Row className="cardWrapper margin-vertical-lg">
                    <Col xs={12} md={4}>
                        <div className="cards margin-horizontal-md  margin-vertical-md">
                            <div className="margin-vertical-md"><img src={require('../Images/code.jpg')} alt="react js logo" height="100" width="100" /></div>
                            <div>
                            I Enjoy Hand coding things from scratch using clean, simple and maintainable code that is easy to read
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="cards margin-horizontal-md  margin-vertical-md">
                            <div className="margin-vertical-md"><img src={require('../Images/ux.png')} alt="react js logo" height="100" width="100" /></div>
                            <div>
                            I focus on crafting beautifully designed websites, and as with my code. I value simple and clean design patterns.
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="cards margin-horizontal-md  margin-vertical-md">
                            <div className="margin-vertical-md"><img src={require('../Images/screen3.jpg')} alt="react js logo" height="100" width="100" /></div>
                            <div>
                            I make Responsive web pages using Twitter Bootstrap and media queries.My Projects will work on any kind of devices.
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
});

export default ProjectsContainer;