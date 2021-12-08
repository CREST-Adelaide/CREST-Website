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
                supervisor
                student
                studentemail
                studentphoto {
                    childImageSharp {
                      fluid(maxWidth: 768, maxHeight: 768, quality: 100) {
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
    const { title, student, studentphoto, studentprofile, supervisor } = HeroData.indexProcessingJson;
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={{ span: 12 }}>

                        <Row>
                            <Col lg={8}>
                                <HeaderWrap>
                                    {/* <Heading {...markHeading}>{title}</Heading> */}
                                    <Heading  {...headingStyle2}>{title}</Heading>
                                    <br />
                                    <p style={{ fontSize: 20 }}>{"Supervised by: " + parse(supervisor)}</p>
                                </HeaderWrap>
                                <Image fluid={studentphoto.childImageSharp.fluid} alt={student} align="left" />
                                <p style={{ fontSize: 24, paddingTop: 30, fontWeight: 500 }}>{parse(student)}</p>
                                <p style={{ fontSize: 20 }}>{parse(studentprofile)}</p>
                            </Col>
                            <Col lg={4} sm={12}>
                                <TwitterTweetEmbed
                                    tweetId={'1467705139398004737'} />
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