import React from "react"

import { useHistory } from "react-router-dom"

const Track = (props) => {
    let history = useHistory()
    
    return (
        <div style={{"margin": "25px 5px"}}>
            <img alt="" src={props.artworkUrl}/><br/>
            Track Name:{props.trackName}<br/>
            Artist:{props.artist}<br/>
            Track price:{props.price}<br/>
            <button onClick={() => history.push(`/details/${props.id}`)}>Details</button>
        </div>
    )
}

export default Track