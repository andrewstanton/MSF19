import React from "react"

import Layout from "../components/layouts/Layout"

import { InnerBanner, Section, CraftVendorTable } from "../components/elements"
import { SEO } from "../components/utilities"

import banner from "../images/banners/fair.png"

const ArtCraftPage = () => (
  <Layout>
    <SEO title="Arts & Crafts - Maumee Summer Fair | Celebrate Summer Fun With Us!" />
    <InnerBanner image={banner}>
      <h2>Local Crafts Vendor</h2>
    </InnerBanner>
    <Section>
      <h2>This Year's Vendors:</h2>
      <CraftVendorTable />
    </Section>
  </Layout>
)

export default ArtCraftPage
