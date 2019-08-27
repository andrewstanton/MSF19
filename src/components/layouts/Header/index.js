import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { darken } from "polished"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"

import * as moment from "moment"

import Navbar from "../Navbar"
import { Color, Type, Wrapper, Media } from "../../utilities"

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

  ${Media.below.mobile`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 1em;
    text-align: center;
  `}
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

  .social {
    padding-top: 0.25rem;
    &-fb {
      font-size: 1.5rem;
    }

    a {
      color: ${Color.white};
      &:hover {
        color: ${darken("0.3", Color.blue)};
      }
    }
  }

  ${Media.below.tablet`
    grid-template-columns: 1fr;
  `}
`

const Header = ({ siteMetadata = {} }) => {
  const { dates, title, nav, social } = siteMetadata
  const { start, end } = dates

  const startDate = moment(start.date, "MM/DD/YYYY").format("MMMM Do, YYYY"),
    endDate = moment(end.date, "MM/DD/YYYY").format("MMMM Do, YYYY")

  return (
    <>
      <StyledHeader>
        <StyledWrapper>
          <Link to="/">
            <img src={logo} className="logo" alt={title} />
          </Link>
          <HeaderRight>
            <div>
              <span className="bold-date">{startDate}</span> {start.time}
              <br />
              <span className="bold-date">{endDate}</span> {end.time}
            </div>
            <div className="mt-hidden">
              Follow Us:
              <br />
              <div className="social">
                <a href={social.facebook}>
                  <FontAwesomeIcon
                    icon={faFacebookSquare}
                    className="social-fb"
                  />
                </a>
              </div>
            </div>
          </HeaderRight>
        </StyledWrapper>
      </StyledHeader>
      <Navbar nav={nav} />
    </>
  )
}

export default Header
