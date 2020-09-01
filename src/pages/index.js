import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Hi, I'm Vincent.</h1>
        <p>I study computer science at Northeastern University.</p>
      </div>
    
    </div>
    
  </Layout>
)

export default IndexPage
