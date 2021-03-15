import React from "react"
import ReactDOM from "react-dom"

import createSagaMiddleware from "redux-saga"
import mySaga from "./sagas"

import { Provider } from "react-redux"

import {createStore, applyMiddleware, compose} from "redux"

import App from "./components/App"
import reducers from "./reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(mySaga)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector("#root")
)