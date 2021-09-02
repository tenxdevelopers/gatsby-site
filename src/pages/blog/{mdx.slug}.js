import * as React from 'react'

import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

const BlogPost = ({data}) => {    
    const img = getImage(data.mdx.frontmatter.hero_image)
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>Posted: {data.mdx.frontmatter.date}</p>
            <GatsbyImage image={img} alt={data.mdx.frontmatter.hero_image_alt}/>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    )
}



export const query = graphql `
    query ($slug: String) {
        mdx(slug: {eq: $slug}) {
          frontmatter {
            title
            hero_image_alt
            date(formatString: "MMM D, YYYY")
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          body
        }
      }
`

export default BlogPost