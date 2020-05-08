import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SubHeading  from '../components/SubHeading';

const ProjectPortfolio = React.memo(() => {

    return (
        <Container>
            <Row className="flex-center margin-vertical-xlg padding-vertical-xlg margin-horizontal-sm">
                <SubHeading heading="PROJECT PORTFOLIO" className="text-size-md text-center"/>
            </Row>
            <div>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={4}>
                        <div className="project">
                            <div className="cardSide cardFront">
                                <div className="cardPicture cardFrontImage1">
                                </div>
                                <h4 className="cardHeading">
                                    <span className="cardHeading_span cardHeading_span_1">
                                    The Online Market place
                                    </span>
                                </h4>
                                <div className="cardDetails">
                                    <ul>
                                        <li>React</li>
                                        <li>Redux</li>
                                        <li>NodeJS</li>
                                        <li>AWS</li>
                                        <li>Mocha | Jest</li>
                                        <li>Bootstrap</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cardSide cardBack cardbackFill">
                                <div className="cardCTA">
                                     <div className="cardBackText">
                                     The online marketplace for car purchasers and sellers.The site offers listings of
                                     new and used vehicles for sale from dealers and private sellers. checkout the
                                     website link below for more information.
                                     </div>
                                     <div>
                                        <Button href="https:\\www.autotrader.com" noFollow variant="light" size="lg">Let's see</Button>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                    </Col>
                    <Col xs={12} md={3}>
                    </Col>
                </Row>
            </div>
        </Container>
    );
});

export default ProjectPortfolio;