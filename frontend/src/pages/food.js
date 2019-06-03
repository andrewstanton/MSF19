import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { darken } from "polished"

import Layout from "../components/layouts/Layout"

import { InnerBanner, Section } from "../components/elements"
import { Wrapper, Color, Type, SEO, Media } from "../components/utilities"

import banner from "../images/banners/food.jpg"
import badge from "../images/taste.png"

const FoodBannerWrapper = styled(Wrapper)`
  box-sizing: border-box;
  padding: 1em 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  img {
    max-height: 100%;
    padding: 0 4rem;
  }

  ${Media.below.tablet`
    img {
      display: none;
    }

    h2 {
      text-align:center;
    }
  `}
`

const VendorGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;

  ${Media.below.desktop`
    grid-template-columns: 1fr 1fr 1fr;
  `}

  ${Media.below.tablet`
    grid-template-columns: 1fr 1fr;
  `}

  ${Media.below.mobile`
    grid-template-columns: 1fr;
  `}
`

const VendorCol = styled.a`
  display: block;
  text-align: center;
  font-family: ${Type.header};
  font-size: 1.5rem;
`

const VendorImg = styled.div`
  border-radius: 100%;
  overflow: hidden;
  background-color: ${props => props.background};
  border: 1px solid ${darken("0.2", Color.white)};
  margin-bottom: 1.5rem;
  transition: all 0.2s ease;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
    background-image: ${props => `url(${props.image})`};
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 85%;
  }

  &:hover {
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
    transform: scale(1.1);
  }
`

const FoodVendors = () => (
  <StaticQuery
    query={graphql`
      query FoodVendor {
        allFoodJson {
          edges {
            node {
              img
              name
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
    render={data => {
      const food = data.allFoodJson.edges
      const images = data.allFile.edges
      return (
        <Section>
          <VendorGrid>
            {food.map((vendor, ix) => {
              const img = images.find(img => img.node.base === vendor.node.img)
              return (
                <VendorCol href={vendor.node.url} target="_blank" key={ix}>
                  <VendorImg
                    image={img.node.publicURL}
                    background={vendor.node.background}
                  />
                  {vendor.node.name}
                </VendorCol>
              )
            })}
          </VendorGrid>
        </Section>
      )
    }}
  />
)

const FoodPage = () => (
  <Layout>
    <SEO title="Taste Of Maumee Food - Maumee Summer Fair | Celebrate 41 Years Of Summer Fun With Us!" />
    <InnerBanner image={banner} height="400px">
      <FoodBannerWrapper>
        <img src={badge} />
        <h2>Taste Of Maumee</h2>
      </FoodBannerWrapper>
    </InnerBanner>
    <Section>
      The <strong>Taste of Maumee</strong> features Restaurants that are located
      in the City of Maumee. This Restaurant Row opens on West Dudley Street on
      Friday night. It then opens again on Saturday just in time for lunch.
      <strong>Taste of Maumee Hours:</strong> Friday 5pm – 11:30pm and Saturday
      11am – 11:30pm
    </Section>
    <FoodVendors />
  </Layout>
)

export default FoodPage
