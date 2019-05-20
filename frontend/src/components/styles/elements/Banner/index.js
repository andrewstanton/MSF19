import React from "react"
import styled from "styled-components"

const StyledBanner = styled.div`
  background: ${props => `url(${props.image})` || "grey"};
  background-position: ${props => props.position || "center center"};
  overflow: hidden;
  background-size: cover;
  height: ${props => props.height || "auto"};
`

export const Banner = ({ image, position, height, children }) => (
  <StyledBanner image={image} position={position} height={height}>
    {children}
  </StyledBanner>
)
