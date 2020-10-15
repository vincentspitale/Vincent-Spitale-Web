import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="Hero">
      <div className="HeroGroup">
      <img src={require('../images/me.jpg')}/>
      <div className="HeroTextGroup">
        <h1>Hi, I'm Vincent.</h1>
        <p>I'm a student, developer, and diversity advocate.</p>
        <div className="Socials">
        <a href="https://www.linkedin.com/in/vincentspitale" target="_blank"> 
        <svg width="50" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.181818 24.6023H5.02273V7.14773H0.181818V24.6023ZM2.61364 4.89773C4.05682 4.89773 5.23864 3.79546 5.23864 2.44318C5.23864 1.10227 4.05682 0 2.61364 0C1.18182 0 0 1.10227 0 2.44318C0 3.79546 1.18182 4.89773 2.61364 4.89773Z" fill="black"/>
<path d="M13.7415 14.5114C13.7528 12.2614 15.0938 10.9432 17.0483 10.9432C18.9915 10.9432 20.1619 12.2159 20.1506 14.3523V24.6023H24.9915V13.4886C24.9915 9.42045 22.6051 6.92046 18.9688 6.92046C16.3778 6.92046 14.5028 8.19318 13.7188 10.2273H13.5142V7.14773H8.90057V24.6023H13.7415V14.5114Z" fill="black"/>
</svg>
          </a>
          <a href="https://www.github.com/vincentspitale" target="_blank"> 
          <svg  width="50" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 0C7.83125 0 0 7.83125 0 17.5C0 25.2437 5.00937 31.7844 11.9656 34.1031C12.8406 34.2563 13.1687 33.7313 13.1687 33.2719C13.1687 32.8563 13.1469 31.4781 13.1469 30.0125C8.75 30.8219 7.6125 28.9406 7.2625 27.9562C7.06562 27.4531 6.2125 25.9 5.46875 25.4844C4.85625 25.1562 3.98125 24.3469 5.44688 24.325C6.825 24.3031 7.80938 25.5937 8.1375 26.1187C9.7125 28.7656 12.2281 28.0219 13.2344 27.5625C13.3875 26.425 13.8469 25.6594 14.35 25.2219C10.4562 24.7844 6.3875 23.275 6.3875 16.5812C6.3875 14.6781 7.06563 13.1031 8.18125 11.8781C8.00625 11.4406 7.39375 9.64687 8.35625 7.24062C8.35625 7.24062 9.82188 6.78125 13.1687 9.03438C14.5687 8.64063 16.0563 8.44375 17.5438 8.44375C19.0313 8.44375 20.5188 8.64063 21.9188 9.03438C25.2656 6.75938 26.7313 7.24062 26.7313 7.24062C27.6938 9.64687 27.0813 11.4406 26.9063 11.8781C28.0219 13.1031 28.7 14.6562 28.7 16.5812C28.7 23.2969 24.6094 24.7844 20.7156 25.2219C21.35 25.7687 21.8969 26.8188 21.8969 28.4594C21.8969 30.8 21.875 32.6813 21.875 33.2719C21.875 33.7313 22.2031 34.2781 23.0781 34.1031C29.9906 31.7844 35 25.2219 35 17.5C35 7.83125 27.1688 0 17.5 0Z" fill="black"/>
