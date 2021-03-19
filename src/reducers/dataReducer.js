const reducerSwitch = (state ={}, action) => {
    switch(action.type){
        case "GET_TRACKS_SUCCESS":
            return {...state, tracks: action.payload.results}
        case "GET_TRACKS_FAIL":
            return {...state, error: action.payload}
        case "GET_TRACK_SUCCESS":
            return {...state, track: action.payload.results[0]}
        case "GET_TRACK_FAIL":
            return {...state, error: action.payload}
        case "CLEAR_TRACK":
            return {...state, track: null}
        default:
            return state
    }
}

export default reducerSwitch