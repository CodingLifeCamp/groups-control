import { configureStore } from "@reduxjs/toolkit";
import specialitiesSlice from "./slices/specialities/specialitiesSlice";
import levelsSlice from "./slices/levels/levelsSlice";
import themesSlice from "./slices/themes/themesSlice";
import teachersSlice from "./slices/teachers/teachersSlice";
import statisticsSlice from "./slices/statistics/statisticsSlice";
import groupsSlice from "./slices/groups/groupsSlice";

export const store = configureStore({
  reducer: {
    specialities: specialitiesSlice,
    levels: levelsSlice,
    themes: themesSlice,
    teachers: teachersSlice,
    statistics: statisticsSlice,
    groups: groupsSlice,
  },
});
