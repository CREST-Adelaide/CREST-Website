import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { FaCalendarAlt, FaCommentDots, FaQuoteRight } from "react-icons/fa";
import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin, TiSocialInstagram } from "react-icons/ti";
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-three'
import Footer from '../../containers/layout/footer/footer-one'
import Section, { Box, Row, Col } from '../../components/ui/wrapper'
import SEO from "../../components/seo"
import PageHeader from '../../components/pageheader'
import Heading from '../../components/ui/heading'
import Text from '../../components/ui/text'
import Image from '../../components/image'
import Social, { SocialLink } from '../../components/ui/social'
import PostNav from '../../components/post-nav/layout-two'
import Categories from '../../components/blog/categories'
import Tags from '../../components/blog/tags'
import AuthorMeta from '../../components/blog/author-meta'
import BlogMeta from '../../components/blog/blog-meta'
import SocialShare from '../../components/blog/social-share'
import VideoThumb from '../../components/blog/video-thumb'
import ModalVideo from '../../components/ui/modal-video'
import Comment from '../../components/blog/comment'

import {
    SingleBlogWrap,
    BlogMedia,
    Thumbnail,
    Blockquote,
    CategoryBox,
    BlogInfo,
    HeaderMetaWrap,
    FooterMetaWrap,
    AuthorWrap,
    AuthorInfo,
    AuthorAvatar,
    AuthorDesc,
    BlogNavigation
} from './blog-template.stc'

const BlogTemplate = ({ data, pageContext, location, ...restProps }) => {
    const post = data.markdownRemark.frontmatter;
    const { html } = data.markdownRemark;
    const { id, dateSlug } = data.markdownRemark.fields;
    const { categories, tags, author, video_link } = post;
    const { slug, authorId, next, previous } = pageContext;
    let video_arr, video_id, video_channel;
    if (video_link) {
        video_arr = video_link.split('=', -1);
        video_id = video_arr[1];
        video_channel = video_link.split(".")[1];
    }
    const {
        sectionStyle,
        titleStyle,
        headerMetaStyle,
        authorStyles: { authorSocial, authorDesc } } = restProps;

    const [videoOpen, setVideoOpen] = useState(false);
    const modalVideoOpen = () => {
        setVideoOpen(true)
    }
    const modalVideoClose = () => {
        setVideoOpen(false)
    }

    // console.log(post.title);
    // console.log(post.date);
    // console.log(post.author1);
    // console.log(post.author1_image);
    return (
        <Layout location={location}>
            <Header />
            <SEO title={post.title} />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title={post.title}
            />
            <main className="site-wrapper-reveal">
                <Section {...sectionStyle}>
                    <Row>
                        <Col lg={12}>
                            <BlogMedia>
                                {post.format === 'image' && (
                                    <Thumbnail>
                                        <Image fluid={post.featured_image.childImageSharp.fluid} alt={post.title} />
                                    </Thumbnail>
                                )}
                                {post.format === 'quote' && (
                                    <Blockquote>
                                        <FaQuoteRight className="quote-icon" />
                                        {post.quote_text && <h3>“{post.quote_text}”</h3>}
                                        {post.quote_author && <footer>- {post.quote_author}</footer>}
                                    </Blockquote>
                                )}
                                {post.format === 'video' && (
                                    <VideoThumb
                                        onClick={modalVideoOpen}
                                        poster={post.featured_image.childImageSharp.fluid}
                                        title={post.title}
                                    />
                                )}
                            </BlogMedia>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={11} ml="auto" mr="auto">
                            <SingleBlogWrap>

                                <div className="post-content" dangerouslySetInnerHTML={{ __html: html }} />
                                <br />
                                <br />
                                <Box as="footer">
                                    {post.type == 'project' && <FooterMetaWrap>
                                        <Row alignitems="center">
                                            <Col sm={6}>
                                                {/* <Tags tags={tags} /> */}
                                            </Col>
                                            <Col sm={6}>
                                                <SocialShare
                                                    title={post.title}
                                                    url={slug}
                                                />
                                            </Col>
                                        </Row>
                                    </FooterMetaWrap>}


                                    {post.type == 'project' && <AuthorWrap>
                                        <h4>Project Coordinator</h4>
                                        <br />
                                        <AuthorInfo>
                                            <AuthorAvatar>
                                                <Image fluid={post.author1_image.childImageSharp.fluid} alt={post.author1} />
                                                {post.author1 && <Heading as="h6">{post.author1}</Heading>}
                                            </AuthorAvatar>
                                        </AuthorInfo>
                                        

                                    </AuthorWrap>}

                                    {/* {(post.type !== "area" && post.type !== "resources" && post.type !== "pages") && <AuthorWrap>
                                        <AuthorInfo>
                                            <AuthorAvatar>
                                                <Image fluid={author.image.childImageSharp.fluid} alt={author.name} />
                                                {author.socials && (
                                                    <Social {...authorSocial}>
                                                        {author.socials.twitter && (
                                                            <SocialLink
                                                                path={author.socials.twitter}
                                                                label="Twitter">
                                                                <TiSocialTwitter />
                                                            </SocialLink>
                                                        )}
                                                        {author.socials.facebook && (
                                                            <SocialLink
                                                                path={author.socials.facebook}
                                                                label="Facebook">
                                                                <TiSocialFacebook />
                                                            </SocialLink>
                                                        )}
                                                        {author.socials.linkedin && (
                                                            <SocialLink
                                                                path={author.socials.linkedin}
                                                                label="Linkedin">
                                                                <TiSocialLinkedin />
                                                            </SocialLink>
                                                        )}
                                                        {author.socials.instagram && (
                                                            <SocialLink
                                                                path={author.socials.instagram}
                                                                label="Instagram">
                                                                <TiSocialInstagram />
                                                            </SocialLink>
                                                        )}
                                                    </Social>
                                                )}
                                            </AuthorAvatar>
                                            <AuthorDesc>
                                                {author.name && <Heading as="h6">{author.name}</Heading>}
                                                {author.bio && <Text {...authorDesc}>{author.bio}</Text>}
                                            </AuthorDesc>
                                        </AuthorInfo>
                                    </AuthorWrap>} */}

                                    <BlogInfo>
                                        {/* <CategoryBox>
                                        <Categories categories={categories} />
                                    </CategoryBox>
                                    {post.type !== "area" && <Heading {...titleStyle}>{post.title}</Heading>} */}

                                        <HeaderMetaWrap>
                                            {/* {(post.date && (post.type !== "area" && post.type !== "resources" && post.type !== "pages")) && (
                                            <AuthorMeta
                                                {...headerMetaStyle}
                                                slug={authorId}
                                                name={author.name}
                                                imageSrc={author.image.childImageSharp}
                                            />
                                        )} */}
                                            {(post.date && (post.type !== "area" && post.type !== "project" && post.type !== "resources" && post.type !== "pages")) && (
                                                <BlogMeta
                                                    {...headerMetaStyle}
                                                    path={`/date/${dateSlug}`}
                                                    text={post.date}
                                                    icon={<FaCalendarAlt />}
                                                />
                                            )}
                                            {/* <BlogMeta
                                            {...headerMetaStyle}
                                            path={`/`}
                                            text={`4 Comments`}
                                            icon={<FaCommentDots />}
                                        /> */}
                                        </HeaderMetaWrap>
                                    </BlogInfo>

                                    {/* {(post.type !== "area" && post.type !== "resources") && <BlogNavigation>
                                        {previous && (
                                            <PostNav
                                                rel="prev"
                                                path={previous.fields.slug}
                                                title={previous.frontmatter.title}
                                                image={previous.frontmatter.featured_image ? previous.frontmatter.featured_image.childImageSharp.fluid : null}
                                            />
                                        )}
                                        {next && (
                                            <PostNav
                                                rel="next"
                                                path={next.fields.slug}
                                                title={next.frontmatter.title}
                                                image={next.frontmatter.featured_image ? next.frontmatter.featured_image.childImageSharp.fluid : null}
                                            />
                                        )}
                                    </BlogNavigation>} */}

                                </Box>
                            </SingleBlogWrap>
                        </Col>
                        
                    </Row>
                    {/* {(post.type !== "area" && post.type !== "resources") && <Row>
                        <Col lg={8} ml="auto" mr="auto">
                            <Comment
                                url={slug}
                                id={id}
                                title={post.title}
                            />
                        </Col>
                    </Row>} */}

                </Section>
            </main>
            <Footer />
            <ModalVideo
                channel={video_channel}
                videoId={video_id}
                isOpen={videoOpen}
                onClose={modalVideoClose}
            />
        </Layout>
    )
}

