const reducerSwitch = (state ={}, action) => {
    switch(action.type){
        case "GET_TRACKS":
            return {...state, tracks: action.payload.results}
        case "GET_TRACK":
            return {...state, track: action.payload.results[0]}
        case "CLEAR_TRACK":
            return {...state, track: null}
        default:
            return state
    }
}

export default reducerSwitch