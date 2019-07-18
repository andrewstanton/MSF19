import React from "react"
import styled from "styled-components"

import Layout from "../components/layouts/Layout"

import { InnerBanner, Section } from "../components/elements"
import { SEO, AlignCenter, AlignRight, Color } from "../components/utilities"

import banner from "../images/banners/fair.png"
import map from "../images/msf-map.jpg"

const StyledMap = styled.div`
  text-align: center;
  margin-top: 2rem;

  img {
    max-width: 100%;
    border: 10px solid ${Color.white};
    border-radius: 20%;
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
      <AlignCenter>
        <a href="" target="_blank" rel="noopener nofollow">
          Link To Detailed Map
        </a>
      </AlignCenter>
      <StyledMap>
        <img src={map} alt="Maumee Summer Fair 2019 Map" />
      </StyledMap>
    </Section>
    <Section>
      <h2>List Of This Year's Events</h2>
    </Section>
  </Layout>
)

export default FairGuidePage
