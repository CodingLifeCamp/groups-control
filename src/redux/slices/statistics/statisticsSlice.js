import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
const initialState = {
  statisticsSlice: [],
  status: null,
  error: null,
};

export const fetchStatistics = createAsyncThunk(
  "statistics/fetchStatistics",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/statistics/admin", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch statistics"
      );
    }
  }
);

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStatistics.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStatistics.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.statistics = action.payload;
      })
      .addCase(fetchStatistics.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default statisticsSlice.reducer;
