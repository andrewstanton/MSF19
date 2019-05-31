import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { hsl } from "polished"

import Layout from "../components/layouts/Layout"

import { HomeBanner, Section, ButtonHTMLLink } from "../components/elements"
import {
  Flex,
  Col,
  AlignCenter,
  Media,
  Embed,
  SEO,
} from "../components/utilities"

import parade from "../images/activities/parade.jpg"

const ParadeSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div:first-child {
    text-align: center;
  }

  img {
    max-width: 450px;
    border-radius: 100%;
    max-height: 300px;
  }

  .info {
    padding: 0 2rem;
  }

  ${Media.below.desktop`
    img {
      max-width: 300px;
    }
  `}

  ${Media.below.tablet`
      flex-wrap: wrap;

      img {
        max-width: 100%;
      }

      >div {
        flex: 100%;
      }
    `}
`
const particles = 50
const width = 500
const height = 500

const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min)) + min

const boxShadows = () => {
  let shadow = ""
  let shadow2 = ""
  for (let i = 0; i < particles; i++) {
    if (i !== 0) {
      shadow += `, `
      shadow2 += `, `
    }
    shadow += `${randomNumber(1, width) - width / 2}px ${randomNumber(height) -
      height / 1.2}px ${hsl(randomNumber(1, 360), 1, 0.5)}`
    shadow2 += `0 0 #fff`
  }
  return { shadow, shadow2 }
}

const MainTextCol = styled(Col)`
  padding: 2.5rem;
  margin-left: 1rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Maumee Summer Fair | Celebrate 41 Years Of Summer Fun With Us!" />
    <HomeBanner fwShadow={boxShadows()} />
    <Section>
      <Flex>
        <Col>
          <h2>2018 Summer Fair Commerical</h2>
          <Embed>
            <iframe
              src="https://www.youtube.com/embed/dcvOBHy11vA"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </Embed>
        </Col>
        <MainTextCol>
          <p>
            The annual <Link>Maumee Summer Fair</Link> is held each August on
            beautifully tree-lined streets in the historic uptown district of
            Maumee, Ohio. In addition to 150 arts &amp; crafts booths, we have a
            popular Kid’s Zone featuring bounce houses and inflatables,
            caricature artist and face painting, a classic car show, and family
            entertainment throughout the day on Saturday.
            <br />
            <br />
            On Friday &amp; Saturday evening we have regional bands rocking the
            night for the 21-and-older crowd in the Beer Garden adjacent to the
            Taste of Maumee food vendors. Join us for a fun-filled weekend in
            uptown Maumee. Presented by the Maumee Uptown Business Association.
          </p>
        </MainTextCol>
      </Flex>
    </Section>
    <Section modifiers="light">
      <ParadeSection>
        <div>
          <img src={parade} />
        </div>
        <div className="info">
          <h2>2019 Parade - Come One, Come All - Circus</h2>
          The parade theme is here, and participants can sign up now. Please
          follow the link below and download a copy of the 2018 Maumee Summer
          Fair parade participate form
          <AlignCenter>
            <ButtonHTMLLink
              href="http://maumeesummerfair.com/pdfs/2019-parade.pdf"
              target="_blank"
              modifiers="borderBlue"
              marginTop="20px"
            >
              Download Parade Participant Form
            </ButtonHTMLLink>
          </AlignCenter>
        </div>
      </ParadeSection>
    </Section>
  </Layout>
)

export default IndexPage
