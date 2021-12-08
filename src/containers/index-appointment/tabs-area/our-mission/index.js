import React, { useState } from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser';
import { MdDone, MdChevronRight } from "react-icons/md";
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col } from '../../../../components/ui/wrapper'
import VideoButton from '../../../../components/ui/video-button'
import ModalVideo from '../../../../components/ui/modal-video'
import Text from '../../../../components/ui/text'
import Button from '../../../../components/ui/button'
import List, { ListItem } from '../../../../components/ui/list'
import Image from '../../../../components/image'
import { OurMissionWrap, OurMissionImageWrap, MissionContentWrap, VideoBtnWrap, ButtonWrap } from './our-mission.style'

const OurMission = ({ textStyle, buttonStyle }) => {

    const HeroData = useStaticQuery(graphql`
    query ProcessingStu1Query {
        indexProcessingJson(id: {eq: "summer-scholarship-project1"}) {
            title
            student
            studentemail
            studentphoto {
                childImageSharp {
                  fluid(maxWidth: 1920, maxHeight: 768, quality: 100) {
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



    const { title, student, studentphoto, studentprofile} = HeroData.indexProcessingJson;
    return (
        <OurMissionWrap>
            <Row>
                <Col lg={6}>
                    <OurMissionImageWrap>
                        <Image fluid={studentphoto.childImageSharp.fluid} alt="Our Mission" align="left" />
                        {/* <VideoBtnWrap>
                            <VideoButton skin="primary" onClick={modalVideoOpen} />
                        </VideoBtnWrap> */}
                    </OurMissionImageWrap>
                </Col>
                <Col lg={{ span: 5, offset: 1 }}>
                    <MissionContentWrap>
                        


                    </MissionContentWrap>
                </Col>
            </Row>

        </OurMissionWrap>
    )
}

OurMission.propTypes = {
    textStyle: PropTypes.object,
    buttonStyle: PropTypes.object
}

OurMission.defaultProps = {
    textStyle: {
        fontSize: '18px',
        mb: '30px'
    },
    buttonStyle: {
        varient: 'texted',
        fontWeight: 400,
        hover: "false"
    }
}

export default OurMission;