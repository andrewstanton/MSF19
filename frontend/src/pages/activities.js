import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { lighten } from "polished"
import { applyStyleModifiers } from "styled-components-modifiers"

import Layout from "../components/layouts/Layout"

import { InnerBanner, ButtonHTMLLink, Section } from "../components/elements"
import { Color } from "../components/utilities"

import banner from "../images/banners/activity.jpg"
import carshow from "../images/activities/carshow.jpg"
import bike from "../images/activities/bmx2.jpg"
import kidzone from "../images/activities/kidzone.jpg"
import iceinice from "../images/activities/iceinice.png"
import beer from "../images/activities/craftbeer.jpg"
import parade from "../images/activities/parade.jpg"

const ActivityBox = styled.div`
  padding: 2em;
  background-color: ${Color.white};
  border-width: 6px;
  border-style: solid;
  max-width: 50%;
  transition: all 0.2s ease;
`

const MODIFERS_CONFIG = {
  orange: () => css`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    h7 {
      color: ${Color.orange};
    }

    &:before {
      background-color: ${lighten("0.1", Color.orange)};
    }

    .${ActivityBox.styledComponentId} {
      border-color: ${lighten("0.1", Color.orange)};
    }
  `,

  blue: () => css`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    h7 {
      color: ${Color.blue};
    }

    &:before {
      background-color: ${lighten("0.1", Color.blue)};
    }

    .${ActivityBox.styledComponentId} {
      border-color: ${lighten("0.1", Color.blue)};
    }
  `,

  left: () => css`
    &:before {
      transform: translate(-50%, -50%) skewX(-35deg) skewY(5deg);
    }
  `,

  right: () => css`
    &:before {
      transform: translate(-50%, -50%) skewX(-35deg) skewY(-5deg);
    }
  `,
}

const ActivitySection = styled.div`
  position: relative;
  z-index: 10;
  margin-top: 2rem;
  margin-bottom: 3rem;
  display: flex;
  align-content: center;
  justify-content: space-around;
  align-items: center;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h7 {
    text-align: inherit;
    margin: 0;
    margin-bottom: 0.5rem;
  }

  img {
    max-width: 500px;
    max-height: 350px;
    border-radius: 100%;
  }

  img.no-circle {
    border-radius: 0;
  }

  &:before {
    content: "";
    position: absolute;
    transition: all 0.5s ease;
    height: 75%;
    width: 80%;
    top: 50%;
    left: 50%;
    z-index: -1;
  }

  &:hover {
    &:before {
      width: 85%;
    }

    .${ActivityBox.styledComponentId} {
      transform: scale(1.1);
    }
  }

  ${applyStyleModifiers(MODIFERS_CONFIG)}
`

const ActivitiesPage = () => (
  <Layout>
    <InnerBanner image={banner}>
      <h2>Activities</h2>
    </InnerBanner>

    <ActivitiesLayout />
  </Layout>
)

const ActivitiesLayout = () => {
  console.log({ ActivityBox })
  return (
    <Section>
      <ActivitySection modifiers={["orange", "right"]}>
        <ActivityBox>
          <h2>Class Car Show 2019</h2>
          <h4>
            Maumee Masonic Complex &amp; <br />
            Royal Arch Masons of Ohio, District 8
          </h4>
          <em>Saturday 10am-3pm</em>
          <br />
          <br />
          <p>
            $8.00 pre-register, $10.00 day of the show.
            <br />
            Dash Plaques first 100 cars.
            <br />
            Enter Off West Wayne / Cass Street
            <br />
            <br />
            <ButtonHTMLLink modifiers="borderOrange">
              Car Show Application Here
            </ButtonHTMLLink>
          </p>
        </ActivityBox>
        <div>
          <img src={carshow} />
        </div>
      </ActivitySection>

      <ActivitySection modifiers={["blue", "left"]}>
        <div>
          <img src={bike} />
        </div>
        <ActivityBox>
          <h2>BMX DEMONSTRATION</h2>
          <h4>The Right Direction</h4>
          <em>Saturday 10am-3pm</em>
          <br />
          <br />
          <p>
            $8.00 pre-register, $10.00 day of the show.
            <br />
            Dash Plaques first 100 cars.
            <br />
            <strong>Car Show is organized by:</strong>
            <br />
            Maumee Masonic Complex &amp; Royal Arch Masons of Ohio, District 8
            <br />
            Enter Off West Wayne / Cass Street
          </p>
        </ActivityBox>
      </ActivitySection>

      <ActivitySection modifiers={["orange", "right"]}>
        <ActivityBox>
          <h2>Kid Zone</h2>
          <h4>Air Extreme Ohio</h4>
          <em>Friday 5pm to 10:30pm / Saturday 11am to 10:30pm</em>
          <br />
          <br />
          <p>
            The <strong>Maumee Summer Fair</strong> will once again bring the
            <strong>Summer Fair Kids Zone</strong> to life with inflatables and
            carnival games. Sure to be a hit with the kids is the Euro Bungy is
            always a draw. Carnival games will be organized by the Perrysburg
            Rowing Club and all proceeds will benefit the HS Rowing Program.
          </p>
        </ActivityBox>
        <div>
          <img src={kidzone} />
        </div>
      </ActivitySection>

      <ActivitySection modifiers={["blue", "left"]}>
        <div>
          <img src={iceinice} className="no-circle" />
        </div>
        <ActivityBox>
          <h2>Ice In The Ice Contest!</h2>
          <h4>By KISSFM 92.5 and Ice Creations</h4>
          <p>
            Couples register to win a spot to compete by submitting a Photo with
            short essay stating why they are… “J. Foster Jewelers Cutest Couple”
            Entries are then reviewed by KISS FM Staff and the Top 3 are chosen
            to compete. Last Chance Entry: Day of Event at the Maumee Summer
            Fair we’ll draw a random couples entry from the crowd to compete as
            well!
            <br />
            <br />
            Online Registration from 7/23-8/5 The Event to be held on Saturday,
            August 11th from noon-3pm Last Chance Registration from noon-1pm
          </p>
          <br />
          <ButtonHTMLLink
            href="https://925kissfm.iheart.com/"
            target="_blank"
            modifiers="borderBlue"
          >
            Couples Register Here
          </ButtonHTMLLink>
        </ActivityBox>
      </ActivitySection>

      <ActivitySection modifiers={["orange", "right"]}>
        <ActivityBox>
          <h2>Craft Beer Tasting</h2>
          <h4>By Treu House Of Munch</h4>
          <em>
            Saturday Noon - 5pm
            <br />
            100 Block Of West Dudley - No Cover til 5pm
          </em>
          <p>
            Come Sample several of the areas hottest Craft Beers while listening
            to <Link to="/music">Maumee Palooza Original Music Stage</Link>{" "}
            performers throughout the afternoon.
          </p>
        </ActivityBox>
        <div>
          <img src={beer} />
        </div>
      </ActivitySection>

      <ActivitySection modifiers={["blue", "left"]}>
        <div>
          <img src={parade} />
        </div>
        <ActivityBox>
          <h2>Maumee Summer Fair Parade</h2>
          <em>Saturday August 10th at 9am</em>
          <br />
          <br />
          <p>
            <strong>Theme: Come One, Come All - Circus</strong>
            <br />
            The parade theme is here, and participants can sign up now. Please
            follow the link below and download a copy of the 2018 Maumee Summer
            Fair parade participate form
          </p>
          <br />
          <ButtonHTMLLink modifiers="borderBlue">
            Parade Participant Form
          </ButtonHTMLLink>
        </ActivityBox>
      </ActivitySection>
    </Section>
  )
}

export default ActivitiesPage
