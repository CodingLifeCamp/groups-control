import { configureStore } from "@reduxjs/toolkit";
import specialitiesSlice from "./slices/specialities/specialitiesSlice";
import levelsSlice from "./slices/levels/levelsSlice";
import themesSlice from "./slices/themes/themesSlice";

export const store = configureStore({
  reducer: {
    specialities: specialitiesSlice,
    levels: levelsSlice,
    themes: themesSlice,
  },
});
