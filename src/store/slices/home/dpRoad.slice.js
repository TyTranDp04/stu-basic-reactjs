import { createSlice } from "@reduxjs/toolkit";
import { getListDataDpRoad } from "store/actions/home";

const initialState = {
  dpRoadState: {
    data: [],
    loading: false,
    error: null,
  }
};

const dpRoadSlice = createSlice({
  name: "dpRoad",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListDataDpRoad.pending, (state, action) => {
      state.dpRoadState = {
        ...state.dpRoadState,
        loading: true,
      }
    })
    builder.addCase(getListDataDpRoad.fulfilled, (state, action) => {
      const data = action.payload;
      state.dpRoadState = {
        ...state.dpRoadState,
        loading: false,
        data,
      }
    })
    builder.addCase(getListDataDpRoad.rejected, (state, action) => {
      state.dpRoadState = {
        error: action.payload,
      }
    })
  },
});

export const dpRoadReducer = dpRoadSlice.reducer;





