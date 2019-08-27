import React from "react"

import Layout from "../components/layouts/Layout"
import { SEO, AlignCenter } from "../components/utilities"
import { Section } from "../components/elements"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Not Found - Maumee Summer Fair | Celebrate Summer Fun With Us!" />
    <Section>
      <h1>404 NOT FOUND</h1>
      <AlignCenter>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </AlignCenter>
    </Section>
  </Layout>
)

export default NotFoundPage
