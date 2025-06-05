import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
const initialState = {
  themes: [],
  status: null,
  error: null,
};

export const fetchThemes = createAsyncThunk(
  "themes/fetchThemes",
  async (id, thunkAPI) => {
    if (id) localStorage.setItem("levelID", id);
    try {
      const response = await axios.get("/theme", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      let ID = +localStorage.getItem("levelID") || id;

      return response.data.filter((d) => d.levelId === ID);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch themes"
      );
    }
  }
);

export const createTheme = createAsyncThunk(
  "themes/createTheme",
  async (data, thunkAPI) => {
    try {
      let id = +localStorage.getItem("levelID");

      const response = await axios.post(
        "/theme",
        {
          levelId: id,
          ...data,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) thunkAPI.dispatch(fetchThemes());

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to create theme"
      );
    }
  }
);

export const updateTheme = createAsyncThunk(
  "themes/updateTheme",
  async (data, thunkAPI) => {
    try {
      let id = +localStorage.getItem("levelID");

      const response = await axios.patch(
        `/theme/${data.id}`,
        { levelId: id, ...data },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) thunkAPI.dispatch(fetchThemes());

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to update theme"
      );
    }
  }
);

export const deleteTheme = createAsyncThunk(
  "themes/deleteTheme",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/theme/${id}`);

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to delete theme"
      );
    }
  }
);

const themesSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchThemes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchThemes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.themes = action.payload;
      })
      .addCase(fetchThemes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createTheme.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createTheme.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(createTheme.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateTheme.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateTheme.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(updateTheme.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(deleteTheme.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteTheme.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.themes = state.themes.filter(
          (theme) => theme.id !== action.payload
        );
      })
      .addCase(deleteTheme.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.detail;
      });
  },
});

export default themesSlice.reducer;
