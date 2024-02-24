import { SUGGESTIOS } from "./../interfaces/init";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { Search, Suggestions } from "../interfaces/types";

interface searchState {
  status: "OK" | "NOT";
  search: Search;
  suggestions: Suggestions[];
}

const initialState: searchState = {
  status: "NOT",
  suggestions: SUGGESTIOS,
  search: {
    results: [],
  },
};

export const getSearchQuery = createAsyncThunk("/search", async (value: string) => {
  const { data } = await axios.get<Search>(
    `https://geocoding-api.open-meteo.com/v1/search?name=${value}&count=5&language=en&format=json`
  );
  return data;
});

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearData: (state) => {
      state.search.results = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSearchQuery.fulfilled, (state, action) => {
      state.status = "OK";
      if (!action.payload) {
        return;
      } else if (!action.payload.results) {
        state.status = "NOT";
        state.search.results = [];
      } else {
        state.search = action.payload;
      }
    });
  },
});

export default searchSlice.reducer;
export const searchActions = searchSlice.actions;
