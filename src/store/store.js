import {createStore, applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import fetchUserReducer from '../reducer/Reducer';

export const store = createStore(fetchUserReducer, applyMiddleware(thunk))