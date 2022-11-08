import { configureStore } from "@reduxjs/toolkit";
import { dpRoadReducer } from "./slices/home/dpRoad.slice";

const rootReducer = {
  dpRoad: dpRoadReducer,
}

export const store = configureStore({
  reducer: rootReducer,
})