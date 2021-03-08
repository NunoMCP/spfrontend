const reducerSwitch = (state ={}, action) => {
    switch(action.type){
        case "GET_TRACKS":
            return {...state, tracks: action.payload.results}
        default:
            return state
    }
}

export default reducerSwitch