import React, {Component} from "react"
import './spotify.css'

class Spotify extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isloading: true,
            songName: null,
            artistName: null,
            image: null,
            link: null,
            isPlaying: null,
        }
    }

    componentDidMount() {
        fetch('https://q43tkyy3g7.execute-api.us-east-1.amazonaws.com/Stage/current').then((res) => {
  return res.json();
}).then((data) => {
  if (data.response && data.response.length > 0) {
        this.setState({
            songName: data.songName,
            artistName: data.artistName,
            image: data.image,
            link: data.link,
            isPlaying: data.isPlaying,
            isLoading: false,
        });
  
    }
}).catch((err) => {
  console.log(err);
});
    }

    render() {
        const result = this.state as {songName: string, artistName: string, image: string, link: string, isPlaying: boolean, isLoading: boolean}

        if (result.isLoading) {
            return (
                <div className="Spotify"></div>
            )
        }
        
        var response = '🎶'

        if (result.isPlaying) {
            response = 'Currently Listening To ' + response
        }
        else {
            response = 'Last Listened To ' + response
        }

        return(
            <div className="Spotify">
        <h3>{response}</h3>
        <a href={result.link} target="_blank" rel="noopener noreferrer">
        <div className="Song">
        <img src={result.image}/>
        <div className="TitleArtist">
        <span className="SongTitle"><p>{result.songName}</p></span>
        <p>{result.artistName}</p>
        </div>
        </div>
        </a>
        </div>);
    }


}

export default Spotify;

