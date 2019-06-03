import React from "react"

import Layout from "../components/layouts/Layout"

import { InnerBanner, Section } from "../components/elements"
import { SEO } from "../components/utilities"

import banner from "../images/banners/fair.png"

const ArtCraftPage = () => (
  <Layout>
    <SEO title="Arts & Crafts - Maumee Summer Fair | Celebrate 41 Years Of Summer Fun With Us!" />
    <InnerBanner image={banner}>
      <h2>Local Crafts Vendor</h2>
    </InnerBanner>
    <Section>
      <h2>More To Come!</h2>
    </Section>
  </Layout>
)

export default ArtCraftPage
