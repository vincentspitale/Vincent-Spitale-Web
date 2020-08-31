import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Vincent Spitale</h1>
      <p>Coming soon.</p>
      <Link to="/about/">About</Link> <br />
      </div>
    
    </div>
    
  </Layout>
)

export default IndexPage
