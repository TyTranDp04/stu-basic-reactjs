import { combineReducers } from 'redux';
import {getListDataDpRoadReducers, getListDataAlumniSayingReducers } from './home';

const reducers = combineReducers({
  dpRoad: getListDataDpRoadReducers,
  dpAlumniSaying: getListDataAlumniSayingReducers,
  
});

const rootReducer = (state, action) => reducers(state, action);

export default rootReducer;