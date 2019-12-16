import React from "react"
import styled from "styled-components"
import { darken } from "polished"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layouts/Layout"

import { InnerBanner, Section, ButtonHTMLLink } from "../components/elements"
import { SEO, Media, Color, Type } from "../components/utilities"

import banner from "../images/banners/fair.png"

const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin-top: 2rem;

  ${Media.below.tablet`
    grid-template-columns: 1fr;
  `}
`

const Alert = styled.div`
  padding: 1.5rem;
  text-align: center;
  background: ${Color.orange};
  border: 5px solid ${darken(0.3, Color.orange)};
  border-radius: 5px;
  color: ${Color.white};
  margin-top: 2rem;
  font-family: ${Type.header};
  font-size: 1.5rem;

  a {
    color: ${darken(0.3, Color.orange)};
  }
`

const InfoRegistrationPage = () => (
  <Layout>
    <SEO title="Information & Registration - Maumee Summer Fair | Celebrate Summer Fun With Us!" />
    <InnerBanner image={banner}>
      <h2>Information / Registration</h2>
    </InnerBanner>
    <Section>
      <p>
        All emails to:{" "}
        <a href="mailto: info@maumeesummerfair.com">
          info@maumeesummerfair.com
        </a>{" "}
        will be answered within 24 hours and prefered. Please respect the access
        to this contact number if really needed. Most questions / issues can be
        answered via e-mail. Thank you!!!
        <br />
        <br />
        Emergency contact only: <strong>Mike Dibling</strong> 419-345-4500
      </p>
      <Alert>
        UPDATE: Vendor Booth Applications From 07/26 Are Based On Availability.
        <br />
        Email Us At{" "}
        <a href="mailto: info@maumeesummerfair.com">
          info@maumeesummerfair.com
        </a>{" "}
        To See If Spots Are Available.
      </Alert>
    </Section>
    <Section modifiers="light">
      <h2>Registration Forms</h2>
      <StaticQuery
        query={graphql`
          query LinkQuery {
            allFormsJson {
              edges {
                node {
                  label
                  link
                }
              }
            }
          }
        `}
        render={data => {
          const links = data.allFormsJson.edges
          return (
            <LinkGrid>
              {links.map((link, ix) => (
                <ButtonHTMLLink
                  modifiers="borderBlue"
                  href={link.node.link}
                  target="_blank"
                  key={ix}
                >
                  {link.node.label}
                </ButtonHTMLLink>
              ))}
            </LinkGrid>
          )
        }}
      />
    </Section>
  </Layout>
)

export default InfoRegistrationPage
