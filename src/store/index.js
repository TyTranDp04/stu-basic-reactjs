import { configureStore } from "@reduxjs/toolkit";
import { dpAlumniSayingReducer } from "./slices/home/dpAlumniSaying";
import { dpMustHaveReducer } from "./slices/home/dpMustHave.slice";
import { dpRoadReducer } from "./slices/home/dpRoad.slice";

const rootReducer = {
  dpRoad: dpRoadReducer,
  dpMustHave: dpMustHaveReducer,
  dpAlumniSaying: dpAlumniSayingReducer
}

export const store = configureStore({
  reducer: rootReducer,
})
