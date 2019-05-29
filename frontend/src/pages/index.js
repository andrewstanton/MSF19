import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layouts/Layout"

import { HomeBanner, Section, Button } from "../components/elements"
import { Flex, Col, AlignCenter, Media } from "../components/utilities"

import parade from "../images/activities/parade.jpg"

const ParadeSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 450px;
    border-radius: 100%;
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

const IndexPage = () => (
  <Layout>
    <HomeBanner />
    <Section>
      <Flex>
        <Col>
          <h2>2018 Summer Fair Commerical</h2>
        </Col>
        <Col>
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
        </Col>
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
            <Button modifiers="borderBlue" marginTop="20px">
              Download Parade Participant Form
            </Button>
          </AlignCenter>
        </div>
      </ParadeSection>
    </Section>
  </Layout>
)

export default IndexPage
