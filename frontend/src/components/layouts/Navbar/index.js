import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Wrapper } from "../../styles/elements"
import { Color, Type } from "../../styles/utilities"

const StyledNavbar = styled.nav`
  background: ${Color.grey};
  color: ${Color.white};
  border-bottom: 3px solid ${Color.white};
`

const StyledWrapper = styled(Wrapper)`
  display: flex;
`

const StyledLink = styled(Link)`
  text-align: center;
  flex-basis: 0;
  flex-grow: 1;
  padding: 1rem;
  color: ${Color.white};
  text-decoration: none;
  font-family: ${Type.header};
  font-size: 1.4em;
  &:hover {
    background: ${Color.orange};
  }
`

const Navbar = () => (
  <StyledNavbar>
    <StyledWrapper>
      <StyledLink>Fair Guide</StyledLink>
      <StyledLink>Fair Guide</StyledLink>
      <StyledLink>Fair Guide</StyledLink>
      <StyledLink>Fair Guide</StyledLink>
      <StyledLink>Fair Guide</StyledLink>
    </StyledWrapper>
  </StyledNavbar>
)

export default Navbar
