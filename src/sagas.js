import {all, call, put, takeEvery} from "redux-saga/effects"
import itunes from "./api/itunes"
import {
    getTracksSuccess,
    getTracksFail,
    getTrackSuccess,
    getTrackFail,
} from "./actions"

function* fetchTracks() {
    try{
        const response = yield call(itunes.get, "search?term=rock&media=music")
        yield put(getTracksSuccess(response))
    } catch (error) {
        yield put(getTracksFail(error))
    }
}

function* fetchTrack(action){
    try{
        const response = yield itunes.get(`lookup?id=${action.payload}`)
        yield put(getTrackSuccess(response))
    } catch (error) {
        yield put(getTrackFail(error))
    }
}

function* fetchTracksWatcher(){
    yield takeEvery("GET_TRACKS_REQUEST", fetchTracks)
}

function * fetchTrackWatcher(){
    yield takeEvery("GET_TRACK_REQUEST", fetchTrack)
}

function* mySaga(){
    yield all([
        fetchTracksWatcher(),
        fetchTrackWatcher()
    ])
}

export default mySaga