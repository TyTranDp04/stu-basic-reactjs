import { combineReducers } from 'redux';
import {getListDataDpRoadReducers, getListDataAlumniSayingReducers } from './home';

const reducers = combineReducers({
  dpRoad: getListDataDpRoadReducers,
<<<<<<< HEAD
  dpAlumniSaying: getListDataAlumniSayingReducers,
=======
  
>>>>>>> 2947dd24c527899f80ba859b1a8d7ab89a5db7d0
});

const rootReducer = (state, action) => reducers(state, action);

export default rootReducer;