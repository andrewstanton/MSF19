import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layouts/Layout"
import HomeBanner from "../components/elements/HomeBanner"

import { Section } from "../components/styles/elements"
import { Color } from "../components/styles/utilities"

const IndexPage = () => (
  <Layout>
    <HomeBanner />
    <Section background={Color.white}>Content Will Go Within Here Boi</Section>
    <Section background={Color.light_grey}>
      Content Will Go Within Here Boi
    </Section>
  </Layout>
)

export default IndexPage
