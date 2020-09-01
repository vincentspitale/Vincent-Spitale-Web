import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Footer.css'

const Footer = ({ siteTitle }) => (
  <div className="Footer">
    Vincent Spitale © {new Date().getFullYear()}
  </div>
)


export default Footer
