import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'
import resume from '../assets/Vincent-Spitale-Resume.pdf' 

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/about/">About</Link>
      <Link to="/blog/">Blog</Link>
      <Link to="/projects/">Projects</Link>
      <a href={resume} download="Vincent-Spitale-Resume.pdf">Resumé</a>
      </div>
  </div>
)


export default Header
