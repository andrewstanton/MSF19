import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import * as moment from "moment"

import { Color, Wrapper, Flex, Col, Type } from "../../utilities"

const StyledFooter = styled.div`
  background-color: ${Color.grey};
  color: ${Color.white};
  padding: 3rem 0 5rem 0;
  font-size: 0.9rem;
  line-height: 200%;

  a {
    text-decoration: none;
    color: ${Color.white};
    &:hover {
      text-decoration: underline;
      color: ${Color.white};
    }
  }

  .sponsor-container {
    margin-top: 1.5rem;
  }
`

const StyledFooterLink = styled(Link)`
  font-family: ${Type.header};
  font-size: 1rem;
  margin: 0.5rem 0;
`

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const StyledHeading = styled.h3`
  font-family: ${Type.header};
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
`

const SecondaryHeading = styled(StyledHeading)`
  font-size: 1.25rem;
`

const SponsorGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`

const Footer = ({ siteMetadata, sponsors = {} }) => {
  const { nav } = siteMetadata
  const year = moment().format("YYYY")
  return (
    <StyledFooter>
      <Wrapper>
        <Flex>
          <Col>
            <StyledHeading>Maumee Summer Fair</StyledHeading>
            <div>
              Hosted By{" "}
              <a href="https://www.maumeeuptown.com" target="_blank">
                Maumee Uptown Business Association
              </a>
            </div>
            <div>
              Website By{" "}
              <a href="http://toddprod.com" target="_blank">
                Todd Productions Inc.
              </a>
            </div>
          </Col>
          <Col>
            <FooterLinks>
              <StyledFooterLink to="/">Home</StyledFooterLink>
              {nav.map(link => (
                <StyledFooterLink to={link.url}>{link.label}</StyledFooterLink>
              ))}
            </FooterLinks>
          </Col>
        </Flex>
        <div className="sponsor-container">
          <SecondaryHeading>Thank You {year} Sponsors</SecondaryHeading>
          <SponsorGrid>
            {sponsors.edges.map(sponsor => (
              <div>
                <img src={`images/${sponsor.node.img}`} />
              </div>
            ))}
          </SponsorGrid>
        </div>
      </Wrapper>
    </StyledFooter>
  )
}

export default Footer
