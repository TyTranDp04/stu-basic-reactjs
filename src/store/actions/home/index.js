import { createAsyncThunk } from "@reduxjs/toolkit";
import { DP_ROAD_URL } from "api/urls";
import axios from "axios";

export const getListDataDpRoad = createAsyncThunk('dpRoad/getdpRoad', async () => {
  const response = await axios.get(DP_ROAD_URL);
  return response.data;
});