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

const Section = ({ markHeading, headingStyle2 }) => {
    const HeroData = useStaticQuery(graphql`
        query ProcessingProject1Query {
            indexProcessingJson(id: {eq: "summer-scholarship-project1"}) {
                title
                projectdetail
                supervisor
                student
                twitterid
                studentemail
                studentphoto {
                    childImageSharp {
                      fluid(maxWidth: 180, maxHeight: 180, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                        presentationWidth
                        presentationHeight
                      }
                    }
                }
                studentprofile
            }
        }
    `)
    const { title, projectdetail, student, twitterid, studentphoto, studentprofile, supervisor } = HeroData.indexProcessingJson;
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <h5>Our interns and projects from the CREST summer scholarship program in 2021-2022</h5>
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col lg={{ span: 12 }}>

                        <Row>
                            <Col lg={8}>
                                <HeaderWrap>
                                    <Heading  {...headingStyle2}>{title}</Heading>
                                    <p style={{ fontSize: 16 }}>{parse(projectdetail)}</p>
                                    <br />
                                    <p style={{ fontSize: 20 }}>{"Supervised by: " + parse(supervisor)}</p>
                                </HeaderWrap>
                                <br />
                                <Image fluid={studentphoto.childImageSharp.fluid} alt={student} align="left" style={{ height: 180, width: 180 }} />
                                <p style={{ fontSize: 24, paddingTop: 30, fontWeight: 500 }}>{parse(student)}</p>
                                <p style={{ fontSize: 16 }}>{parse(studentprofile)}</p>
                            </Col>
                            <Col lg={4} sm={12}>
                                <TwitterTweetEmbed
                                    id={twitterid}
                                    tweetId={twitterid} />
                            </Col>
                        </Row>
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