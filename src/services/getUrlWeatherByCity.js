import { api_key, url_base_weather } from './../constants/api_url'

const getUrlWeatherByCity = city => {
    const api_weather = `${url_base_weather}?q=${city}&appid=${api_key}`;
    return api_weather;
}

export default getUrlWeatherByCity;