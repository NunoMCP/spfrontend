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