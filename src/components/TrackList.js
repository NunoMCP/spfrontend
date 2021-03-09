import React, { useEffect } from "react"

import { getTracks } from "../actions"

import { connect } from "react-redux"

import Track from "../components/Track"

const renderTracklist = (props) => {
    return props.tracks.map(track => <Track
        key={track.trackId}
        trackName={track.trackName}
        artist={track.artistName}
        price={track.trackPrice}
        artworkUrl={track.artworkUrl60}
        id={track.trackId}/>)
}

const TrackList = (props) => {
    useEffect(() => {
        props.getTracks("search?term=rock&media=music")
        }, []
    )

    if(!props.tracks){
        return (<div>Loading...</div>)
    } else return (<div>{renderTracklist(props)}</div>)
}

const mapStateToProps = (state) => {
    return {
        tracks: state.data.tracks
    }
}

export default connect(mapStateToProps, { getTracks })(TrackList)