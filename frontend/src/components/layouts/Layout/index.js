import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "../Header"

import GlobalStyles from "../../elements/GlobalStyles"
import { Color } from "../../utilities"

const Body = styled.div`
  background: ${Color.white};
  line-height: 200%;

  a {
    color: ${Color.blue};
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Body>{children}</Body>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
