import React from "react"
import styled from "styled-components"
import { lighten, darken } from "polished"

import Layout from "../components/layouts/Layout"

import reg from "../images/bands/rega.jpg"
import isuns from "../images/bands/isuns.jpg"
import dlies from "../images/bands/dirty-lies.jpg"
import drd from "../images/bands/down-river-dan.jpg"
import kentucky from "../images/bands/kentucky-chrome.jpg"
import shakin from "../images/bands/shakin-shivers.jpg"
import hayden from "../images/bands/jt-hayden.jpg"
import shutters from "../images/bands/shutters.jpg"

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
    <SEO title="Parking Lot Party & MaumeePalooza - Maumee Summer Fair | Celebrate Summer Fun With Us!" />
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
                <span className="name">The Cinnamon, Larry Ensemble</span>
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
      <h2>Parking Lot Party - Friday Evening</h2>

      <SpikeSection modifiers={["blue", "right"]}>
        <SpikeSectionBox>
          <h2>Down River Dan</h2>
          <h4>5:00pm - 8:00pm</h4>
          <p>
            With his electrified blues and rock music Dan has been entertaining
            crowds and performing everywhere from bars and restaurants, to
            street fairs and summer festivals since playing his first open mic
            night at age 16.
          </p>
          <br />
          <ButtonHTMLLink
            href="https://www.facebook.com/1DownRiverDan/"
            target="_blank"
            rel="noopener noreferrer"
            modifiers={["borderBlue"]}
          >
            Like On Facebook
          </ButtonHTMLLink>
        </SpikeSectionBox>
        <div>
          <img src={drd} alt={``} />
        </div>
      </SpikeSection>
      <SpikeSection modifiers={["orange", "left"]}>
        <div>
          <img src={kentucky} alt={``} />
        </div>
        <SpikeSectionBox>
          <h2>Kentucky Chrome</h2>
          <h4>Friday 8:30pm - MIDNIGHT</h4>
          <p>
            Music for everyone! Rock and roll, rockabilly, old school country,
            and honky tonk from the Rust Belt, USA.
          </p>
          <br />
          <ButtonHTMLLink
            href="https://www.facebook.com/kentuckychromeband/"
            target="_blank"
            rel="noopener noreferrer"
            modifiers={["borderOrange"]}
          >
            Like On Facebook
          </ButtonHTMLLink>
        </SpikeSectionBox>
      </SpikeSection>
    </Section>

    <Section>
      <h2>MaumeePalooza - Saturday Afternoon</h2>

      <SpikeSection modifiers={["blue", "right"]}>
        <SpikeSectionBox>
          <h2>The Cinnamon, Larry Ensemble </h2>
          <h4>EMCEE</h4>
          <p>
            The master of ceremonies hosting this year's MaumeePalooza stage.
            <br />
            The name says it all.
          </p>
          <br />
          <ButtonHTMLLink
            href="https://www.facebook.com/cinnamonlarryensemble/"
            target="_blank"
            rel="noopener noreferrer"
            modifiers={["borderBlue"]}
          >
            Like On Facebook
          </ButtonHTMLLink>
        </SpikeSectionBox>
      </SpikeSection>

      <SpikeSection modifiers={["orange", "left"]}>
        <SpikeSectionBox>
          <h2>Maumee Community Band</h2>
          <h4>Saturday 10:30am - 12:00pm</h4>
          <p>
            The Maumee Community Band, supported and sanctioned by the{" "}
            <a
              href="http://www.maumee.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              City of Maumee
            </a>
            , is dedicated to making a positive contribution to the musical
            environment of the area it serves. Utilizing the skill and talents
            of an all-volunteer membership, the Maumee Community Band seeks to
            provide an opportunity for individual musical expression, enjoyment,
            and growth among its members; to provide an opportunity for contact
            among area musicians; to enrich the activities of the community it
            serves; and to reconfirm the position of the community concert band
            in American music.
          </p>
        </SpikeSectionBox>
      </SpikeSection>

      <SpikeSection modifiers={["blue", "right"]}>
        <SpikeSectionBox>
          <h2>The Shakin' Shivers</h2>
          <h4>Saturday 12:30 - 1:10pm</h4>
          <p>
            A Blues/Rock Duo from the Toledo, Ohio area. Everything they play
            has been co-written by both members of the band. Every last bit of
            their music is completely based on feelings and vibes. They have set
            no musical boundaries for themselves. They just play what they feel.
          </p>
          <br />
          <ButtonHTMLLink
            href="https://www.facebook.com/theshakinshivers/"
            target="_blank"
            rel="noopener noreferrer"
            modifiers={["borderBlue"]}
          >
            Like On Facebook
          </ButtonHTMLLink>
        </SpikeSectionBox>
        <div>
          <img src={shakin} alt={``} />
        </div>
      </SpikeSection>

      <SpikeSection modifiers={["orange", "left"]}>
        <div>
          <img src={hayden} alt={``} />
        </div>
        <SpikeSectionBox>
          <h2>JT Hayden</h2>
          <h4>Saturday 1:25pm - 2:05pm</h4>
          <p>
            J.T Hayden is a multi talented singer/songwriter who has been
            playing music ever since the age of six. He has written a wide
            selection of songs with styles ranging from pop/country, to pop/rock
            & alternative rock. His original music was produced by the artist
            himself.
          </p>
          <br />
          <ButtonHTMLLink
            href="https://www.facebook.com/thejthaydenproject/"
            target="_blank"
            rel="noopener noreferrer"
            modifiers={["borderOrange"]}
          >
            Like On Facebook
          </ButtonHTMLLink>
        </SpikeSectionBox>
      </SpikeSection>

      <SpikeSection modifiers={["blue", "right"]}>
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
            <br />
            <ButtonHTMLLink
              href="https://www.facebook.com/kidzb4/"
              target="_blank"
              rel="noopener noreferrer"
              modifiers={["borderBlue"]}
            >
              Like On Facebook
            </ButtonHTMLLink>
          </p>
        </SpikeSectionBox>
        <div>
          <img src={dlies} alt={``} />
        </div>
      </SpikeSection>

      <SpikeSection modifiers={["orange", "left"]}>
        <div>
          <img src={isuns} alt={``} />
        </div>
        <SpikeSectionBox>
          <h2>Identical Suns</h2>
          <h4>Saturday 3:15pm - 4:00pm</h4>
          <p>
            Identical Suns is an act consisting of members from California and
            Ohio. This band consists of many years of musical experience ranging
            from rock to classical music.
            <br />
            <br />
            In 2015, the band released their self-titled debut on CD The only
            rule to the creation of the music is that there are no rules. Each
            song is an entity of it's own, and has no regard to any genre.
            <br />
            <br />
            Identical Suns released their follow up album just this year (2019)
            entitled "WEEK MINDED" and has an impressive 14 brand new original
            songs. They are excited to play some of those new songs this year on
            the MaumeePalooza stage.
            <br />
            <br />
            Identical Suns original music has played on various internet and
            radio stations through out the United States and a few other
            countries. Their music is available on all the streaming and
            download services.
            <br />
            <br />
            This is the 6th year that Identical Suns have played the
            MaumeePalooza stage. In addition to their appearances in Ohio, they
            have appeared in California and have also played on Stage-It, a live
            performance website.
          </p>
          <br />
          <ButtonHTMLLink
            href="http://identicalsuns.com"
            target="_blank"
            rel="noopener noreferrer"
            modifiers={["borderOrange"]}
          >
            Visit Website
          </ButtonHTMLLink>
        </SpikeSectionBox>
      </SpikeSection>
    </Section>

    <Section modifiers="light">
      <h2>Parking Lot Party - Saturday Night</h2>
      <SpikeSection modifiers={["blue", "right"]}>
        <SpikeSectionBox>
          <h2>Chris Shutters Band</h2>
          <h4>Saturday 5:00pm - 7:00pm</h4>
          <p>
            2-time BSBS National Blues Champion, Songwriter and Producer, Chris
            Shutters (33). Tours internationally with 7 world tours under his
            belt. He has two albums, ‘A World Apart’ (2009) and ‘Laugh and Roll
            the Moon’ (2013). Shutters is currently working on his 3rd and 4th
            albums. He released a live album with his band, November 2017. It’s
            called, ‘Live at Howard’s’ in Bowling Green, OH. Soon he will
            release his first blues album with collaborations with Chicago blues
            legend, Jimmy Burns. He will also release an album with Corky Laing
            from ‘Mountain’ this year. Shutters is also expected to release a
            collaborative album with Kofi Baker, son of Ginger Baker from
            ‘Cream’.
            <br />
            <br />
            Shutters was awarded ‘Best Artist’ in three different cities in the
            US. Four times in Toledo, OH, once in Chicago, IL (2010 and was
            nominated for a second in 2012) and Austin, TX (2013). He is
            currently working on another US tour along with his 8th world tour.
          </p>
          <br />
          <ButtonHTMLLink
            href="https://www.facebook.com/ChrisShuttersFanPage/"
            target="_blank"
            rel="noopener noreferrer"
            modifiers={["borderBlue"]}
          >
            Like On Facebook
          </ButtonHTMLLink>
        </SpikeSectionBox>
        <div>
          <img src={shutters} alt={``} />
        </div>
      </SpikeSection>

      <SpikeSection modifiers={["orange", "left"]}>
        <div>
          <img src={reg} alt={``} />
        </div>
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
            rel="noopener noreferrer"
            modifiers="borderOrange"
          >
            Visit Website
          </ButtonHTMLLink>
        </SpikeSectionBox>
      </SpikeSection>
    </Section>
  </Layout>
)

export default MusicPage
