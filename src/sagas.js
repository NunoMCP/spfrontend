import {all, call, put, takeEvery} from "redux-saga/effects"
import itunes from "./api/itunes"

function* fetchTracks() {
    try{
        const response = yield call(itunes.get, "search?term=rock&media=music")
        yield put({type: "GET_TRACKS_SUCCESS", payload: response.data})
    } catch (e) {
        yield put({type: "GET_TRACKS_FAIL", payload: e.message})
    }
}

function* fetchTrack(action){
    try{
        const response = yield itunes.get(`lookup?id=${action.payload}`)
        yield put({type: "GET_TRACK_SUCCESS", payload: response.data})
    } catch (e) {
        yield put({type: "GET_TRACK_FAIL", payload: e.message})
    }
}

function* fetchTracksWatcher(){
    yield takeEvery("GET_TRACKS", fetchTracks)
}

function * fetchTrackWatcher(){
    yield takeEvery("GET_TRACK", fetchTrack)
}

function* mySaga(){
    yield all([
        fetchTracksWatcher(),
        fetchTrackWatcher()
    ])
}

export default mySaga