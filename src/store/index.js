import { configureStore } from "@reduxjs/toolkit";
import { dpMustHaveReducer } from "./slices/home/dpMustHave.slice";
import { dpRoadReducer } from "./slices/home/dpRoad.slice";

const rootReducer = {
  dpRoad: dpRoadReducer,
  dpMustHave: dpMustHaveReducer,
}

export const store = configureStore({
  reducer: rootReducer,
})