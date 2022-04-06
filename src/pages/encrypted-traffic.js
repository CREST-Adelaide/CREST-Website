import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-three'
import SubHeader from '../containers/layout/header/header-three/subheader'
import { Container, Box, Row, Col } from '../components/ui/wrapper'
import Footer from '../containers/layout/footer/footer-one'
import Heading from '../components/ui/heading'
import Social, { SocialLink } from '../components/ui/social'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import HeroArea from '../containers/index-processing/hero-area'
import SummerTitle from '../containers/global/funfact-area/section-three/summer-title'
import Scope from '../containers/global/funfact-area/section-three/icdm-scope'
import Topics from '../containers/global/funfact-area/section-three/icdm-topics'
import Speaker from '../containers/global/funfact-area/section-three/icdm-speaker'
import Submission from '../containers/global/funfact-area/section-three/icdm-submission'
import Important from '../containers/global/funfact-area/section-three/icdm-important'
import Organisation from '../containers/global/funfact-area/section-three/icdm-organization'
import Contact from '../containers/global/funfact-area/section-three/icdm-contact'
import { TwitterTimelineEmbed, TwitterTweetEmbed, TwitterOnAirButton } from "react-twitter-embed";
// import ContactArea from '../containers/global/contact-area/contact-three/icdm-contact'
// import ContactArea from '../containers/global/contact-area/contact-three'


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
        <SEO title="Cybersecurity for AI and AI for Cybersecurity" />
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
                        <img src="https://miro.medium.com/max/1400/1*EY50YzYGk9JkYo6K779u-A.jpeg" alt={"What is Encryption & How Does It Work?"} style={{ width: "100%", height: 600, objectFit: "cover" }} />
                        {/* <Heading {...taglineStyle}>{"Test"}</Heading> */}
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
                        <Col lg={12}>
                            <img src="https://pbs.twimg.com/media/FPeCfVmVkAsNm2m?format=jpg&name=large"></img>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <ClientBox>
                                <Heading style={{
                                    as: 'h6',
                                    fontweight: '500',
                                    mb: '.25rem'
                                }}>{"Dr. Suranga Seneviratne"}</Heading>
                            </ClientBox>
                        </Col>
                        <Col lg={6}>

                            <Social style={{
                                color: '#ababab',
                                fontSize: '15px',
                                tooltip: true,
                                tooltip_position: 'bottom-left',
                                marginTop: 80,
                            }}>
                                <SocialLink path="https://scholar.google.com.au/citations?user=Kk6F5cYAAAAJ&hl=en" title="google scholar"><SiGooglescholar /></SocialLink>
                                <SocialLink path="https://au.linkedin.com/in/surangas" title="linkedin"><FaLinkedinIn /></SocialLink>
                            </Social>

                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <p style={{
                                fontSize: '24px',
                                lineHeight: 1.43,
                                fontweight: 400,
                            }}>
                                Dr Suranga Seneviratne is a Lecturer in Security at the School of Computer Science, The  University of  Sydney.  He received his  PhD from the University of  New  South  Wales,  Australia in 2015 and received his bachelor's degree from the University of Moratuwa, Sri Lanka in 2005. His current research interests include privacy and security in mobile systems,  AI  applications in security, security of machine learning,  and behavioural biometrics. He has published over 40 peer-reviewed research papers in top tier venues such as CVPR, WWW, MobiSys,  SIGCOMM IMC, and IMWUT (Ubicomp).  His research has been often translated into solutions beneficial to the industry and the general public and covered by top international and local media outlets such as Forbes, ZDNet, SMH, and The Sun. He received Dean’s Award for Industrial Collaborations in 2019 in recognition of his work with the industry/defence.</p>
                        </Col>
                    </Row>
                </Container>
                <Container>

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
                </Container>
            </OverviewArea>

        </main>
        <Footer />
    </Layout>
)

export default CyberAI