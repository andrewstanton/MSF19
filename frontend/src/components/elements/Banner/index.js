import React from "react"
import styled from "styled-components"

export const Banner = styled.div`
  background: ${props => `url(${props.image})` || "grey"};
  background-position: ${props => props.position || "center center"};
  overflow: hidden;
  background-size: cover;
  height: ${props => props.height || "auto"};
`

export const HomeBanner = () => <Banner>Hello</Banner>

export const InnerBanner = () => <div />
