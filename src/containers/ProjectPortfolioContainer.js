import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SubHeading  from '../components/SubHeading';
import PortfolioCard  from '../components/PortfolioCard';

    const imageClass = ['cardFrontImage1', 'cardFrontImage2', 'cardFrontImage3']

    const cardBackFill = ['cardBackFill_1', 'cardBackFill_2', 'cardBackFill_3'];

    const cardBackText_1 = `The online marketplace for car purchasers and sellers.The site offers listings of new and
                            used vehicles for sale from dealers and private sellers.Checkout the website link below
                            for more information.`;

    const cardBackText_2 = `The web internal A/B testing applications was constructed via sets of reusable components
                            to implement interfaces for end user interaction.The concepts of Templating, componentization
                            and composition which I built made the application more robust`;

    const cardBackText_3 = `A leading international supplier of On-Demand software and E-commerce services to the insurance,
                            financial and healthcare industries, provides end-to-end solutions ranging from infrastructure exchanges,
                            carrier systems, agency systems and risk compliance solutions`;

    const linkURLs= ['https:\\www.autotrader.com', '/', 'https://www.ebix.com/ebix-exchange'];

    const technologies_1 = ['React | Redux', 'CSS3 | SASS', 'NodeJS', 'AWS', 'Mocha | Jest', 'Bootstrap'];
    const technologies_2 = ['Angular', 'JSF', 'HTML5', 'CSS3 | Sass', 'Spring Boot', 'mySQL'];
    const technologies_3 = ['JQUERY', 'JAVA', 'JSP', 'XHTML', 'PLSQL', 'Media Queries'];

const ProjectPortfolioContainer = React.memo(() => {

    return (
        <Container>
            <Row className="flex-center margin-vertical-sm padding-vertical-xlg margin-horizontal-sm">
                <SubHeading heading="PROJECT PORTFOLIO" className="text-size-md text-center"/>
            </Row>
            <>
                <Row className="justify-content-md-center">
                    <Col xs={12}  xl={4}>
                        <PortfolioCard
                            imageClass={imageClass[0]}
                            cardBackFill={cardBackFill[0]}
                            cardHeading='The Online Market place'
                            cardBackText={cardBackText_1}
                            linkURL={linkURLs[0]}
                            technologies={technologies_1}
                         />
                    </Col>
                    <Col xs={12} xl={4}>
                        <PortfolioCard
                            imageClass={imageClass[1]}
                            cardBackFill={cardBackFill[1]}
                            cardHeading='The A/B Testing Tool'
                            cardBackText={cardBackText_2}
                            linkURL={linkURLs[1]}
                            technologies={technologies_2}
                         />
                    </Col>
                    <Col xs={12} xl={4}>
                        <PortfolioCard
                            imageClass={imageClass[2]}
                            cardBackFill={cardBackFill[2]}
                            cardHeading='E-commerce service'
                            cardBackText={cardBackText_3}
                            linkURL={linkURLs[2]}
                            technologies={technologies_3}
                        />
                    </Col>
                </Row>
            </>
        </Container>
    );
});

export default ProjectPortfolioContainer;