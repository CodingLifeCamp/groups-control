import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
const initialState = {
  groups: [],
  status: null,
  error: null,
};

export const fetchGroups = createAsyncThunk(
  "groups/fetchGroups",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/group", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch groups"
      );
    }
  }
);

export const createGroup = createAsyncThunk(
  "groups/createGroup",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/group", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) thunkAPI.dispatch(fetchGroups());

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to create group"
      );
    }
  }
);

export const updateGroup = createAsyncThunk(
  "groups/updateGroup",
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch(`/group/${data.id}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) thunkAPI.dispatch(fetchGroups());

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to update group"
      );
    }
  }
);

export const deleteGroup = createAsyncThunk(
  "group/deleteGroup",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/group/${id}`);

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to delete group"
      );
    }
  }
);

const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGroups.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGroups.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.groups = action.payload;
      })
      .addCase(fetchGroups.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createGroup.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createGroup.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(createGroup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateGroup.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateGroup.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(updateGroup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(deleteGroup.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteGroup.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.groups = state.groups.filter(
          (group) => group.id !== action.payload
        );
      })
      .addCase(deleteGroup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.detail;
      });
  },
});

export default groupsSlice.reducer;
