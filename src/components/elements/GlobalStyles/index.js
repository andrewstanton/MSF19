import { createGlobalStyle, keyframes } from "styled-components"
import { normalize, hsl } from "polished"

import { Color, Type, Media } from "../../utilities"

import ballon1 from "../../../images/svg/balloon-green.svg"
import ballon2 from "../../../images/svg/balloon-orange.svg"
import ballon3 from "../../../images/svg/balloon-red.svg"

const balloonArr = [ballon1, ballon2, ballon3]

const particles = 50
const width = 500
const height = 500

const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min)) + min

const boxShadows = () => {
  let shadow = ""
  let shadow2 = ""
  for (let i = 0; i < particles; i++) {
    if (i !== 0) {
      shadow += `, `
      shadow2 += `, `
    }
    shadow += `${randomNumber(1, width) - width / 2}px ${randomNumber(height) -
      height / 1.2}px ${hsl(randomNumber(1, 360), 1, 0.5)}`
    shadow2 += `0 0 #fff`
  }
  return { shadow, shadow2 }
}

// Fireworks
const fwBang = keyframes`
    to {
      box-shadow: ${boxShadows().shadow};
    }
`

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

export const GlobalStyles = createGlobalStyle`
    ${normalize()};

    @import url('https://fonts.googleapis.com/css?family=Roboto+Slab:700|Roboto:400,700&display=swap');

    body {
        background-color: ${Color.grey};
        font-family: ${Type.text};
        font-size: ${Type.basesize};
        color: ${Color.grey};
    }

    p {
        margin: 0;
    }

    h1, h2, h3, h4, h5, h6, h7, h8, h9 {
        margin: 0;
        padding: 0;
    }

    h1 {
        font-size: 2.25rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.75rem;
    }

    h4 {
        font-size: 1.5rem;
    }

    ${Media.below.mobile`
        .m-hidden {
            display: none;
        }
    `}

    ${Media.below.tablet`
        .mt-hidden {
            display: none;
        }
    `}

    
    ${Media.above.tablet`
        ${Media.below.desktop`
            .t-hidden {
                display: none;
            }
        `}
    `}

    .paradeSection {
      display: flex;
      justify-content: space-between;
      align-items: center;

      div:first-child {
        text-align: center;
      }
    
      img {
        max-width: 450px;
        border-radius: 100%;
        max-height: 300px;
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
    }

    .marginTextCol {
      padding: 2.5rem;
      margin-left: 1rem;
    }

    .homebanner {
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
              box-shadow: ${boxShadows().shadow2};
              animation: 1s ${fwBang} ease-out infinite backwards, 1s ${fwGravity} ease-in infinite backwards, 5s ${fwPosition} linear infinite backwards;
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
              animation: ${randomNumber(
                10,
                20
              )}s ${balloonRise} linear infinite;
              animation-delay: 1s;
            }
            &--2 {
              left: ${randomNumber(40, 60)}%;
              background-image: url(${balloonArr[1]});
              animation: ${randomNumber(
                10,
                20
              )}s ${balloonRise} linear infinite;
              animation-delay: 10s;
            }
        
            &--3 {
              left: ${randomNumber(60, 80)}%;
              background-image: url(${balloonArr[2]});
              animation: ${randomNumber(
                10,
                20
              )}s ${balloonRise} linear infinite;
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
    }

    .homebanner_overlay {
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
            margin-top: 1rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 10px;

            > button,
            a {
              display: inline-block;
            }
          }

          ${Media.below.tablet`
  
            h1 {
            font-size: 30px;
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
    }
`
