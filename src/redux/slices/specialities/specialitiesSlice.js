import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
const initialState = {
  specialities: [],
  status: null,
  error: null,
};

export const fetchSpecialities = createAsyncThunk(
  "specialities/fetchSpecialities",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/speciality", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch specialities"
      );
    }
  }
);

export const createSpeciality = createAsyncThunk(
  "specialities/createSpecialities",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/speciality", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) thunkAPI.dispatch(fetchSpecialities());

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to create speciality"
      );
    }
  }
);

export const updateSpeciality = createAsyncThunk(
  "specialities/updateSpecialities",
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch(`/speciality/${data.id}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) thunkAPI.dispatch(fetchSpecialities());

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to update speciality"
      );
    }
  }
);

export const deleteSpeciality = createAsyncThunk(
  "specialities/deleteSpecialities",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/speciality/${id}`);

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to delete speciality"
      );
    }
  }
);

const specialitiesSlice = createSlice({
  name: "specialities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpecialities.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSpecialities.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.specialities = action.payload;
      })
      .addCase(fetchSpecialities.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createSpeciality.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createSpeciality.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(createSpeciality.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateSpeciality.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateSpeciality.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(updateSpeciality.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(deleteSpeciality.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteSpeciality.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.specialities = state.specialities.filter(
          (speciality) => speciality.id !== action.payload
        );
      })
      .addCase(deleteSpeciality.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.detail;
      });
  },
});

export default specialitiesSlice.reducer;
