import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Footer.css'
import Socials from '../socials/socials'

const Footer = ({ }) => (
  <div className="Footer">

    <p>Vincent Spitale © {new Date().getFullYear()}</p>
    <Socials svgWidth="30"/>
  </div>
)


export default Footer
