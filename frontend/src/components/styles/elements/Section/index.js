import React from "react"
import styled from "styled-components"

import { Wrapper } from "../Wrapper"

const StyledSection = styled.section`
  padding: 1em;
  background-color: ${props => props.background || "none"};
`
export const Section = ({ children, background }) => (
  <StyledSection background={background}>
    <Wrapper>{children}</Wrapper>
  </StyledSection>
)
