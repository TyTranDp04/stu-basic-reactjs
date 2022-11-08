import { configureStore } from "@reduxjs/toolkit";
import { dpAlumniSayingReducer } from "./slices/home/dpAlumniSaying";
import { dpRoadReducer } from "./slices/home/dpRoad.slice";

const rootReducer = {
  dpRoad: dpRoadReducer,
  dpAlumniSaying: dpAlumniSayingReducer
}

export const store = configureStore({
  reducer: rootReducer,
})
