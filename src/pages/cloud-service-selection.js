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
import Button from '../components/ui/button'
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
        <SEO title="Long-term Cloud Service Selection using Short-term Trials" />
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
                        <img src="https://imageio.forbes.com/specials-images/imageserve/5f9fa9e815da35da1356a28b/The-5-Biggest-Cloud-Computing-Trends-In-2021/960x0.jpg?format=jpg&width=960" alt={"Long-term Cloud Service Selection using Short-term Trials"} style={{ width: "100%", height: 600, objectFit: "cover" }} />
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
                        {/* <Col lg={12}>
                            <img src="https://pbs.twimg.com/media/FNShXjHaMAEs22c?format=jpg&name=large"></img>
                        </Col> */}
                    </Row>
                    <Row>
                        <Col lg={8}>
                            <ClientBox>
                                <Heading style={{
                                    as: 'h6',
                                    fontweight: '500',
                                    mb: '.25rem'
                                }}>{"Dr. Sheik Mohammad Mostakim Fattah"}</Heading>
                            </ClientBox>
                        </Col>
                        <Col lg={4}>

                            <Social style={{
                                color: '#ababab',
                                fontSize: '15px',
                                tooltip: true,
                                tooltip_position: 'bottom-left',
                                marginTop: 80,
                            }}>
                                <SocialLink path="https://scholar.google.com/citations?user=IOe5upYAAAAJ&hl=en" title="google scholar"><SiGooglescholar /></SocialLink>
                                <SocialLink path="https://au.linkedin.com/in/sheik-mohammad-mostakim-fattah-30814a7b" title="linkedin"><FaLinkedinIn /></SocialLink>
                            </Social>

                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <br />
                            <p style={{
                                fontSize: '24px',
                                lineHeight: 1.43,
                                fontweight: 400,
                            }}>
                                Abstract: There are two primary subscription models for IaaS cloud services: a) pay-as-you and b) reservation. Reservation-based subscriptions are typically offered for a long-term period such as 1 to 3 years. Long-term subscriptions are cost-efficient than short-term subscriptions for consumers who need services for a long-term period. Large organizations such as airline companies, banks, and research institutes tend to utilize IaaS services on a long-term basis for economic reasons. The performance of IaaS services is a key criterion to consider when selecting a service for a long-term. Selecting a service that may exhibit poor performance in the future may cause a significant loss of revenue for a business organization. Most IaaS providers however are reluctant to provide detailed information about their long-term service performance. We present a novel long-term cloud service selection framework where IaaS providers reveal limited performance information about their services. The proposed framework leverages free short-term trials to help consumer in making an informed decision.
                            </p>

                            <br />

                            <p style={{
                                fontSize: '24px',
                                lineHeight: 1.43,
                                fontweight: 400,
                            }}>
                                Bio: Dr. Sheik Mohammad Mostakim Fattah is a postdoctoral researcher at the Centre for Research on Engineering Software Technologies (CREST), School of Computer Science, University of Adelaide. He completed his Ph.D. in 2021 from the School of Computer Science, University of Sydney. His Ph.D. thesis focused on Long-term IaaS Cloud Service Selection. He has published research papers in several top journals and conferences such as IEEE TSC, ACM TWEB, ICSOC, IEEE ICWS, IEEE SCC, and WISE. He also served as a reviewer in several conferences and journals, including IEEE ICWS, ICSOC, IEEE TKDE, IEEE TSC, and ACM TOIT. Before starting his Ph.D., he was an assistant researcher at Korea Electronics Technology Institute (KETI). He worked on developing several IoT-based platforms for several European and Korean research projects. He completed his master's in February 2016 in Computer and Information Communication Engineering at Hankuk University of Foreign Studies, South Korea. He also worked as a research assistant in Advance Networking Lab at the same university. He completed his bachelor's degree in Computer science and Engineering from the University of Dhaka, Bangladesh. He has been awarded several scholarships, such as the School of Computer Science Research Students Excellent Prize, Research Training Program Stipend, and Faculty of Engineering Completion Scholarships.

                            </p>
                            <br />

                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Button to={"https://www.eventbrite.com.au/e/long-term-cloud-service-selection-using-short-term-trials-tickets-384344493727"}>Register</Button>
                </Container>
                <br /><br />
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
                                        tweetId={'1501001001331232771'} />
                                </Col>
                                <Col md={4} sm={12}>
                                    <TwitterTweetEmbed
                                        tweetId={'1501003233187495937'} />
                                </Col>
                                <Col md={4} sm={12}>
                                    <TwitterTweetEmbed
                                        tweetId={'1501049212997607427'} />
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