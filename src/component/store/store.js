import React from "react";
import {combineReducers, createStore,applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import {countRed} from "../reduxers/counter_reducer";

const rootReducer = combineReducers({
    count: countRed
})

export const  store  = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))



window.store = store
