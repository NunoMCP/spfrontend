export const getTracks = () => {
    return {
        type: "GET_TRACKS"
    }
}

export const getTrack = (id) => {
    return {
        type: "GET_TRACK",
        payload: id
    }
}

export const clearTrack = () => {
    return {
        type: "CLEAR_TRACK"
    }
}