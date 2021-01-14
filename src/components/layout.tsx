/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import Footer from "./footer/footer"
import "./global.css"
import "../components/index.css"

const Layout = ({children}) => {

      return (<div className="container">
        <SEO title="Vincent Spitale" />
        <div className="content">
        <main>{children}</main>
        </div>
        <Footer />
      </div>
  )
};



export default Layout


