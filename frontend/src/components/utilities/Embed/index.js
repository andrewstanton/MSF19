import React from "react"
import styled from "styled-components"

export const Embed = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0;
  position: relative;
  display: block;
  height: 0;
  padding: 0;
  overflow: hidden;
  padding-bottom: 56.25%'

  > iframe {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