BlogTemplate.propTypes = {
    sectionStyle: PropTypes.object
}

BlogTemplate.defaultProps = {
    sectionStyle: {
        pt: '120px',
        pb: '120px',
        responsive: {
            large: {
                pt: '100px',
                pb: '100px'
            },
            medium: {
                pt: '80px',
                pb: '80px'
            },
            small: {
                pt: '60px',
                pb: '60px',
                fullwidth: true
            }
        }
    },
    titleStyle: {
        as: 'h1',
        fontSize: '40px',
        textalign: 'center',
        mb: '15px',
        wordwrap: 'break-word',
        responsive: {
            medium: {
                fontSize: '35px'
            },
            small: {
                fontSize: '25px'
            }
        }
    },
    headerMetaStyle: {
        mt: '10px',
        mr: '20px'
    },
    authorStyles: {
        authorSocial: {
            fontSize: '13px',
            color: '#333',
            space: 14
        },
        authorDesc: {
            mt: '15px',
            fontSize: '15px',
            color: '#333'
        }
    }
}

export const postQuery = graphql`
    query($slug: String!){
        markdownRemark(fields: {slug: {eq: $slug}}){
            fields {
                dateSlug
                id
            }
            frontmatter {
                title
                categories
                date(formatString: "LL")
                tags
                type
                author1
                author1_image {
                    childImageSharp {
                      fluid(maxWidth: 100, maxHeight: 100, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                        presentationWidth
                        presentationHeight
                      }
                    }
                }
            }
            html
        }
    }
`;

export default BlogTemplate;