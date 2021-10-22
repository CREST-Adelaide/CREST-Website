import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from '../../../../components/ui/wrapper'
import Heading from '../../../../components/ui/heading'
import { SectionWrap2, HeaderWrap } from './section.style'

const Section = ({ markHeading, headingStyle2 }) => {
    return (
        <SectionWrap2>
            <Container>
                <Row style={{ justifyContent: 'space-between', paddingLeft: 20 }}>
                    <img style={{ height: 80 }} src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/University-of-Adelaide-Logo.svg/220px-University-of-Adelaide-Logo.svg.png" alt="University of Adelaide"></img>
                    <img style={{ height: 80 }} src="https://www.crest-centre.net/static/light-logo-85061522b6bbb627b9a19b56a1ba43ef.png" alt="CREST"></img>
                </Row>
                <br />
                <br />
                <Row>
                    <Col lg={{ span: 12, offset: 0 }}>
                        <h1 style={{ textAlign: "center" }}>{"Research participants needed!!"}</h1>
                        <br />
                        <h3 style={{ textAlign: "center" }}>{"Investigation of the security championship programs for creating positive security culture within organisations"}</h3>
                        <br />
                        <br />
                        <p style={{ fontSize: 24, color: "#315597", fontFamily: "lucida grande" }}>Researchers from the University of Adelaide, South Australia, are looking for participants to take part in an interview (Zoom or through email) regarding security championship programs within organisations. This study purports to prepare a set of recommendations for improving “security champions” programs.</p>
                        <br />
                        <h5 style={{ color: "#315597", fontFamily: "lucida grande" }}>Are you eligible?</h5>
                        <br />
                        <p style={{ fontSize: 20 }}>You are eligible to participate if you are:</p>
                        <br />
                        <p style={{ fontSize: 20, paddingLeft: 10 }}>•	A Security champion in your organisation or</p>
                        <br />
                        <p style={{ fontSize: 20, paddingLeft: 10 }}>•	An employee that is not a security champion but has security champions your organisational unit</p>
                        <br />
                        <p style={{ fontSize: 20, paddingLeft: 10 }}>•	A manager/leader of a security champion program</p>
                        <br />
                        <p style={{ fontSize: 20, color: "#315597", fontFamily: "lucida grande" }}>You will be reimbursed for your time spent on the study.</p>
                        <br />
                        <h5 style={{ color: "#315597", fontFamily: "lucida grande" }}>Are you interested to know more information about the study? </h5>
                        <br />
                        <p style={{ fontSize: 20 }}>Please contact Dr Asangi Jayatilaka <a href="mailto:asangi.jayatilaka@adelaide.edu.au" style={{ fontSize: 20 }}>(asangi.jayatilaka@adelaide.edu.au)</a> to get to know more information and arrange a time for the interview. </p>
                        <br />
                        <h3 style={{ textAlign: "center" }}>Join us now to be a part of this exciting research!</h3>
                        <br />
                        {/* <h5 style={{ color: "#315597", fontFamily: "lucida grande" }}>How to apply?</h5>
                        <br />
                        <p style={{ fontSize: 20 }}>Submit your application using the following link: </p><a target="_blank" href="https://forms.gle/YJkGWnSBTU64oVh19">https://forms.gle/YJkGWnSBTU64oVh19</a>
                        <br />
                        <br />
                        <p style={{ fontSize: 20 }}>You are required to upload your CV and transcripts and specify the project preferences as a part of the application. You can nominate up to three project preferences.</p>
                        <br />
                        <h5 style={{ color: "#315597", fontFamily: "lucida grande" }}>Like to see key highlights of 2020-2021 CREST summer scholarship program?</h5>
                        <br />
                        <p style={{ fontSize: 20 }}>Click on the below link to  know  details of the last year’s summer scholarship program:</p>
                        <a href="https://bit.ly/3gMTNWr" target="_blank" style={{ fontSize: 20, paddingLeft: 10 }}>•	LinkedIn</a>
                        <br />
                        <a href="https://twitter.com/hashtag/CRESTSummerProjects2020?src=hashtag_" target="_blank" style={{ fontSize: 20, paddingLeft: 10 }}>•	Twitter</a>
                        <br />
                        <br />
                        <h5 style={{ color: "#315597", fontFamily: "lucida grande" }}>If you need any more information please contact:</h5>
                        <br />
                        <p style={{ fontSize: 20, paddingLeft: 10 }}>•	Dr. Asangi Jayatilaka, University of Adelaide </p><a href="mailto:asangi.jayatilaka@adelaide.edu.au" style={{ fontSize: 20, paddingLeft: 30 }}>(asangi.jayatilaka@adelaide.edu.au)</a>
                        <br />
                        <br />
                        <br />
                        <p style={{ fontSize: 20, paddingLeft: 10 }}>•	Dr. Chadni Islam, University of Adelaide  </p><a href="mailto:chadni.islam@adelaide.edu.au" style={{ fontSize: 20, paddingLeft: 30 }}>(chadni.islam@adelaide.edu.au)</a>
                        <br /> */}

                    </Col>
                </Row>
            </Container>
        </SectionWrap2>
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
