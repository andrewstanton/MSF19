import React from "react"
import styled, { keyframes } from "styled-components"
import { linearGradient, lighten, darken } from "polished"

import { Color, Type, Media } from "../../utilities"
import { BannerButton } from "../../elements"

import city from "../../../images/svg/city.svg"
import grass from "../../../images/svg/grass.svg"

import balloons from "../../../images/svg/balloons.svg"
import ballon1 from "../../../images/svg/balloon-green.svg"
import ballon2 from "../../../images/svg/balloon-orange.svg"
import ballon3 from "../../../images/svg/balloon-red.svg"

import cloud1 from "../../../images/svg/cloud-1.svg"
import cloud2 from "../../../images/svg/cloud-2.svg"
import cloud3 from "../../../images/svg/cloud-3.svg"

import car1 from "../../../images/svg/car-truck.svg"
import car2 from "../../../images/svg/car-purple.svg"
import car3 from "../../../images/svg/car-red.svg"

export const Banner = styled.div`
  background: ${props => `url(${props.image})` || "grey"};
  background-position: ${props => props.position || "center center"};
  overflow: hidden;
  background-size: cover;
  height: ${props => props.height || "auto"};
`
const balloonArr = [ballon1, ballon2, ballon3]

// Fireworks
const fwBang = props => {
  return keyframes`
  to {
    box-shadow: ${props.fwShadow.shadow};
  }
`
}

const fwGravity = keyframes`
  to {
    transform: translateY(200px);
    opacity: 0;
  }
`
const fwPosition = keyframes`
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%, 59.9% {  
    margin-top: 20%;
    margin-left: 70%
  }
  60%, 79.9% {  
    margin-top: 30%;
    margin-left: 20%;
  }
  80%, 99.9% {  
    margin-top: 30%;
    margin-left: 80%;
  }
`

const ballonBounce = keyframes`
  0%, 100% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(10px);
  }
`

const ballonBounceOpposite = keyframes`
  0%, 100% {
    transform: translateY(15px);
  }
  50% {
    transform: translateY(-15px);
  }
`

const carLeftToRight = keyframes`
  from {
    left: -20%;
  }
  to {
    left: 120%;
  }
`
const carRightToLeft = keyframes`
  from {
    left: 120%;
  }
  to {
    left: -20%;
  }
`

const overlayText = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const cloudLeftToRight = keyframes`
  0% {
    left: -20%;
    transform: translateY(0);
  }
  30% {
    left: 30%;
    transform: translateY(-30px);
  }
  60% {
    left: 60%;
    transform: translateY(30px);
  }
  100% {
    left: 105%;
    transform: translateY(-30deg);
  }
`

const cloudRightToLeft = keyframes`
  0% {
    left: 105%;
    transform: translateY(0);
  }
  30% {
    left: 60%%;
    transform: translateY(30px);
  }
  60% {
    left: 30%;
    transform: translateY(-30px);
  }
  100% {
    left: -20%;
    transform: translateY(30deg);
  }
`

const balloonRise = keyframes`
  0% {
    top: 100%;
    transform: translateX(5px);
  }
  50% {
    top: 50%;
    transform: translateX(0px);
  }
  100% {
    top: -10%;
    transform: translateX(-5px);
  }
`

const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min)) + min

const dayToNight = keyframes`
  0%, 75%, 100% {
    background-position: 0% 100%;
  }
  80%, 95% {
    background-position: 0% 0%;
  }
`

