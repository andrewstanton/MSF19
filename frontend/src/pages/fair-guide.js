import React from "react"

import Layout from "../components/layouts/Layout"

import { InnerBanner, Section } from "../components/elements"
import { SEO } from "../components/utilities"

import banner from "../images/banners/fair.png"

const FairGuidePage = () => (
  <Layout>
    <SEO title="Fair Guide -Maumee Summer Fair | Celebrate 41 Years Of Summer Fun With Us!" />
    <InnerBanner image={banner}>
      <h2>Summer Fair Guide</h2>
    </InnerBanner>
    <Section>
      <h2>Summer Fair Guide Soon To Come...</h2>
    </Section>
  </Layout>
)

export default FairGuidePage
