import React from "react"
import styled from "styled-components"

import { Color, Type } from "../../utilities"

export const Banner = styled.div`
  background: ${props => `url(${props.image})` || "grey"};
  background-position: ${props => props.position || "center center"};
  overflow: hidden;
  background-size: cover;
  height: ${props => props.height || "auto"};
`

export const HomeBanner = ({ children, ...props }) => (
  <Banner {...props}>{children}</Banner>
)

const StyledInnerBanner = styled(Banner)`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  h2 {
    font-family: ${Type.header};
    color: ${Color.white};
    font-size: 4rem;
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.9);
    line-height: 120%;
  }
`

export const InnerBanner = ({ children, height = "250px", ...props }) => (
  <StyledInnerBanner height={height} {...props}>
    {children}
  </StyledInnerBanner>
)
