import * as React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making the following using the Gatsby Tutorial</p>
      <StaticImage src="../images/Grogu.webp" alt="Grogu Image"></StaticImage>
    </Layout>
  )
}

export default IndexPage