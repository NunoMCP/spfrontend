import React, { useEffect } from "react"

import { getTrack, clearTrack } from "../actions"

import { useSelector, useDispatch } from "react-redux"

const msToTime = (ms) => {
    let minutes = Math.floor(ms / 60000)
    let seconds = ((ms % 60000) / 1000).toFixed(0)
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds
}



const DetailView = (props) => {
    const dispatch = useDispatch()
    let track = useSelector(state => state.data.track)
    
    useEffect(() => {
        dispatch(getTrack(props.match.params.id))
        return dispatch(clearTrack())
        }, [dispatch, props.match.params.id]
    )

    if(!track){
        return <div>Loading song data</div>
    } else return(
        <div>
            Artwork: <img alt="" src={track.artworkUrl60}/><br/>
            Track name: {track.trackName}<br/>
            Artist: {track.artistName}<br/>
            Track price: {track.trackPrice}<br/>
            Track duration: {msToTime(track.trackTimeMillis)}<br/>
            Release date: {track.releaseDate.match(/\d\d\d\d-\d\d-\d\d/gm)}<br/>

            <a href={track.trackViewUrl}><button>More details</button></a>

        </div>
    )
}

export default DetailView