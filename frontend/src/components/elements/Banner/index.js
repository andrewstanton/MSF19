import React from "react"
import styled from "styled-components"

import { Color, Type } from "../../utilities"
import { BannerButton } from "../../elements"
import { StyledHomeBanner, HomeOverlay, Banner } from "../BannerStyles"

import city from "../../../images/svg/city.svg"
import grass from "../../../images/svg/grass.svg"

import balloons from "../../../images/svg/balloons.svg"

import cloud1 from "../../../images/svg/cloud-1.svg"
import cloud2 from "../../../images/svg/cloud-2.svg"
import cloud3 from "../../../images/svg/cloud-3.svg"

import car1 from "../../../images/svg/car-truck.svg"
import car2 from "../../../images/svg/car-purple.svg"
import car3 from "../../../images/svg/car-red.svg"

export const HomeBanner = ({ children, ...props }) => (
  <StyledHomeBanner {...props} className="homebanner">
    <HomeOverlay className="homebanner_overlay">
      <div className="overlay_text">
        <h3>
          It's That Time Again!
          <br />
          Northwest Ohio's best fair
        </h3>
        <h1>August 9th - 10th</h1>
      </div>
      <div className="overlay_buttons">
        <BannerButton
          modifiers={["white", "colorBlue", "hoverBlue", "large"]}
          to="/art-crafts"
        >
          Local Art / Crafts
        </BannerButton>
        <BannerButton
          modifiers={["white", "colorOrange", "hoverOrange", "large"]}
          to="/food"
        >
          Delicious Food
        </BannerButton>
        <BannerButton
          modifiers={["white", "colorOrange", "hoverOrange", "large"]}
          to="/music"
        >
          Enjoyable Music
        </BannerButton>
        <BannerButton
          modifiers={["white", "colorBlue", "hoverBlue", "large"]}
          to="/activities"
        >
          Fun Activites
        </BannerButton>
      </div>
    </HomeOverlay>
    <div className="fw">
      <div className="before" />
      <div className="after" />
    </div>

    <div className="looseBalloon looseBalloon--1" />
    <div className="looseBalloon looseBalloon--2" />
    <div className="looseBalloon looseBalloon--3" />
    <img src={city} className="city" alt={``} />
    <img src={grass} className="grass" alt={``} />
    <img src={balloons} className="balloons balloons--1" alt={``} />
    <img src={balloons} className="balloons  balloons--2" alt={``} />
    <img src={balloons} className="balloons  balloons--3" alt={``} />
    <img src={cloud1} className="cloud cloud--1" alt={``} />
    <img src={cloud2} className="cloud cloud--2" alt={``} />
    <img src={cloud3} className="cloud cloud--3" alt={``} />
    <img src={cloud1} className="cloud cloud--5" alt={``} />
    <img src={cloud2} className="cloud cloud--6" alt={``} />
    <img src={cloud3} className="cloud cloud--7" alt={``} />
    <img src={car1} className="car car--1" alt={``} />
    <img src={car2} className="car car--2" alt={``} />
    <img src={car3} className="car car--3" alt={``} />
  </StyledHomeBanner>
)

const StyledInnerBanner = styled(Banner)`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  h2 {
    font-family: ${Type.header};
    color: ${Color.white};
    font-size: 4rem;
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.9);
    line-height: 120%;
  }
`

export const InnerBanner = ({ children, height = "250px", ...props }) => (
  <StyledInnerBanner height={height} {...props}>
    {children}
  </StyledInnerBanner>
)
