import React from "react"
import styled from "styled-components"

import Layout from "../components/layouts/Layout"

import { InnerBanner, Section } from "../components/elements"
import { SEO, Color, AlignRight } from "../components/utilities"

import banner from "../images/banners/fair.png"
import map from "../images/summer-fair-map-2019.jpg"

const StyledMap = styled.div`
  text-align: center;
  margin-top: 2rem;

  img {
    max-width: 100%;
    border: 5px solid ${Color.white};
  }
`

const FairGuidePage = () => (
  <Layout>
    <SEO title="Fair Guide -Maumee Summer Fair | Celebrate Summer Fun With Us!" />
    <InnerBanner image={banner}>
      <h2>Summer Fair Guide</h2>
    </InnerBanner>
    <Section modifiers="light">
      <h2>MSF 2019 Map</h2>
      <a href="https://maumeesummerfair.com/pdfs/2019-map.pdf" target="_blank">
        <div>Click To Enlarge The Map</div>
        <StyledMap>
          <img src={map} alt="Maumee Summer Fair 2019 Map" />
        </StyledMap>
      </a>
    </Section>
    <Section>
      <h2>List Of This Year's Events</h2>
    </Section>
  </Layout>
)

export default FairGuidePage
