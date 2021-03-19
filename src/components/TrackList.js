import React, { useEffect } from "react"

import { getTracks } from "../actions"

import { useSelector, useDispatch } from "react-redux"

import Track from "../components/Track"

const renderTracklist = (tracks) => {
    return tracks.map(track => <Track
        key={track.trackId}
        trackName={track.trackName}
        artist={track.artistName}
        price={track.trackPrice}
        artworkUrl={track.artworkUrl60}
        id={track.trackId}/>)
}

const TrackList = () => {
    let tracks = useSelector(state => state.data.tracks)
    let dispatch = useDispatch()

    
    useEffect(() => {
        dispatch(getTracks())
        }, [dispatch]
    )

    if(!tracks){
        return (<div>Loading...</div>)
    } else return (<div>{renderTracklist(tracks)}</div>)
}

export default TrackList