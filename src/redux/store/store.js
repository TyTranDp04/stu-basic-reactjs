import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
// import { createLogger } from "redux-logger";
import rootReducer from 'redux/reducers/rootReducer';

const middleware = [thunk];

// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger());
// }

export const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
)