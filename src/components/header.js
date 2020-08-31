import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">Home</Link>
      <Link to="/about/">About</Link>
      <Link to="/work/">Work</Link>
      </div>
  </div>
)


export default Header
