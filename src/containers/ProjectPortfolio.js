import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SubHeading  from '../components/SubHeading';

const ProjectPortfolio = React.memo(() => {

    return (
        <Container>
            <Row className="flex-center margin-vertical-sm margin-horizontal-sm">
                <SubHeading heading="PROJECT PORTFOLIO" className="text-size-md text-center"/>
            </Row>
        </Container>
    );
});

export default ProjectPortfolio;