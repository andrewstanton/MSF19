import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../layouts/Layout"

import { Section, InnerBanner } from "../../elements"

const InternalPageTemplate = ({ data }) => (
  <Layout>
    <InnerBanner />
    <Section>{data.markdownRemark.rawMarkdownBody}</Section>
  </Layout>
)

export default InternalPageTemplate

export const internalPageQuery = graphql`
  query InternalPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      rawMarkdownBody
    }
  }
`
