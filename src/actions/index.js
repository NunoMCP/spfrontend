import "./actionTypes"
import {
    GET_TRACKS_REQUEST,
    GET_TRACKS_SUCCESS,
    GET_TRACKS_FAIL,
    GET_TRACK_REQUEST,
    GET_TRACK_SUCCESS,
    GET_TRACK_FAIL,
    CLEAR_TRACK_REQUEST
} from "./actionTypes"

export const getTracks = () => {
    return {
        type: GET_TRACKS_REQUEST
    }
}

export const getTracksSuccess = (response) => {
    return {
        type: GET_TRACKS_SUCCESS,
        payload: response.data
    }
}

export const getTracksFail = (error) => {
    return {
        type: GET_TRACKS_FAIL,
        payload: error.message
    }
}

export const getTrack = (id) => {
    return {
        type: GET_TRACK_REQUEST,
        payload: id
    }
}

export const getTrackSuccess = (response) => {
    return {
        type: GET_TRACK_SUCCESS,
        payload: response.data
    }
}

export const getTrackFail = (error) => {
    return {
        type: GET_TRACK_FAIL,
        payload: error.message
    }
}

export const clearTrack = () => {
    return {
        type: CLEAR_TRACK_REQUEST
    }
}