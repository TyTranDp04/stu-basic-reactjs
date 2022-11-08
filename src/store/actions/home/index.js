import { createAsyncThunk } from "@reduxjs/toolkit";
import { DP_ALUMNI_SAYING_URL, DP_MUST_HAVE_URL, DP_ROAD_URL } from "api/urls";
import axios from "axios";

export const getListDataDpRoad = createAsyncThunk('dpRoad/getdpRoad', async () => {
  const response = await axios.get(DP_ROAD_URL);
  return response.data;
});

export const getListDataDpMustHave = createAsyncThunk('dpMustHave/getdpMustHave', async () => {
  const response = await axios.get(DP_MUST_HAVE_URL);
  return response.data;
});
export const getListDataAlumniSaying = createAsyncThunk('dpAlumniSaying', async () => {
  const response = await axios.get(DP_ALUMNI_SAYING_URL);
  return response.data;
})
