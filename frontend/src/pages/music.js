import React from "react"

import Layout from "../components/layouts/Layout"

import { InnerBanner, Section } from "../components/elements"

import banner from "../images/banners/music.jpg"

const MusicPage = () => (
  <Layout>
    <InnerBanner image={banner}>
      <h2>MSF Music</h2>
    </InnerBanner>
    <Section>
      <h2>More Details Coming Soon...</h2>
    </Section>
  </Layout>
)

export default MusicPage
