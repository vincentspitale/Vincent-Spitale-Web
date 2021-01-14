import React from "react"
import './section.css'

const Section = ({ children }) => (
  <div className="SectionPadding">
  <div className="Section">
    <div>{children}</div>
  </div>
  </div>
)


export default Section

