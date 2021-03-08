import React from "react"

import {Router, Route} from "react-router-dom"

import history from "../history"

import TrackList from "../components/TrackList"
import DetailView from "../components/DetailView"

class App extends React.Component{
    render(){
        return(
            <Router history={history}>
                <Route path="/" exact component={TrackList}/>
                <Route path="/details/:id" exact component={DetailView}/>
            </Router>
        )
    }
}

export default App