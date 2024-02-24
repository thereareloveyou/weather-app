import axios, { AxiosError } from "axios";
import { DEF_PARAMS_POS } from "./../interfaces/init";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadState } from "./storage";
import { Weather, Polution } from "../interfaces/types";

export const COORDS_PERSISTENT_STATE = "COORDS";

const loadCoords = loadState<PersistentState>(COORDS_PERSISTENT_STATE);

interface GlobalState {
  latitude: number;
  longitude: number;
  city: string;
  weather: Weather;
  airPolution: Polution;
}
export interface PersistentState {
  latitude: number | null;
  longitude: number | null;
  city: string | null;
}

const initialState: GlobalState = {
  latitude: loadCoords?.latitude ?? DEF_PARAMS_POS.latitude,
  longitude: loadCoords?.longitude ?? DEF_PARAMS_POS.longitude,
  city: loadCoords?.city ?? DEF_PARAMS_POS.city,
  weather: {
    current: {
      time: "",
      interval: 0,
      weather_code: 0,
      precipitation: 0,
      temperature_2m: 0,
      wind_speed_10m: 0,
      wind_direction_10m: 0,
      relative_humidity_2m: 0,
      surface_pressure: 0,
    },
    daily: {
      time: [],
      temperature_2m_max: [0],
      temperature_2m_min: [0],
      sunset: [new Date().toString()],
      sunrise: [new Date().toString()],
      weather_code: [],
    },

    hourly: {
      precipitation: [],
      time: [],
      temperature_2m: [],
      uv_index: [],
      weather_code: [],
      apparent_temperature: [],
      visibility: [],
    },
  },
  airPolution: {
    current: {
      pm2_5: 0,
    },
  },
};

export const getCurrentWeather = createAsyncThunk(
  "/current",
  async (value: { latitude: number; longitude: number }) => {
    try {
      const { data } = await axios.get<Weather>(
        `https://api.open-meteo.com/v1/forecast?latitude=${value.latitude}&longitude=${value.longitude}`,
        {
          params: {
            current: [
              "weather_code",
              "precipitation",
              "temperature_2m",
              "wind_speed_10m",
              "wind_direction_10m",
              "relative_humidity_2m",
              "surface_pressure",
            ],
            daily: ["temperature_2m_max", "temperature_2m_min", "sunset", "sunrise", "weather_code"],
            hourly: [
              "temperature_2m",
              "uv_index",
              "weather_code",
              "precipitation",
              "apparent_temperature",
              "visibility",
            ],
            forecast_days: 10,
            timezone: "Europe/Moscow",
            wind_speed_unit: "ms",
          },
        }
      );
      return data;
    } catch (e) {
      if (e instanceof AxiosError) {
        throw new Error(e.response?.data.message);
      }
    }
  }
);

export const getCurrentPolution = createAsyncThunk(
  "/polution",
  async (value: { latitude: number; longitude: number }) => {
    try {
      const { data } = await axios.get<Polution>(
        `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${value.latitude}&longitude=${value.longitude}`,
        {
          params: {
            current: "pm2_5",
            forecast_days: 1,
          },
        }
      );
      return data;
    } catch (e) {
      if (e instanceof AxiosError) {
        throw new Error(e.response?.data.message);
      }
    }
  }
);

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    addNewParams: (state, action: PayloadAction<{ name: string; latitude: number; longitude: number }>) => {
      state.city = action.payload.name;
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentWeather.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }
      state.weather = action.payload;
    });
    builder.addCase(getCurrentPolution.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }
      state.airPolution = action.payload;
    });
  },
});

export default globalSlice.reducer;
export const globalActions = globalSlice.actions;
