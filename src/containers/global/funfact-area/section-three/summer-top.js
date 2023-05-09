import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from '../../../../components/ui/wrapper'
import Heading from '../../../../components/ui/heading'
import Counter from '../../../../components/counter/layout-three'
import { SectionWrap, HeaderWrap } from './section.style'
import parse from 'html-react-parser'
import Image from '../../../../components/image'
import { TwitterTimelineEmbed, TwitterTweetEmbed, TwitterOnAirButton } from "react-twitter-embed";
import Card from 'react-bootstrap/Card';


const Section = ({ markHeading, headingStyle2 }) => {
    const HeroData = useStaticQuery(graphql`
        query ProcessingProjectTopQuery {
            indexProcessingJson(id: {eq: "summber-scholarship-top"}) {
                content1
                content2
                content3
                pic1 {
                    childImageSharp {
                      fluid(maxWidth: 1384, maxHeight: 779, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                        presentationWidth
                        presentationHeight
                      }
                    }
                }
                pic2 {
                    childImageSharp {
                      fluid(maxWidth: 1384, maxHeight: 779, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                        presentationWidth
                        presentationHeight
                      }
                    }
                }
                pic3 {
                    childImageSharp {
                      fluid(maxWidth: 1384, maxHeight: 779, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                        presentationWidth
                        presentationHeight
                      }
                    }
                }
            }
        }
    `)
    const { content1, content2, content3, pic1, pic2, pic3 } = HeroData.indexProcessingJson;
    return (
        <SectionWrap>
            <Container>

                <Row>
                    <Col lg={{ span: 12 }}>

                        <br />
                        <Row>
                            <Col lg={6}>
                                <HeaderWrap>
                                    <p style={{ fontSize: 20 }}>{parse(content1)}</p>
                                </HeaderWrap>
                                <br />
                            </Col>
                            <Col lg={6}>
                                <Image fluid={pic1.childImageSharp.fluid} alt={"Summer scholorship"} align="left" />
                            </Col>

                        </Row>
                        <br />
                        <Row>
                            <Col lg={6}>
                                <HeaderWrap>
                                    <p style={{ fontSize: 20 }}>{parse(content2)}</p>
                                </HeaderWrap>
                                <br />
                            </Col>
                            <Col lg={6}>
                                <Image fluid={pic2.childImageSharp.fluid} alt={"Summer scholorship"} align="left" />
                            </Col>

                        </Row>
                        <br />
                        <Row>
                            <Col lg={12}>
                                <HeaderWrap>
                                    <p style={{ fontSize: 20 }}>{parse(content3)}</p>
                                </HeaderWrap>
                                <br />
                            </Col>


                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <h5>Feedback from the CREST Summer Scholarship program (2020-2021 and 2021-2022)</h5>
                        <br />
                    </Col>
                    <Col lg={12}>
                    <Image fluid={pic3.childImageSharp.fluid} alt={"Summer scholorship"} align="left" />
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <Card style={{ width: '18rem' }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Text>
                                    “First of all, I would like to express my gratitude for being a part of such a wonderful program. The communication with the organizers was seamless, and the meaningful discussions with my fellow scholars were inspiring. The diverse perspectives provided by clients and supervisors gave me a different way of thinking about the problems we were solving and allowed me to provide unique solutions. The experience I gained during the summer scholarship have been invaluable in my career development. It helped me to get familiar with the working environment, and I got help from my supervisors whenever I needed it. I am confident that the experience I gained during the scholarship will continue to benefit me in the future.”
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card style={{ width: '18rem' }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Text>
                                “It was my first time working on a research project in data science/cyber security domain. Learning to read and assimilate information from research papers, understanding the topic and designing the methodology to answer the research questions were my main takeaways. I also got exposure to OpenStack cloud, simulating exfiltration attacks, which added to my skill set. This experience helped me in my interviews to showcase my technical as well as project execution skills. The project was also found by my interviewer as relevant to the work the company is doing. I have also made connections during this time which has broadened my network. I believe the internship duration and the way it was implemented worked very well for me.” 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card style={{ width: '18rem' }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Text>
                                “Throughout the program, I gained practical experience in advanced machine and deep learning techniques, which significantly enhanced my skills and knowledge in this field. In addition, I had the opportunity to work alongside accomplished professionals who provided me with invaluable guidance and mentorship that had a profound impact on shaping my research interests and approach. Furthermore, the summer scholarship program allowed me to connect and network with other scholars and professionals in the industry, which enabled me to keep apprised of the latest trends and technologies. This has been especially beneficial in my current role as a PhD researcher.”
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card style={{ width: '18rem' }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Text>
                                “My experience while working at CREST was an amazing one. Firstly I got an opportunity to work on - Comparison of DL methods for managing security patches projects, which still helps me in day-to-day ML projects. Tasks like reading and discussing a research paper, queuing tasks on Phoenix using Linux commands, experimenting with different metrics, etc helped me to broaden my technical skills, which are still relevant in my current work.”
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </SectionWrap>
    )
}

Section.propTypes = {
    markHeading: PropTypes.object,
    headingStyle: PropTypes.object
}

Section.defaultProps = {
    markHeading: {
        layout: 'highlight',
    },
    headingStyle: {
        as: 'h3',
        mt: '25px',
        fontSize: '38px',
        child: {
            color: 'primary'
        },
        responsive: {
            large: {
                fontSize: '30px'
            },
            small: {
                fontSize: '24px'
            }
        }
    },
    headingStyle2: {
        as: 'h3',
        position: 'relative',
        pl: '34px',
        fontweight: 600,
        lineHeight: 1.4,
        color: '#000',
        before: {
            top: '50%',
            width: '4px',
            height: '94%',
            bgColor: 'secondary',
            transform: 'translateY(-50%)'
        }
    },
}


export default Section;