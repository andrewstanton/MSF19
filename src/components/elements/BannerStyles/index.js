import styled, { keyframes } from "styled-components"
import { linearGradient, lighten, darken } from "polished"

import { Color, Type, Media } from "../../utilities"

export const Banner = styled.div`
  background: ${props => `url(${props.image})` || "grey"};
  background-position: ${props => props.position || "center center"};
  overflow: hidden;
  background-size: cover;
  height: ${props => props.height || "auto"};
`

const dayToNight = keyframes`
  0%, 75%, 100% {
    background-position: 0% 100%;
  }
  80%, 95% {
    background-position: 0% 0%;
  }
`

export const StyledHomeBanner = styled(Banner)`
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
`

export const HomeOverlay = styled.div`
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
