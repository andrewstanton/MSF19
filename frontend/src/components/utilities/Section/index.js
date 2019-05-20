import React from "react"
import styled from "styled-components"

import { Wrapper } from "../Wrapper"
import { Type } from "../Type"

const StyledSection = styled.section`
  padding: 2em 1em;
  background-color: ${props => props.background || "none"};

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
    color: ${props => props.heading || "inherit"};
  }
`
export const Section = ({ children, background, heading }) => (
  <StyledSection background={background} heading={heading}>
    <Wrapper>{children}</Wrapper>
  </StyledSection>
)
