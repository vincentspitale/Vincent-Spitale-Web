import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">About</Link>
      <Link to="/projects/">Projects</Link>
      </div>
  </div>
)


export default Header
