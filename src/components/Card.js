import React from "react"
import './Card.css'

const Card = ({ children }) => (
  <div className="CardPadding">
  <div className="Card">
    <div>{children}</div>
  </div>
  </div>
)


export default Card
