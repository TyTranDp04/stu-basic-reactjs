import { combineReducers } from 'redux';
import getListDataDpRoadReducers from './home';

const reducers = combineReducers({
  dpRoad: getListDataDpRoadReducers,
});

const rootReducer = (state, action) => reducers(state, action);

export default rootReducer;