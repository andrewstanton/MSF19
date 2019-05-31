import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layouts/Layout"

import { HomeBanner, Section, ButtonHTMLLink } from "../components/elements"
import { Flex, Col, AlignCenter, Embed, SEO } from "../components/utilities"

import parade from "../images/activities/parade.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Maumee Summer Fair | Celebrate 41 Years Of Summer Fun With Us!" />
    <HomeBanner />
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
        <div className="marginTextCol">
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
        </div>
      </Flex>
    </Section>
    <Section modifiers="light">
      <div className="paradeSection">
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
      </div>
    </Section>
  </Layout>
)

export default IndexPage
