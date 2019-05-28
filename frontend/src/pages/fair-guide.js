import React from "react"

import Layout from "../components/layouts/Layout"

import { InnerBanner, Section } from "../components/elements"

import banner from "../images/banners/fair.png"

const FairGuidePage = () => (
  <Layout>
    <InnerBanner image={banner}>
      <h2>Summer Fair Guide</h2>
    </InnerBanner>
    <Section>
      <h2>Summer Fair Guide Soon To Come...</h2>
    </Section>
  </Layout>
)

export default FairGuidePage
