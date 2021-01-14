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
        const svgWidth = result.width > 640 ? 50: 30
        
      return <div className="HeroSocials">
       <Socials svgWidth={svgWidth}/>
      </div>
        
         
      }

} 

export default HeroSocials;