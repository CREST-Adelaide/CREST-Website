import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Blog from '../../../components/blog/area'
import Pagination from '../../../components/blog/pagination'
import { BlogWrapper, BlogBox } from './blog-area.style'
import ContactArea from '../../global/contact-area/contact-two'

const AreaAreaResearch = ({ blogBoxStyle }) => {
    const AreaQuery = useStaticQuery(graphql`
        query ListAreaQuery {
            allMarkdownRemark(
                sort: {fields: frontmatter___date, order: DESC}
                filter: {frontmatter: {type: {eq: "area"}}}
                ) {
                totalCount
                edges {
                    node {
                        frontmatter {
                            categories
                            title
                            author {
                                name
                                image {
                                    childImageSharp {
                                        fixed(width: 32, height: 32, quality: 100) {
                                            ...GatsbyImageSharpFixed_withWebp
                                        }
                                    }
                                }
                            }
                            bg_image {
                                childImageSharp {
                                    fluid(maxHeight: 720, maxWidth: 1920, quality: 100) {
                                        ...GatsbyImageSharpFluid_tracedSVG
                                    }
                                }
                            }
                            format
                            quote_text
                            quote_author
                            video_link
                            research_area
                            main_content
                            date(formatString: "LL")
                            featured_image {
                                childImageSharp {
                                    fluid(maxWidth: 770, maxHeight: 420, quality: 100) {
                                        ...GatsbyImageSharpFluid_withWebp
                                        presentationHeight
                                        presentationWidth
                                    }
                                }
                            }
                        }
                        fields {
                            slug
                            authorId
                            dateSlug
                        }
                        excerpt
                    }
                }
            }
        }      
    `)
    const blogs = AreaQuery.allMarkdownRemark.edges;
    const { totalCount } = AreaQuery.allMarkdownRemark;
    const postsPerPage = 6;
    const numberOfPages = Math.ceil(totalCount / postsPerPage);
    // console.log(blogs)
    return (

        blogs.map(blog => (
            <ContactArea content={blog.node} />

            // <BlogBox key={blog.node.fields.slug}>
            //     <Blog content={blog.node} />
            // </BlogBox>
        ))
    )
}


export default AreaAreaResearch;