</svg>
          </a>
          <a href="https://www.twitter.com/vincentspitale" target="_blank"> 
          <svg width="50" viewBox="0 0 250 204" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M78.62 203.59C172.96 203.59 224.56 125.43 224.56 57.65C224.56 55.43 224.56 53.22 224.41 51.02C234.448 43.7591 243.114 34.7688 250 24.47C240.639 28.618 230.708 31.3383 220.54 32.54C231.247 26.1298 239.261 16.0477 243.09 4.17003C233.022 10.1446 222.006 14.3552 210.52 16.62C202.787 8.39687 192.559 2.95171 181.419 1.12716C170.279 -0.697392 158.848 1.20039 148.895 6.52683C138.943 11.8533 131.023 20.3114 126.362 30.5924C121.701 40.8734 120.558 52.404 123.11 63.4C102.718 62.3777 82.768 57.0783 64.5564 47.8459C46.3448 38.6135 30.2784 25.6545 17.4 9.81003C10.8409 21.1016 8.832 34.4686 11.7823 47.1894C14.7326 59.9102 22.4202 71.0283 33.28 78.28C25.1174 78.0381 17.1328 75.8362 10 71.86C10 72.07 10 72.29 10 72.51C10.0032 84.3522 14.1026 95.8287 21.6028 104.993C29.103 114.157 39.5423 120.445 51.15 122.79C43.5987 124.849 35.6758 125.15 27.99 123.67C31.2676 133.862 37.6486 142.774 46.2407 149.161C54.8328 155.547 65.2061 159.089 75.91 159.29C57.7474 173.564 35.3106 181.313 12.21 181.29C8.12903 181.282 4.05204 181.035 0 180.55C23.4564 195.603 50.7491 203.587 78.62 203.55" fill="black"/>
</svg>
          </a>

          <a href = "mailto: vincentgspitale@gmail.com" target="_blank">
          <svg width="50" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.4033 15.3579C19.0845 15.3579 19.6899 15.0249 20.4014 14.3135L33.6611 1.08398C33.0254 0.584473 31.9658 0.342285 30.5127 0.342285H6.03662C4.68945 0.342285 3.70557 0.569336 3.11523 1.05371L16.4053 14.3135C17.1167 15.0249 17.7222 15.3579 18.4033 15.3579ZM1.3291 25.0454L12.5303 13.8896L1.41992 2.91553C1.05664 3.50586 0.859863 4.4292 0.859863 5.71582V22.4722C0.859863 23.6528 1.02637 24.5005 1.3291 25.0454ZM35.4624 25.0303C35.7651 24.4854 35.9165 23.6528 35.9165 22.4722V5.71582C35.9165 4.44434 35.7197 3.50586 35.3564 2.9458L24.2764 13.8896L35.4624 25.0303ZM6.26367 27.8457H30.7397C32.1929 27.8457 33.2373 27.5581 33.873 27.0132L22.4751 15.6606L21.6729 16.4629C20.5981 17.5073 19.5688 17.9917 18.4033 17.9917C17.2378 17.9917 16.1934 17.5073 15.1187 16.4629L14.3164 15.6758L2.93359 26.998C3.61475 27.5581 4.71973 27.8457 6.26367 27.8457Z" fill="black"/>
</svg>
      </a>
         
          </div>
      </div>
      
      </div>
    
    </div>

    <div className="CardWrapper">
    <div className="HorScrollWrapper">
    <div className="InfoCards">
      <Card>
      <p>My name is Vincent Spitale. I currently study computer science and mathematics at Northeastern University. My personal work centers around finding unconventional uses for augmented reality that are powered by advanced algorithms. I also lead inclusive workshops that aim to make the tech industry accessible and inviting to everyone. If you're interested in my skills or want to critique my love for the color lavender, feel free to contact me.</p>
      </Card>
      <Card>
      <div className="SongCard">
        <h4>My Anthem</h4>
        <a href="https://songwhip.com/vampire-weekend/walcott" target="_blank">
        <div className="Song">
        <img src={require('../images/vw.jpg')}/>
        <div className="TitleArtist">
        <div className="SongTitle"><p>Walcott</p></div>
        <p>Vampire Weekend </p>
        </div>
        </div>
        </a>
        <h4>On Repeat</h4>
        <a href="https://songwhip.com/christine-and-the-queens/i-disappear-in-your-arms-bonus" target="_blank">
        <div className="Song">
        <img src={require('../images/lavitanuova.jpg')}/>
        <div className="TitleArtist">
        <div className="SongTitle"> <p>I disappear in your arms</p></div>
        <p>Christine and the Queens </p>
        </div>
        </div>
        </a>
        </div>
      </Card>
    </div>
    </div>
    </div>
    
  </Layout>
)

export default IndexPage
 