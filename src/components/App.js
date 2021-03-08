import React from "react"

import { connect } from "react-redux"
import { getTracks } from "../actions"

import Track from "../components/Track"

class App extends React.Component{
    componentDidMount(){
        this.props.getTracks("search?term=rock&media=music")
    }

    renderTracklist = () => {
        return this.props.tracks.map(track => <Track name={track.trackName}/>)
    }

    render(){
        if(!this.props.tracks){
            return <p>loading...</p>
        } else return <div>{this.renderTracklist()}</div>
    }
}

const mapStateToProps = (state) => {
    return {
        tracks: state.tracks.tracks
    }
}

export default connect(mapStateToProps, { getTracks })(App)