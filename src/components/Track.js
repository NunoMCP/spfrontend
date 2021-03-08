import React from "react"

import history from "../history"

class Track extends React.Component {
    onClickHelper = () => {
        history.push(`/details/${this.props.id}`)
    }
    
    render(){
        return (
            <div style={{"margin": "25px 5px"}}>
                <img alt="" src={this.props.artworkUrl}/><br/>
                Track Name:{this.props.trackName}<br/>
                Artist:{this.props.artist}<br/>
                Track price:{this.props.price}<br/>
                <button onClick={this.onClickHelper}>Details</button>
            </div>
        )
    }
}

export default Track