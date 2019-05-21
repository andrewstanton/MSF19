import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { Color, Wrapper, Flex, Col, Type } from "../../utilities"

const StyledFooter = styled.div`
  background-color: ${Color.grey};
  color: ${Color.white};
  padding: 3rem 0 5rem 0;
  font-size: 0.9rem;

  a {
    text-decoration: none;
    color: ${Color.white};
    &:hover {
      text-decoration: underline;
      color: ${Color.white};
    }
  }
`

const StyledHeading = styled.h3`
  font-family: ${Type.header};
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
`

const Footer = () => (
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
          <div>Website By Todd Productions Inc.</div>
        </Col>
        <Col>Page Links Go Here</Col>
      </Flex>
    </Wrapper>
  </StyledFooter>
)

export default Footer
