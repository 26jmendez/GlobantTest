const location = "Medellín,co";
const api_key = "05318b5856b404679fc48df0c8c12b2d";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;