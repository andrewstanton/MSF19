import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layouts/Layout"

import {
  InnerBanner,
  ButtonHTMLLink,
  Section,
  SpikeSection,
  SpikeSectionBox,
} from "../components/elements"
import { SEO } from "../components/utilities"

import banner from "../images/banners/activity.jpg"
import carshow from "../images/activities/carshow.jpg"
import bike from "../images/activities/bmx2.jpg"
import kidzone from "../images/activities/kidzone.jpg"
import iceinice from "../images/activities/iceinice.png"
import beer from "../images/activities/craftbeer.jpg"
import parade from "../images/activities/parade.jpg"

const ActivitiesPage = () => (
  <Layout>
    <SEO title="Activities - Maumee Summer Fair | Celebrate Summer Fun With Us!" />
    <InnerBanner image={banner}>
      <h2>Activities</h2>
    </InnerBanner>

    <ActivitiesLayout />
  </Layout>
)

const ActivitiesLayout = () => {
  return (
    <Section>
      <SpikeSection modifiers={["orange", "right"]}>
        <SpikeSectionBox>
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
            <ButtonHTMLLink
              modifiers="borderOrange"
              href="https://maumeesummerfair.com/pdfs/2019-car-show.pdf"
              target="_blank"
            >
              Car Show Application Here
            </ButtonHTMLLink>
          </p>
        </SpikeSectionBox>
        <div>
          <img src={carshow} alt={``} />
        </div>
      </SpikeSection>

      <SpikeSection modifiers={["blue", "left"]}>
        <div>
          <img src={bike} alt={``} />
        </div>
        <SpikeSectionBox>
          <h2>BMX DEMONSTRATION</h2>
          <h4>The Right Direction</h4>
          <em>Saturday 1pm & 3pm</em>
          <br />
          <br />
          <p>
            A lot of us grew up with the opportunity to engage in action sports.
            We mountain biked, skateboarded, rode BMX, and inline skated. But
            few, if any, received support that led them to achieve professional
            status or the ability to make a living working within in those
            fields. Enter The Right Direction.
            <br />
            100 Block of East Dudley Street
          </p>
        </SpikeSectionBox>
      </SpikeSection>

      <SpikeSection modifiers={["orange", "right"]}>
        <SpikeSectionBox>
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
        </SpikeSectionBox>
        <div>
          <img src={kidzone} alt={``} />
        </div>
      </SpikeSection>

      <SpikeSection modifiers={["blue", "left"]}>
        <div>
          <img src={iceinice} className="no-circle" alt={``} />
        </div>
        <SpikeSectionBox>
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
        </SpikeSectionBox>
      </SpikeSection>

      <SpikeSection modifiers={["orange", "right"]}>
        <SpikeSectionBox>
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
        </SpikeSectionBox>
        <div>
          <img src={beer} alt={``} />
        </div>
      </SpikeSection>

      <SpikeSection modifiers={["blue", "left"]}>
        <div>
          <img src={parade} alt={``} />
        </div>
        <SpikeSectionBox>
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
          <ButtonHTMLLink
            modifiers="borderBlue"
            target="_blank"
            href="https://maumeesummerfair.com/pdfs/2019-parade.pdf"
          >
            Parade Participant Form
          </ButtonHTMLLink>
        </SpikeSectionBox>
      </SpikeSection>
    </Section>
  )
}

export default ActivitiesPage
