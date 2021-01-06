import React from "react"
import Layout from "../components/layout"
import Section from "../components/Section"
import Spotify from "../components/spotify"
import Skills from "../components/skills"
import HeroSocials from "../components/hero-socials"
import "../components/index.css"

const IndexPage = () => (
  <div id="home-page">
    <div className="Hero">
    <div className="Padding">
      <div className="HeroGroup">
      <div className="HeroTextGroup">
        <p>Hey, my name is</p>
        <h1>Vincent <span className="lastName">Spitale</span></h1>
        <p>I am a student, software engineer, and diversity advocate</p>
        <HeroSocials />
      </div>

      <img src={require('../images/me.jpg')}/>
      </div>
      </div>
      
    
    </div>

    <div className="Padding">
    <div className="InfoSections">

    <Section>
        <Spotify />
      <br/>
      <h3>My Skills</h3>
       <Skills />
      </Section>
      <Section>
      <div className="Important">
      <p>I'm a <a href="https://pronoun.is/he?or=they" target="_blank">
      <span className="Proud">he/they</span></a> studying computer science and mathematics at Northeastern University. 
      <br/>
      <br/>
      Outside of class, I experiment with app development and augmented reality tech. I've found AR to be a perfect way for me to bring togther my love for visual and technical detail. I also lead workshops that aim to make the tech industry accessible and inviting to everyone. I'm currently in charge of design at <a href="https://numulti.com" target="_blank">MULTI</a>, Northeastern's undergraduate students for diversity & inclusion in tech.
      <br/>
      <br/>
      If you think I might be the right fit for a role, please reach out.
      </p>
      </div>
      </Section>
      
    </div>
    </div>

    
    </div>
)

export default IndexPage
 