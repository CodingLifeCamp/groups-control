import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
const initialState = {
  levels: [],
  status: null,
  error: null,
};

export const fetchLevels = createAsyncThunk(
  "levels/fetchLevels",
  async (id, thunkAPI) => {
    if (id) localStorage.setItem("specialityID", id);
    try {
      const response = await axios.get("/level", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      let ID = +localStorage.getItem("specialityID") || id;

      return response.data.filter((d) => d.specialityId === ID);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch levels"
      );
    }
  }
);

export const createLevel = createAsyncThunk(
  "levels/createLevel",
  async (data, thunkAPI) => {
    try {
      let id = +localStorage.getItem("specialityID");

      const response = await axios.post(
        "/level",
        {
          specialityId: id,
          ...data,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) thunkAPI.dispatch(fetchLevels());

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to create level"
      );
    }
  }
);

export const updateLevel = createAsyncThunk(
  "levels/updateLevel",
  async (data, thunkAPI) => {
    try {
      let id = +localStorage.getItem("specialityID");

      const response = await axios.patch(
        `/level/${data.id}`,
        { specialityId: id, ...data },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) thunkAPI.dispatch(fetchLevels());

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to update level"
      );
    }
  }
);

export const deleteLevel = createAsyncThunk(
  "levels/deleteLevel",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/level/${id}`);

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to delete level"
      );
    }
  }
);

const levelsSlice = createSlice({
  name: "levels",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLevels.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLevels.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.levels = action.payload;
      })
      .addCase(fetchLevels.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createLevel.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createLevel.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(createLevel.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateLevel.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateLevel.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(updateLevel.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(deleteLevel.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteLevel.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.levels = state.levels.filter(
          (level) => level.id !== action.payload
        );
      })
      .addCase(deleteLevel.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.detail;
      });
  },
});

export default levelsSlice.reducer;
