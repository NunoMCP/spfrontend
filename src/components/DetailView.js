import React from "react"

import { getTrack, clearTrack } from "../actions"

import { connect } from "react-redux"
class DetailView extends React.Component{
    componentDidMount(){
        this.props.getTrack(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.clearTrack()
    }
    
    msToTime = (ms) => {
        let minutes = Math.floor(ms / 60000)
        let seconds = ((ms % 60000) / 1000).toFixed(0)
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds
    }

    render(){
        if(!this.props.track){
            return <div>Loading song data</div>
        } else return(
            <div>
                Artwork: <img alt="" src={this.props.track.artworkUrl60}/><br/>
                Track name: {this.props.track.trackName}<br/>
                Artist: {this.props.track.artistName}<br/>
                Track price: {this.props.track.trackPrice}<br/>
                Track duration: {this.msToTime(this.props.track.trackTimeMillis)}<br/>
                Release date: {this.props.track.releaseDate.match(/\d\d\d\d-\d\d-\d\d/gm)}<br/>

                <a href={this.props.track.trackViewUrl}><button>More details</button></a>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        track: state.data.track
    }
}

export default connect(mapStateToProps, {getTrack, clearTrack})(DetailView)