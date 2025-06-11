import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
const initialState = {
  teachers: [],
  status: null,
  error: null,
};

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/teacher", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch teacher"
      );
    }
  }
);

export const createTeacher = createAsyncThunk(
  "teachers/createTeacher",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/teacher", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) thunkAPI.dispatch(fetchTeachers());

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to create teacher"
      );
    }
  }
);

export const updateTeacher = createAsyncThunk(
  "teachers/updateTeacher",
  async (data, thunkAPI) => {
    console.log(data);

    try {
      const response = await axios.patch(`/teacher/${data.id}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) thunkAPI.dispatch(fetchTeachers());

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to update teacher"
      );
    }
  }
);

export const deleteTeacher = createAsyncThunk(
  "teachers/deleteTeacher",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/teacher/${id}`);

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to delete teacher"
      );
    }
  }
);

const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.teachers = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createTeacher.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createTeacher.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(createTeacher.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateTeacher.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateTeacher.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(updateTeacher.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(deleteTeacher.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteTeacher.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.teachers = state.teachers.filter(
          (teacher) => teacher.id !== action.payload
        );
      })
      .addCase(deleteTeacher.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.detail;
      });
  },
});

export default teachersSlice.reducer;
