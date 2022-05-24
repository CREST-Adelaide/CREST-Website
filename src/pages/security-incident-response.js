import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-three'
import Hero from '../containers/index-appointment/hero-area'
import SubHeader from '../containers/layout/header/header-three/subheader'
import { Container, Box, Row, Col } from '../components/ui/wrapper'
import Text from '../components/ui/text'
import AppointmentForm from '../components/forms/appointment-form'
import Footer from '../containers/layout/footer/footer-one'
import Heading from '../components/ui/heading'
import Social, { SocialLink } from '../components/ui/social'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import Contact from '../containers/global/funfact-area/section-three/icdm-contact'
import { TwitterTimelineEmbed, TwitterTweetEmbed, TwitterOnAirButton } from "react-twitter-embed";
// import ContactArea from '../containers/global/contact-area/contact-three/icdm-contact'
// import ContactArea from '../containers/global/contact-area/contact-three'

import {
    HeroWrapper,
    HeroTextWrap,
    HeroButton,
    AppointmentWrap,
    AppointmentTitleWrap,
    AppointmentFormWrap
} from '../containers/index-appointment/hero-area/hero-area.style'


import {
    BannerArea,
    BannerTextWrap,
    OverviewArea,
    ClientBox,
    MetaBox,
    ProblemArea,
    ProblemBox,
    ProblemTextBox,
    ResultArea,
    FaqArea,
    VideoBoxWrap,
    VideoBtnWrap,
    NavigationArea,
    Navigtion
} from '../templates/case-study-template/case-study-template.style'

const CyberAI = ({ pageContext, location }) => (

    <Layout location={location}>
        <SEO title="Guest talk register" />
        <Header />
        {/* <PageHeader
            pageContext={pageContext}
            location={location}
            title="ICDM2021 Workshop"
        /> */}
        <main className="site-wrapper-reveal">

            <Row justify="center">
                <Col>
                    <div style={{
                        as: 'h1',
                        mt: '20px',
                        mb: '15px',
                        color: '#fff'
                    }}>
                        <img src="https://www.whoa.com/wp-content/uploads/2018/10/shutterstock_638631976.jpg" alt={"Security incident response. WHOA"} style={{ width: "100%", height: 600, objectFit: "cover" }} />
                    </div>
                </Col>
            </Row>


            <OverviewArea>
                <Container>
                    {/* <Row>
                        <Col lg={12}>
                            <Heading as="h3" mb="30px">Abstract</Heading>
                        </Col>
                    </Row> */}

                    <Row>
                        <Col lg={6}>
                            <ClientBox>
                                <Heading style={{
                                    as: 'h6',
                                    fontweight: '500',
                                    mb: '.25rem'
                                }}>{"Jordan Riley"}</Heading>
                            </ClientBox>

                            <p style={{ fontSize: 20 }}>{"Cyber Security Engineering Lead in the finance industry"}</p>

                        </Col>
                        <Col lg={6}>

                            <Social style={{
                                color: '#ababab',
                                fontSize: '15px',
                                tooltip: true,
                                tooltip_position: 'bottom-left',
                                marginTop: 80,
                            }}>
                                {/* <SocialLink path="https://scholar.google.com.au/citations?user=Kk6F5cYAAAAJ&hl=en" title="google scholar"><SiGooglescholar /></SocialLink> */}
                                <SocialLink path="https://au.linkedin.com/in/jordan-riley-15501411b" title="linkedin"><FaLinkedinIn /></SocialLink>
                            </Social>

                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6} className="mx-auto">
                            <AppointmentWrap style={{ marginTop: 40 }}>
                                <AppointmentTitleWrap>
                                    <Heading as="h5" mb="10px">Register to join</Heading>
                                    <Text>Please sign up below for event information and updates, such as access to the Zoom link.</Text>
                                </AppointmentTitleWrap>
                                <AppointmentFormWrap>
                                    <AppointmentForm />
                                </AppointmentFormWrap>
                                <br></br>
                                <p>Your information will be submitted to and managed by <a href="https://getform.io/" target="_blank">getform</a>.</p>
                            </AppointmentWrap>
                        </Col>
                        <Col lg={6}>
                            <p style={{
                                fontSize: '34px',
                                lineHeight: 1.43,
                                fontweight: 400,
                            }}>
                                Security incident response in enterprise environments
                            </p>
                            <p style={{ fontSize: '20px' }}>Friday, 3 June 2022. 4:00PM (ACST) </p>
                            <p style={{
                                fontSize: '24px',
                                lineHeight: 1.43,
                                fontweight: 400,
                            }}>
                                The talk will provide an overview of security incident handling workflows, procedures and examples. Secure Operation Centre considerations and day-to-day challenges would be outlined. Practical aspects of tool selection and logging practices to be discussed. An overview of log correlation solutions available in the market currently will be provided. Expected future trends as well as socio-technical issues in security incident handling will be discussed.</p>
                        </Col>

                    </Row>
                    <Row>
                        {/* <Col lg={6}>
                            <Heading style={{
                                as: 'h6',
                                fontSize: '16px',
                                lineHeight: 1.43,
                                fontweight: 400,
                                color: '#002fa6',
                            }}>{"Artificial intelligence and Machine Learning has created a huge impact in current digital world and has been shown to be able to create machines that exhibit intelligence comparable to or in some cases even better than human intelligence. AI has been used in medical applications, security applications, cloud computing, smart cities, web, and in many other domains. Pakistan is moving towards digitalization and the emphasis is on using technology to enhance productivity, economic stability, security and reachability. In this shift towards digitalization, cybersecurity cannot be neglected. AI is helping to achieve cybersecurity by detecting anomalies, adapting security parameters based on ongoing cyber-attacks, and to combat cyber-adversaries. However, AI systems can be controlled, compromised, biased, and misled through flawed learning models and poisonous input data. Therefore, AI systems need robust security. One should know how to use AI models securely? How to safeguard AI models from malicious inputs? How to not make adversaries take advantage of your smart moves? The integration of cybersecurity and AI can boost progress through secure, smooth and smart shift towards digitalization."}</Heading>

                            <ClientBox>
                                <Heading style={{
                                    as: 'h6',
                                    fontweight: '500',
                                    mb: '.25rem'
                                }}>{"Dr. Zunera Jalil"}</Heading>
                            </ClientBox>
                        </Col> */}
                        {/* <Col lg={12}>
                            <img src="https://pbs.twimg.com/media/FPeCfVmVkAsNm2m?format=jpg&name=large"></img>
                        </Col> */}
                    </Row>
                </Container>
                {/* <Container>

                    <Row>
                        <Col lg={6}>
                            <ClientBox>
                                <Heading style={{
                                    as: 'h6',
                                    fontweight: '500',
                                    mb: '.25rem'
                                }}>{"About the activity"}</Heading>
                            </ClientBox>
                        </Col>

                    </Row>
                </Container>
                <br />

                <Container>

                    <Row>
                        <Col lg={12}>
                            <Row>
                                <Col md={4} sm={12}>
                                    <TwitterTweetEmbed
                                        tweetId={'1511563927020191746'} />
                                </Col>
                                <Col md={4} sm={12}>
                                    <TwitterTweetEmbed
                                        tweetId={'1511133742165037060'} />
                                </Col>
                                <Col md={4} sm={12}>
                                    <TwitterTweetEmbed
                                        tweetId={'1511256306942099460'} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container> */}
            </OverviewArea>

        </main>
        <Footer />
    </Layout>
)

export default CyberAI