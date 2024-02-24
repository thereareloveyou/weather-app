export interface Weather {
  current: Current;
  daily: Daily;
  hourly: Hourly;
}

export interface Current {
  time: string;
  interval: number;
  weather_code: number;
  precipitation: number;
  temperature_2m: number;
  wind_speed_10m: number;
  wind_direction_10m: number;
  relative_humidity_2m: number;
  surface_pressure: number;
}

export interface Hourly {
  precipitation: number[];
  time: string[];
  temperature_2m: number[];
  uv_index: number[];
  weather_code: number[];
  apparent_temperature: number[];
  visibility: number[];
}

export interface Daily {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  sunset: string[];
  sunrise: string[];
  weather_code: number[];
}

export interface Polution {
  current: {
    pm2_5: number;
  };
}

export interface SearchEntry {
  name: string;
  latitude: number;
  longitude: number;
  country?: string;
  admin1?: string;
}

export interface Search {
  results: SearchEntry[];
}

export interface Suggestions {
  name: string;
  latitude: number;
  longitude: number;
  country?: string;
  admin1?: string;
}
