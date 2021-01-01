import React, {Component} from "react"
import { StaticQuery, graphql } from "gatsby"
import './skills.css'

function skills(data) {
    const skills = []
    data.allSkillsJson.edges.forEach(item =>
        skills.push(
        <div className="Tag">
        <p>{item.node.name}</p>
        </div>
        ))
        return skills
  }

const Skills = ({ }) => (

    <StaticQuery
      query={graphql`
        query SkillsQuery {
          allSkillsJson {
            edges {
              node {
                  name
              }
            }
          }
        }
      `}
      render={data => <div className="Tags">{skills(data)}</div>}
    />
)

export default Skills;