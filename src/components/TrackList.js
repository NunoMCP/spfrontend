import React from "react"

import { getTracks } from "../actions"

import { connect } from "react-redux"

import Track from "../components/Track"

class TrackList extends React.Component{
    componentDidMount(){
        this.props.getTracks("search?term=rock&media=music")
    }

    renderTracklist = () => {
        return this.props.tracks.map(track => <Track
            key={track.trackId}
            trackName={track.trackName}
            artist={track.artistName}
            price={track.trackPrice}
            artworkUrl={track.artworkUrl60}
            id={track.trackId}/>)
    }
    
    render(){
        if(!this.props.tracks){
            return <div>Loading...</div>
        } else return <div>{this.renderTracklist()}</div>
    }
}

const mapStateToProps = (state) => {
    return {
        tracks: state.data.tracks
    }
}

export default connect(mapStateToProps, { getTracks })(TrackList)