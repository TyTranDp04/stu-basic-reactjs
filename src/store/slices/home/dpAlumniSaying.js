import { createSlice } from "@reduxjs/toolkit";
import { getListDataAlumniSaying } from "store/actions/home";

const initialState = {
  dpAlumniSayingState: {
    data: [],
    loading: false,
    error: null,
  }
};

const dpAlumniSayingSlice = createSlice({
  name: "dpAlumniSaying",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListDataAlumniSaying.pending, (state, action) => {
      state.dpAlumniSayingState = {
        ...state.dpAlumniSayingState,
        loading: true,
      }
    })
    builder.addCase(getListDataAlumniSaying.fulfilled, (state, action) => {
      const data = action.payload;
      state.dpAlumniSayingState = {
        ...state.dpAlumniSayingState,
        loading: false,
        data,
      }
    })
    builder.addCase(getListDataAlumniSaying.rejected, (state, action) => {
      state.dpAlumniSayingState = {
        error: action.payload,
      }
    })
  },
});

export const dpAlumniSayingReducer = dpAlumniSayingSlice.reducer;





