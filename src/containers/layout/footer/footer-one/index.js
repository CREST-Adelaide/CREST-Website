import React from 'react'
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby"
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram, TiSocialLinkedin, TiSocialYoutube } from "react-icons/ti";
import parse from 'html-react-parser'
import { Container } from 'react-bootstrap'
import Logo from '../../../../assets/images/logo/dark-logo-150.png'
import gplayImage from '../../../../assets//images/icons/aeroland-button-google-play.jpg'
import appImage from '../../../../assets//images/icons/aeroland-button-app-store.jpg'
import { Row, Col } from '../../../../components/ui/wrapper'
import Text from '../../../../components/ui/text'
import Anchor from '../../../../components/ui/anchor'
import Button from '../../../../components/ui/button'
import Heading from '../../../../components/ui/heading'
import Social, { SocialLink } from '../../../../components/ui/social'
import {
    FooterWrap,
    FooterTop,
    FooterWidget,
    LogoWidget,
    TextWidget,
    FooterWidgetList,
    FooterBottom
} from './footer.style'

const Footer = ({ copyrightStyle, ...props }) => {
    const siteInfo = useStaticQuery(graphql`
        query FooterSiteQuery {
            site {
                siteMetadata {
                    copyright
                    contact {
                        phone
                        email
                        address
                        website
                    }
                    social {
                        facebook
                        twitter
                        instagram
                        linkedin
                        youtube
                    }
                }
            }
        }      
    `)
    const { phone, email, address, website } = siteInfo.site.siteMetadata.contact;
    const { copyright } = siteInfo.site.siteMetadata;
    const { facebook, twitter, instagram, linkedin, youtube } = siteInfo.site.siteMetadata.social;
    return (
        <FooterWrap {...props}>
            <FooterBottom>
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="text-center text-md-left">
                            <LogoWidget>
                                <img src={Logo} alt="Logo" />
                            </LogoWidget>
                            {copyright && <Text {...copyrightStyle}>&copy; {new Date().getFullYear()} {parse(copyright)}</Text>}
                        </Col>
                        <Col md={6} className="text-center text-md-right">
                            <Social space="8px" tooltip={true} shape="rounded" varient="outlined">
                                {twitter && (
                                    <SocialLink
                                        path={twitter}
                                        title="Twitter">
                                        <TiSocialTwitter />
                                    </SocialLink>
                                )}
                                {/* {facebook && (
                                    <SocialLink
                                        path={facebook}
                                        title="Facebook">
                                        <TiSocialFacebook />
                                    </SocialLink>
                                )}
                                {instagram && (
                                    <SocialLink
                                        path={instagram}
                                        title="Instagram">
                                        <TiSocialInstagram />
                                    </SocialLink>
                                )} */}
                                {linkedin && (
                                    <SocialLink
                                        path={linkedin}
                                        title="Linkedin">
                                        <TiSocialLinkedin />
                                    </SocialLink>
                                )}
                                {youtube && (
                                    <SocialLink
                                        path={youtube}
                                        title="Youtube">
                                        <TiSocialYoutube />
                                    </SocialLink>
                                )}
                            </Social>
                        </Col>
                    </Row>
                </Container>
            </FooterBottom>
        </FooterWrap>
    )
}

Footer.propTypes = {
    bgcolor: PropTypes.string,
    reveal: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

Footer.defaultProps = {
    bgcolor: '#F8F8F8',
    reveal: 'false',
    copyrightStyle: {
        responsive: {
            small: {
                pb: '15px'
            }
        }
    }
};

export default Footer
