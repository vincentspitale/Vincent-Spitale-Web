/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, data }) => (

      <div>
        <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample'},
          { name: 'keywords', content: 'sample, something'}
        ]}
        />
        <Header />
        {children()}
        <footer>
          Vincent Spitale © {new Date().getFullYear()}
        </footer>
      </div>
  )


Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
  `