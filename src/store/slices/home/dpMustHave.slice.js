import { createSlice } from "@reduxjs/toolkit";
import { getListDataDpMustHave } from "store/actions/home";

const initialState = {
  dpMustHaveState: {
    data: [],
    loading: false,
    error: null,
  }
};

const dpMustHaveSlice = createSlice({
  name: "dpMustHave",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListDataDpMustHave.pending, (state, action) => {
      state.dpMustHaveState = {
        ...state.dpMustHaveState,
        loading: true,
      }
    })
    builder.addCase(getListDataDpMustHave.fulfilled, (state, action) => {
      const data = action.payload;
      state.dpMustHaveState = {
        ...state.dpMustHaveState,
        loading: false,
        data,
      }
    })
    builder.addCase(getListDataDpMustHave.rejected, (state, action) => {
      state.dpMustHaveState = {
        error: action.payload,
      }
    })
  },
});

export const dpMustHaveReducer = dpMustHaveSlice.reducer;





