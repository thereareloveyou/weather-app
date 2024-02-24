import { configureStore } from "@reduxjs/toolkit";
import globalSlice, { COORDS_PERSISTENT_STATE } from "./global.slice";
import searchSlice from "./search.slice";
import { saveState } from "./storage";

export const store = configureStore({
  reducer: {
    global: globalSlice,
    search: searchSlice,
  },
});

store.subscribe(() => {
  saveState(
    {
      latitude: store.getState().global.latitude,
      longitude: store.getState().global.longitude,
      city: store.getState().global.city,
    },
    COORDS_PERSISTENT_STATE
  );
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
