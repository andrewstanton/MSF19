import React from "react"
import styled from "styled-components"
import { lighten, darken } from "polished"

import Layout from "../components/layouts/Layout"

import reg from "../images/bands/rega.jpg"
import isuns from "../images/bands/isuns.jpg"
import dlies from "../images/bands/dirty-lies.jpg"

import {
  InnerBanner,
  Section,
  SpikeSection,
  SpikeSectionBox,
  ButtonHTMLLink,
} from "../components/elements"
import { Color, Type, Flex, Col, SEO } from "../components/utilities"

import banner from "../images/banners/music.jpg"

const MusicTable = styled.table`
  margin-top: 2rem;
  border-collapse: collapse;
  width: 100%;
  border: 1px solid ${lighten("0.5", Color.grey)};
  border-bottom: none;

  tr {
    margin: 0;
    &:nth-child(even) {
      td {
        background-color: ${darken("0.05", Color.white)};
      }
    }
  }

  th {
    padding: 1rem;
    font-size: 1.5rem;
    font-family: ${Type.header};
    background-color: ${Color.blue};
    color: ${Color.white};
  }

  td {
    margin: 0;
    padding: 1.4rem;
    border-bottom: ${lighten("0.5", Color.grey)} 1px solid;
    box-sizing: border-box;
    font-size: 1rem;
    font-style: italic;

    .name {
      font-family: ${Type.header};
      font-size: 1.2rem;
      display: block;
      font-style: normal;
      color: ${Color.blue};
    }
  }
`

const PaddingCol = styled(Col)`
  padding: 0 1.5rem;
`

