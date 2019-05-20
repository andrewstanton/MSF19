import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Navbar from "../Navbar"
import { Color, Type, Wrapper } from "../../utilities"

import logo from "../../../images/logo.png"

const StyledHeader = styled.header`
  background: ${Color.blue};
  padding: 1rem 0;
  color: ${Color.white};
`

const logoWidth = "250px"

const StyledWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;

  .logo {
    max-width: ${logoWidth};
  }
`

const HeaderRight = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  font-size: 0.9em;

  .bold-date {
    font-family: ${Type.header};
    font-size: 1.2rem;
  }
`

const Header = () => (
  <>
    <StyledHeader>
      <StyledWrapper>
        <Link to="/">
          <img src={logo} className="logo" />
        </Link>
        <HeaderRight>
          <div>
            <span className="bold-date">August XX</span> 5pm - 12am
            <br />
            <span className="bold-date">August XX</span> 5pm - 12am
          </div>
          <div>
            Follow Us:
            <br />
            Facebook Link
          </div>
        </HeaderRight>
      </StyledWrapper>
    </StyledHeader>
    <Navbar />
  </>
)

export default Header
