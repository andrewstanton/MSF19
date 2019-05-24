import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Color, Type, Wrapper } from "../../utilities"

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
  align-items: center;
  display: flex;
  padding: 1rem;
  justify-content: center;
  color: ${Color.white};
  text-decoration: none;
  font-family: ${Type.header};
  font-size: 1.25em;
  transition: all 0.2s ease-in-out;
  position: relative;
  z-index: 10;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    transition: all 0.3s ease-in-out;
    z-index: -1;
    background-color: ${Color.orange};
  }

  &:hover {
    color: ${Color.white};
    transform: scale(1.2);
    border-radius: 10px;

    &:before {
      height: 400px;
      width: 400px;
    }
  }
`

const Navbar = ({ nav }) => (
  <StyledNavbar>
    <StyledWrapper>
      {nav.map(link => (
        <StyledLink to={link.url}>{link.label}</StyledLink>
      ))}
    </StyledWrapper>
  </StyledNavbar>
)

export default Navbar