const MusicPage = () => (
  <Layout>
    <SEO title="Maumee Summer Fair | Celebrate 41 Years Of Summer Fun With Us!" />
    <InnerBanner image={banner}>
      <h2>MSF Music</h2>
    </InnerBanner>
    <Section>
      <Flex>
        <PaddingCol>
          <h2>MaumeePalooza</h2>
          <p>
            Maumee Palooza is the original music day time stage. Various
            bands/artists from the Northwest Ohio area to play their very own
            music. Open and free to all to enjoy during the day on Saturday!
          </p>
          <MusicTable>
            <tr>
              <td>
                <span className="name">In Between Spaces</span>
                EMCEE
              </td>
            </tr>
            <tr>
              <td>
                <span className="name">Maumee Community Band</span>
                10:30am - 12:00pm
              </td>
            </tr>
            <tr>
              <td>
                <span className="name">The Shakin' Shivers</span>
                12:30 - 1:10pm
              </td>
            </tr>
            <tr>
              <td>
                <span className="name">JT Hayden</span>
                1:25pm - 2:05pm
              </td>
            </tr>
            <tr>
              <td>
                <span className="name">Dirty Lies</span>
                2:20pm - 3:00pm
              </td>
            </tr>
            <tr>
              <td>
                <span className="name">Identical Suns</span>
                3:15pm - 4:00pm
              </td>
            </tr>
          </MusicTable>
        </PaddingCol>
        <PaddingCol>
          <h2>Parking Lot Party</h2>
          <p>
            Parking Lot Party is exactly what the title describes, a party with
            rocking cover bands! Come sing along to all your favorite songs
            while a few beers! Hope to see you at the party either on Friday or
            Saturday!
          </p>
          <MusicTable>
            <tr>
              <th>Friday</th>
            </tr>
            <tr>
              <td>
                <span className="name">Down River Dan</span>
                5:00pm - 8:00pm
              </td>
            </tr>
            <tr>
              <td>
                <span className="name">Kentucky Chrome</span>
                8:30pm - MIDNIGHT
              </td>
            </tr>
            <tr>
              <th>Saturday</th>
            </tr>
            <tr>
              <td>
                <span className="name">Chris Shutters Band</span>
                5:00pm - 7:00pm
              </td>
            </tr>
            <tr>
              <td>
                <span className="name">Reaganomics</span>
                8:30pm - MIDNIGHT
              </td>
            </tr>
          </MusicTable>
        </PaddingCol>
      </Flex>
    </Section>
    <Section modifiers="light">
      <h2>MaumeePalooza Bands</h2>
      <SpikeSection modifiers={["blue", "right"]}>
        <SpikeSectionBox>
          <h2>Identical Suns</h2>
          <h4>Saturday 3:15pm - 4:00pm</h4>
          <p>
            Identical Suns is an act consisting of members from the states of
            California and Ohio. This band consists of many years of musical
            experience ranging from rock to classical music. Identicals Suns
            original music has played on various radio stations through out the
            United States.
            <br />
            <br />
            They recently released their self-titled debut on cd (available on
            all the streaming and download services as well) and are currently
            writing & recording their follow-up. The only rule to the creation
            of the music is that there are no rules. Each song is an entity of
            it's own, and has no regard to any genre.
            <br />
            <br />
            There is another album currently in the works.
            <br />
            <br />
            This is the fifth year that Identical Suns have played the
            MaumeePalooza stage. In addition to their appearances in Ohio, they
            have appeared in California and have also played on Stage-It, a live
            performance website. Identical Suns is excited to present their new
            songs and old favorites to their hometown fans.
          </p>
          <br />
          <ButtonHTMLLink
            href="http://identicalsuns.com"
            target="_blank"
            modifiers={["borderBlue"]}
          >
            Visit Website
          </ButtonHTMLLink>
        </SpikeSectionBox>
        <div>
          <img src={isuns} />
        </div>
      </SpikeSection>
      <SpikeSection modifiers={["orange", "left"]}>
        <div>
          <img src={dlies} />
        </div>
        <SpikeSectionBox>
          <h2>Dirty Lies</h2>
          <h4>Saturday 2:20pm - 3:00pm</h4>
          <p>
            We are 3 musicians whose friendship and passion for music has lasted
            more than 40 years.
            <br />
            <br />
            We are a solid rock band with a professional sound and entertaining
            stage presence that plays a blend of award winning originals and
            seldom heard covers.
            <br />
            <br />
            Come rock with the band!
          </p>
        </SpikeSectionBox>
      </SpikeSection>
      <SpikeSection modifiers={["blue", "right"]}>
        <SpikeSectionBox>
          <h2>JT Hayden</h2>
          <h4>Saturday 1:25pm - 2:05pm</h4>
        </SpikeSectionBox>
      </SpikeSection>
      <SpikeSection modifiers={["orange", "left"]}>
        <SpikeSectionBox>
          <h2>The Shakin' Shivers</h2>
          <h4>Saturday 12:30 - 1:10pm</h4>
        </SpikeSectionBox>
      </SpikeSection>
      <SpikeSection modifiers={["blue", "right"]}>
        <SpikeSectionBox>
          <h2>Maumee Community Band</h2>
          <h4>Saturday 10:30am - 12:00pm</h4>
        </SpikeSectionBox>
      </SpikeSection>
      <SpikeSection modifiers={["orange", "left"]}>
        <SpikeSectionBox>
          <h2>In Between Spaces</h2>
          <h4>EMCEE</h4>
          <p>
            Andrew Stanton &amp; Don Gormanly are In Between Spaces. The purpose
            of In Between Spaces is simple: to rock your face off.
            <br />
            <br />
            Born right here in Maumee, Ohio as the "in between" entertainment
            for the scheduled bands. Nothing but fun happens In Between Spaces!
          </p>
          <br />
          <ButtonHTMLLink
            href="https://www.facebook.com/inbetweenspacestheband/"
            target="_blank"
            modifiers={["borderOrange"]}
          >
            Like On Facebook
          </ButtonHTMLLink>
        </SpikeSectionBox>
      </SpikeSection>
    </Section>
    <Section>
      <h2>Parking Lot Party Bands</h2>
      <SpikeSection modifiers={["blue", "right"]}>
        <SpikeSectionBox>
          <h2>Kentucky Chrome</h2>
          <h4>Friday 8:30pm - MIDNIGHT</h4>
        </SpikeSectionBox>
      </SpikeSection>
      <SpikeSection modifiers={["orange", "left"]}>
        <SpikeSectionBox>
          <h2>Down River Dan</h2>
          <h4>5:00pm - 8:00pm</h4>
        </SpikeSectionBox>
      </SpikeSection>
      <SpikeSection modifiers={["blue", "right"]}>
        <SpikeSectionBox>
          <h2>Reaganomics</h2>
          <h4>Saturday 8:30pm - MIDNIGHT</h4>
          <p>
            If rock music of the seventies was a statement of excess and
            overproduction, eighties rock only furthered those excesses. The
            best example of this musical trend was eighties New Wave, which was
            essentially modernized seventies Disco. New Wave, however,
            encompassed a wider range than the dance music that proceeded it.
            The Fixx and Duran Duran were prime examples of groups that had wide
            appeal and received substantial airplay on MTV.
            <br />
            <br />
            The Reaganomics are the midwest's most exciting 80's dance and party
            band. Based in Columbus, Ohio, The Reaganomics have become the
            area's most electrifying eighties show. With the release of their
            latest CD, "Ten", The Reaganomics have truly become the "must-see"
            act in the region.
          </p>
          <br />
          <ButtonHTMLLink
            href="http://www.reaganomics.com"
            target="_blank"
            modifiers="borderBlue"
          >
            Visit Website
          </ButtonHTMLLink>
        </SpikeSectionBox>
        <div>
          <img src={reg} />
        </div>
      </SpikeSection>
      <SpikeSection modifiers={["orange", "left"]}>
        <SpikeSectionBox>
          <h2>Chris Shutters Band</h2>
          <h4>Saturday 5:00pm - 7:00pm</h4>
        </SpikeSectionBox>
      </SpikeSection>
    </Section>
  </Layout>
)

export default MusicPage
