import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "../Header"
import Footer from "../Footer"

import { GlobalStyles } from "../../elements"
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
            dates {
              start {
                date
                time
              }
              end {
                date
                time
              }
            }
            social {
              facebook
            }
            nav {
              label
              url
            }
          }
        }
        allSponsorsJson {
          edges {
            node {
              name
              img
              background
              url
            }
          }
        }
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              publicURL
              base
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <GlobalStyles />
        <Header siteMetadata={data.site.siteMetadata} />
        <Body>
          {typeof children === "function"
            ? children({ siteMetadata: data.site.siteMetadata })
            : children}
        </Body>
        <Footer
          siteMetadata={data.site.siteMetadata}
          sponsors={data.allSponsorsJson}
          images={data.allFile.edges}
        />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
