import React, { useEffect } from "react"

import { getTrack, clearTrack } from "../actions"

import { connect } from "react-redux"

const msToTime = (ms) => {
    let minutes = Math.floor(ms / 60000)
    let seconds = ((ms % 60000) / 1000).toFixed(0)
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds
}

const DetailView = (props) => {
    useEffect(() => {
        props.getTrack(props.match.params.id)
        return props.clearTrack()
        }, []
    )

    if(!props.track){
        return <div>Loading song data</div>
    } else return(
        <div>
            Artwork: <img alt="" src={props.track.artworkUrl60}/><br/>
            Track name: {props.track.trackName}<br/>
            Artist: {props.track.artistName}<br/>
            Track price: {props.track.trackPrice}<br/>
            Track duration: {msToTime(props.track.trackTimeMillis)}<br/>
            Release date: {props.track.releaseDate.match(/\d\d\d\d-\d\d-\d\d/gm)}<br/>

            <a href={props.track.trackViewUrl}><button>More details</button></a>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        track: state.data.track
    }
}

export default connect(mapStateToProps, {getTrack, clearTrack})(DetailView)