const StyledHomeBanner = styled(Banner)`
  ${linearGradient({
    colorStops: [
      `${lighten("0.2", Color.sky)} 0%`,
      `${Color.sky} 50%`,
      `${darken("0.9", Color.sky)} 100%`,
    ],
    toDirection: "to top",
    fallback: Color.sky,
  })}
  background-size: 400% 400%;
  transition: all 0.2 ease;
  overflow: hidden;
  height: 800px;
  position: relative;
  transform-style: perserve-3d;
  perspective: 1px;
  animation: ${dayToNight} 60s linear infinite;

  ${Media.below.tablet`
    height: 500px;
  `}

  ${Media.above.extraLarge`
    height: 50vw;
  `}

  .city {
    position: absolute;
    width: 120%;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    user-select: none;

    ${Media.below.mobile`
      bottom: 45px;
      width: 180%
    `}
  }

  .grass {
    position: absolute;
    width: 100%;
    bottom: -10%;
    z-index: 20;
    user-select: none;

    
    ${Media.below.desktop`
      bottom: -2%;
    `}

    ${Media.below.tablet`
      bottom: 0px;
    `}
  }

  .cloud {
    position: absolute;
    z-index: 5;
    opacity: 0.5;
    user-select: none;

    &--1 {
      width: 16%;
      animation: ${cloudLeftToRight} 70s linear infinite;
      top: 10%;
    }

    &--2 {
      width: 14%;
      animation: ${cloudRightToLeft} 50s linear infinite;
      top: 30%;
    }

    &--3 {
      width: 14%;
      top: 40%;
      animation: ${cloudRightToLeft} 30s linear infinite;
    }

    &--5 {
      width: 14%;
      animation: ${cloudLeftToRight} 50s linear infinite;
      top: 15%;
    }

    &--6 {
      width: 18%;
      animation: ${cloudRightToLeft} 90s linear infinite;
      top: 35%;
    }

    &--7 {
      width: 10%;
      top: 35%;
      animation: ${cloudRightToLeft} 40s linear infinite;
    }
  }

  .car {
    position: absolute;
    z-index: 15;
    width: 12%;
    bottom: 80px;

    ${Media.below.mobile`
      bottom: 65px;
    `}

    &--1 {
      animation: ${carLeftToRight} 30s ease infinite;
      left: -20%;
      animation-delay: 2s
      z-index: 16;
    }

    &--2 {
      z-index: 17;
      animation: ${carLeftToRight} 20s ease infinite;
      bottom: 60px;

      ${Media.below.mobile`
        bottom: 55px;
      `}
    }

    &--3 {
      animation: ${carRightToLeft} 20s ease infinite;
    }
  }

  .balloons {
    position: absolute;
    z-index: 12;
    animation: ${ballonBounce} 4s ease infinite;
    width: 3.5%;

    &--1 {
      bottom: 120px;
      left: 100px;
    }

    &--2 {
      bottom: 130px;
      left: 45%;
      animation: ${ballonBounceOpposite} 5s ease infinite;
    }

    &--3 {
      bottom: 125px;
      right: 100px;
    }

    ${Media.below.mobile`
      bottom: 90px;
    `}
  }

  .fw {
    > .before, > .after {
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      box-shadow: ${props => props.fwShadow.shadow2};
      animation: 1s ${props =>
        fwBang(
          props
        )} ease-out infinite backwards, 1s ${fwGravity} ease-in infinite backwards, 5s ${fwPosition} linear infinite backwards;
    }
    > .after {
      animation-delay: 1.25s, 1.25s, 1.25s;
      animation-duration: 1.25s, 1.25s, 6.25s;
    }
  }

  .looseBalloon {
    position: absolute;
    width: 20px;
    height: 80px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 9;
    top: 100%;

    &--1 {
      left: ${randomNumber(20, 40)}%;
      background-image: url(${balloonArr[0]});
      animation: ${randomNumber(10, 20)}s ${balloonRise} linear infinite;
      animation-delay: 1s;
    }
    &--2 {
      left: ${randomNumber(40, 60)}%;
      background-image: url(${balloonArr[1]});
      animation: ${randomNumber(10, 20)}s ${balloonRise} linear infinite;
      animation-delay: 10s;
    }

    &--3 {
      left: ${randomNumber(60, 80)}%;
      background-image: url(${balloonArr[2]});
      animation: ${randomNumber(10, 20)}s ${balloonRise} linear infinite;
      animation-delay: 5s;
    }

    ${Media.below.desktop`
      width: 15px;
      height: 60px;
    `}

    ${Media.below.tablet`
      width: 10px;
      height: 50px;
    `}
  }
`

const HomeOverlay = styled.div`
  position: absolute;
  top: 80px;
  text-align: center;
  color: ${Color.white};
  width: 80%;
  left: 50%;
  transform: translateX(-50%);
  font-family: ${Type.header};
  line-height: 200%;
  z-index: 200;

  h3 {
    font-size: 32px;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    animation: ${overlayText} 1s ease;
  }

  h1 {
    font-size: 56px;
    margin-top: 1rem;
    color: ${Color.blue};
    animation: ${overlayText} 1.5s ease;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
  }

  .overlay_buttons {
    margin-top: 4rem;

    > button,
    a {
      display: inline-block;
      margin-left: 5px;
      margin-right: 5px;
    }
  }

  ${Media.below.tablet`
    line-height: 150%;
    top: 35px;
  
    h1 {
      font-size: 42px;
    }
    h3 {
      font-size: 24px;
    }

    .overlay_buttons {
      margin-top: 2.5rem;

      > button, a {
        margin-left: 2px;
        margin-right: 2px;
      }
    }

  `}
`

export const HomeBanner = ({ children, ...props }) => (
  <StyledHomeBanner {...props}>
    <HomeOverlay>
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
          modifiers={["white", "colorOrange", "hoverOrange", "large"]}
          to="/food"
        >
          Delicious Food
        </BannerButton>
        <BannerButton
          modifiers={["white", "colorBlue", "hoverBlue", "large"]}
          to="/music"
        >
          Enjoyable Music
        </BannerButton>
        <BannerButton
          modifiers={["white", "colorOrange", "hoverOrange", "large"]}
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
    <img src={city} className="city" />
    <img src={grass} className="grass" />
    <img src={balloons} className="balloons balloons--1" />
    <img src={balloons} className="balloons  balloons--2" />
    <img src={balloons} className="balloons  balloons--3" />
    <img src={cloud1} className="cloud cloud--1" />
    <img src={cloud2} className="cloud cloud--2" />
    <img src={cloud3} className="cloud cloud--3" />
    <img src={cloud1} className="cloud cloud--5" />
    <img src={cloud2} className="cloud cloud--6" />
    <img src={cloud3} className="cloud cloud--7" />
    <img src={car1} className="car car--1" />
    <img src={car2} className="car car--2" />
    <img src={car3} className="car car--3" />
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
