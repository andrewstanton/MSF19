import React from "react"
import styled, { css } from "styled-components"
import { lighten } from "polished"
import { applyStyleModifiers } from "styled-components-modifiers"

import { Wrapper, Type, Color } from "../../utilities"

const MODIFIER_CONFIG = {
  light: () => css`
    background-color: ${Color.light_grey};
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    h7,
    h8 {
      color: ${Color.blue};
    }
  `,
}

const SPIKE_MODIFERS_CONFIG = {
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

const StyledSection = styled.section`
  padding: 2em 1em;
  background-color: ${Color.white};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h7,
  h8 {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    font-family: ${Type.header};
    text-align: center;
    color: ${Color.orange};
  }

  ${applyStyleModifiers(MODIFIER_CONFIG)};
`

export const SpikeSectionBox = styled.div`
  padding: 2em;
  background-color: ${Color.white};
  border-width: 6px;
  border-style: solid;
  max-width: 50%;
  transition: all 0.2s ease;
`

export const SpikeSection = styled.div`
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

    .${SpikeSectionBox.styledComponentId} {
      transform: scale(1.1);
    }
  }

  ${applyStyleModifiers(SPIKE_MODIFERS_CONFIG)}
`

export const Section = ({ children, ...props }) => (
  <StyledSection {...props}>
    <Wrapper>{children}</Wrapper>
  </StyledSection>
)
