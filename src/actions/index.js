import itunes from "../api/itunes"

export const getTracks = () => {
    return async (dispatch) => {
        const response = await itunes.get("search?term=rock&media=music")
        dispatch({
            type: "GET_TRACKS",
            payload: response.data
        })
    }
}

export const getTrack = (id) => {
    return async (dispatch) => {
        const response = await itunes.get(`lookup?id=${id}`)
        dispatch({
            type: "GET_TRACK",
            payload: response.data
        })
    }
}

export const clearTrack = () => {
    return {
        type: "CLEAR_TRACK"
    }
}