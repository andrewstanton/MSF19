import React from "react"
import styled from "styled-components"
import * as moment from "moment"

import Layout from "../components/layouts/Layout"

import {
  InnerBanner,
  Section,
  SpikeSection,
  SpikeSectionBox,
  ButtonLink,
} from "../components/elements"
import { SEO, Color, Flex, Col } from "../components/utilities"

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

const FridayEvents = () => (
  <>
    <SpikeSection modifiers={["orange", "right"]}>
      <SpikeSectionBox>
        <h2>Taste Of Maumee</h2>
        <p>5pm to 11pm - West Dudley</p>
        <br />
        <ButtonLink to="/food" modifiers="borderOrange">
          See This Food Vendors
        </ButtonLink>
      </SpikeSectionBox>
    </SpikeSection>
    <Flex>
      <Col>
        <SpikeSection modifiers={["orange", "right"]}>
          <SpikeSectionBox>
            <h2>Parking Lot Party</h2>
            <h4>Bands &amp; Beer Garden</h4>
            <p>5pm to Midnight - West Dudley</p>
            <br />
            <ButtonLink to="/music" modifiers="borderOrange">
              See Friday's Band Schedule
            </ButtonLink>
          </SpikeSectionBox>
        </SpikeSection>
      </Col>
      <Col>
        <SpikeSection modifiers={["orange", "left"]}>
          <SpikeSectionBox>
            <h2>Kid Zone</h2>
            <p>5pm to 11pm - West Dudley &amp; Allen</p>
          </SpikeSectionBox>
        </SpikeSection>
      </Col>
    </Flex>
  </>
)

const SaturdayEvents = () => (
  <>
    <Flex>
      <Col>
        <SpikeSection modifiers={["blue", "left"]}>
          <SpikeSectionBox>
            <h2>Art &amp; Craft Fair / Vendors</h2>
            <p>9am to 5pm - East Dudley</p>
            <br />
            <ButtonLink to="/art-crafts" modifiers="borderBlue">
              See Vendor List
            </ButtonLink>
          </SpikeSectionBox>
        </SpikeSection>
      </Col>
      <Col>
        <SpikeSection modifiers={["blue", "right"]}>
          <SpikeSectionBox>
            <h2>Summer Fair Parade</h2>
            <p>Starts At 9am - Uptown 9:30am</p>
          </SpikeSectionBox>
        </SpikeSection>
      </Col>
    </Flex>
    <Flex>
      <Col>
        <SpikeSection modifiers={["blue", "right"]}>
          <SpikeSectionBox>
            <h2>Romick Rail Way</h2>
            <p>10am to 5pm - Gibbs &amp; Easy Dudley</p>
          </SpikeSectionBox>
        </SpikeSection>
      </Col>
      <Col>
        <SpikeSection modifiers={["blue", "left"]}>
          <SpikeSectionBox>
            <h2>Classic Car Show</h2>
            <p>10am to 3pm - Conant &amp; Broadway</p>
          </SpikeSectionBox>
        </SpikeSection>
      </Col>
    </Flex>
    <Flex>
      <Col>
        <SpikeSection modifiers={["blue", "left"]}>
          <SpikeSectionBox>
            <h2>Kids Zone</h2>
            <p>10:30am to 10pm - West Dudley &amp; Allen</p>
          </SpikeSectionBox>
        </SpikeSection>
      </Col>
      <Col>
        <SpikeSection modifiers={["blue", "right"]}>
          <SpikeSectionBox>
            <h2>MaumeePalooza</h2>
            <h4>Original Music Stage</h4>
            <p>10:30am to 4pm - West MEWS Parking Lot</p>
            <br />
            <ButtonLink to="/music" modifiers="borderBlue">
              See Saturday Afternoon Lineup
            </ButtonLink>
          </SpikeSectionBox>
        </SpikeSection>
      </Col>
    </Flex>
    <Flex>
      <Col>
        <SpikeSection modifiers={["blue", "right"]}>
          <SpikeSectionBox>
            <h2>Taste Of Maumee</h2>
            <p>11am to 11pm - West Dudley</p>
            <br />
            <ButtonLink to="/food" modifiers="borderBlue">
              See This Year's Food Vendors
            </ButtonLink>
          </SpikeSectionBox>
        </SpikeSection>
      </Col>
      <Col>
        <SpikeSection modifiers={["blue", "left"]}>
          <SpikeSectionBox>
            <h2>Ice In The Ice Contest</h2>
            <p>Noon To 3pm - Gibbs &amp; City Courtyard</p>
          </SpikeSectionBox>
        </SpikeSection>
      </Col>
    </Flex>
    <Flex>
      <Col>
        <SpikeSection modifiers={["blue", "left"]}>
          <SpikeSectionBox>
            <h2>Craft Beer Garden &amp; Tasting</h2>
            <p>Noon to 5pm - West Dudley West MEWS Parking Lot</p>
          </SpikeSectionBox>
        </SpikeSection>
      </Col>
      <Col>
        <SpikeSection modifiers={["blue", "right"]}>
          <SpikeSectionBox>
            <h2>The Right Direction</h2>
            <p>1:30pm To 3:30pm - Gibbs &amp; East Dudley</p>
          </SpikeSectionBox>
        </SpikeSection>
      </Col>
    </Flex>
    <SpikeSection modifiers={["blue", "right"]}>
      <SpikeSectionBox>
        <h2>Parking Lot Party</h2>
        <h4>Bands &amp; Beer Garden</h4>
        <p>5pm To Midnight - West Dudley</p>
        <br />
        <ButtonLink to="/music" modifiers="borderBlue">
          Wanna Know Who's Rockin' Saturday Night?
        </ButtonLink>
      </SpikeSectionBox>
    </SpikeSection>
  </>
)

const FairGuidePage = () => (
  <Layout>
    {({ siteMetadata }) => {
      const { dates } = siteMetadata
      const { start, end } = dates
      return (
        <>
          <SEO title="Fair Guide -Maumee Summer Fair | Celebrate Summer Fun With Us!" />
          <InnerBanner image={banner}>
            <h2>Summer Fair Guide</h2>
          </InnerBanner>
          <Section modifiers="light">
            <h2>MSF 2019 Map</h2>
            <a
              href="https://maumeesummerfair.com/pdfs/2019-map.pdf"
              target="_blank"
            >
              <div>Click To Enlarge The Map</div>
              <StyledMap>
                <img src={map} alt="Maumee Summer Fair 2019 Map" />
              </StyledMap>
            </a>
          </Section>
          <Section>
            <h2>
              Friday Events -{" "}
              {moment(start.date, "MM/DD/YYYY").format("MMMM Do")}
            </h2>
            <FridayEvents />
          </Section>
          <Section modifiers="light">
            <h2>
              Saturday Events -{" "}
              {moment(end.date, "MM/DD/YYYY").format("MMMM Do")}
            </h2>
            <SaturdayEvents />
          </Section>
        </>
      )
    }}
  </Layout>
)

export default FairGuidePage
