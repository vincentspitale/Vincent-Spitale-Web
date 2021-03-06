import React from "react"
import Spotify from "../components/spotify/spotify"
import Skills from "../components/skills"
import HeroSocials from "../components/socials/hero-socials"

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
    <div className="grouped-sections bottom-padding">
    <div className="flex-container flex-mobile-reverse">
    <section className="confined-section song-skills">
        <Spotify />
      <br/>
      <h3>My Skills</h3>
       <Skills />
      </section>
      <section className="confined-section">
      <div className="Important">
      <p>I'm a <a href="https://pronoun.is/he?or=they" target="_blank" rel="noopener noreferrer">
      <span className="Proud">he/they</span></a> studying computer science and mathematics at Northeastern University. 
      <br/>
      <br/>
      Outside of class, I experiment with app development and augmented reality tech. I've found AR to be a perfect way for me to bring together my love for visual and technical detail. I also lead workshops that aim to make the tech industry accessible and inviting to everyone. I'm currently in charge of design at <a href="https://numulti.com" target="_blank" rel="noopener noreferrer">MULTI</a>, Northeastern's undergraduate students for diversity & inclusion in tech.
      <br/>
      <br/>
      If you think I might be the right fit for a role, please reach out.
      </p>
      </div>
      </section>
      
    </div>
    </div>
    </div>

  
    <div className="Padding">
    <div className="grouped-sections">
    <section className="confined-mobile">
      <div className="flex-container">
      <div>
      <h2 className="">inventory</h2>
      <p className="Important">An augmented reality app that allows you to document where your belongings are located in physical space. Using LiDAR tech on recent Apple devices, I have been able to develop a custom localization system by registering point clouds. Simply scan your building once, and the app will localize your exact position in the space when using AR.</p>
      <a href="https://github.com/vincentspitale/Inventory" target="_blank" rel="noopener noreferrer" className="">See it on Github</a>
      </div>
      <div>
      <img className="project-media" src={require('../images/inventory.png')} alt="inventory app running on iPhone and iPad"/>
      </div>
      </div>
      </section>
      </div>
      </div>

<div className="multi-background">
      <div className="Padding">
    <div className="grouped-sections">
    <section className="confined-mobile">
      <div className="flex-container">
      <div>
      <h2 className="">MULTI</h2>
      <p className="Important">Serving as the design chair, I mocked up and collaboratively implemented a new site for MULTI. I also revamped the student organization's branding and design system with inclusive design principles. </p>
      <a href="https://numulti.com" target="_blank" rel="noopener noreferrer" className="">Visit the site</a>
      <br/>
      <a href="https://github.com/numulti/website" target="_blank" rel="noopener noreferrer" className="">See the repo on Github</a>
      </div>
      <div>
      <img className="project-media" src={require('../images/multi.png')} alt="MULTI website on iPad"/>
      </div>
      </div>
      </section>
      </div>
      </div>
      </div>

<div className="black-background">
    <div className="Padding">
    <div className="grouped-sections">
    <section className="confined-mobile">
      <div className="flex-container">
      <div>
      <h2 className="holo-text">Penumbra</h2>
      <p className="white-text Important">At my first hackathon, I made an accessibility Chrome extension with a fantastic team. The extension inverts the brightness of online videos, reducing eye strain from virtual presentations and recorded lectures. We won second place in QWER Hacks's education category.</p>
      <a href="https://github.com/vincentspitale/Penumbra" target="_blank" rel="noopener noreferrer" className="holo-text">See it on Github</a>
      </div>
      <div>
      <img className="project-media" src={require('../assets/penumbra.gif')} alt="Gif of youtube video with Penumbra disabled and enabled" />
      </div>
      </div>
      </section>
      </div>
      </div>
      </div>

    
    </div>
)

export default IndexPage
 