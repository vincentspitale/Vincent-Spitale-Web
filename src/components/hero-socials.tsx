import React, {Component} from "react"
import './hero-socials.css'
import Socials from './socials'

class HeroSocials extends Component {
    constructor(props) {
        super(props);
        this.state = {width: 0, height: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
      
      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

      render() {
        let result = this.state as {width: number, height:number}
    
        if (result.width > 820) {
      return <div className="HeroSocials">
       <Socials svgWidth={50}/>
      </div>
        }
        else {
            return <div className="MobileSocials"> 
            <div className="HeroButtons"> 
                <a href="https://www.twitter.com/vincentspitale" target="_blank">
                <div className="Button"> 
            Follow me on Twitter
            </div>
          </a>
            </div>
            </div>
        }
         
      }

} 

export default HeroSocials;