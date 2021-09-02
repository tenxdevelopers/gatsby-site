import * as React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = ({data}) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {
                    data.allFile.nodes.map((node, idx) => {
                        return (
                            <li key={idx}>
                                {node.name}
                            </li>
                        )
                    })
                }
            </ul>
        </Layout>
    )
}

export const query = graphql `
query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage