import React, { Component } from 'react';
import ForecastItem from './ForecastItem';
import PropTypes from 'prop-types';
import transformForecast from './../services/transformForecast';
import './styles.css';

const api_key = "05318b5856b404679fc48df0c8c12b2d"
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
    constructor() {
        super();
        this.state = {
            forecastData: null
        }
    }

    componentDidMount(){
        this.udpateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.city !== this.props.city){
            this.setState({forecastData: null})
            this.udpateCity(nextProps.city);
        }
    }

    udpateCity = city => {
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;

        fetch(url_forecast)
        .then(data => (data.json()))
        .then(weather_data => {
            const forecastData = transformForecast(weather_data);
            this.setState({forecastData})
        })
    }

    renderForecastItemsDay(forecastData) {
        return forecastData.map(forecast => 
            (
                <ForecastItem 
                    key={`${forecast.weekDay}${forecast.hour}`} 
                    weekDay={forecast.weekDay} 
                    hour={forecast.hour} 
                    data={forecast.data}>
                </ForecastItem>));
    }

    renderProgress() {
        return <h2>Cargando pronóstico extendido</h2>
    }

    render() {
        const {city} = this.props;
        const {forecastData} = this.state;

        return (
            <div>
                <h2 className="forecast-title">Pronóstico extendido para {city}</h2>
                {
                    forecastData ?
                    this.renderForecastItemsDay(forecastData) :
                    this.renderProgress()
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;