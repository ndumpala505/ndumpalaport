import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProjectsContainer = React.memo(() => {

    return (
        <Container fluid>
            <Row className="flex-center flex-center-align cardsWrapper heroImage2">
                <Col xs={12} md={4}>
                    <div className="cards margin-horizontal-md  margin-vertical-md">As a tenacious self-taught programmer, I use continuous iterations to
                                                                                        produce results quickly and continuously improve products.</div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="cards margin-horizontal-lg margin-vertical-md">As a tenacious self-taught programmer, I use continuous iterations to
                                                                                        produce results quickly and continuously improve products.</div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="cards margin-horizontal-lg margin-vertical-md">As a tenacious self-taught programmer, I use continuous iterations to
                                                                                        produce results quickly and continuously improve products.</div>
                </Col>
            </Row>
        </Container>
    );
});

export default ProjectsContainer;