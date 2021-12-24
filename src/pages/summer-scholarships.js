import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-three'
import SubHeader from '../containers/layout/header/header-three/subheader'
import Footer from '../containers/layout/footer/footer-one'
import HeroArea from '../containers/index-processing/hero-area'
import Project1 from '../containers/global/funfact-area/section-three/summer-1'
import Project2 from '../containers/global/funfact-area/section-three/summer-2'
import Project3 from '../containers/global/funfact-area/section-three/summer-3'
import Project4 from '../containers/global/funfact-area/section-three/summer-4'
import Project5 from '../containers/global/funfact-area/section-three/summer-5'
import { Container, Row, Col } from '../components/ui/wrapper'
import { TwitterTimelineEmbed, TwitterTweetEmbed, TwitterOnAirButton } from "react-twitter-embed";

const IcdmPage = ({ pageContext, location }) => (
    <Layout location={location}>
        <SEO title="CREST Summer Scholarships" />
        <Header />
        {/* <PageHeader
            pageContext={pageContext}
            location={location}
            title="ICDM2021 Workshop"
        /> */}
        <main className="site-wrapper-reveal">
            <HeroArea />
            <br />
            {/* <SubHeader /> */}
            {/* <AboutArea />
            <FeaturesArea /> */}
            <div id="project1"><Project1 /></div>
            <div id="project2"><Project2 /></div>
            <div id="project3"><Project3 /></div>
            <div id="project4"><Project4 /></div>
            <div id="project5"><Project5 /></div>
            <Container>

                <Row>
                    <h3>Students' sharing</h3>

                </Row>
            </Container>
            <br />

            <Container>

                <Row>
                    <Col lg={12}>
                        <Row>
                            <Col md={4} sm={12}>
                                <TwitterTweetEmbed
                                    tweetId={'1472711940518539267'} />
                            </Col>
                            <Col md={4} sm={12}>
                                <TwitterTweetEmbed
                                    tweetId={'1471991240509976577'} />
                            </Col>
                            <Col md={4} sm={12}>
                                <TwitterTweetEmbed
                                    tweetId={'1471323216341651457'} />
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </main>
        <Footer />
    </Layout>
)

export default IcdmPage