import React, { Component } from 'react';
import PropTypes from 'prop-types';
import transformWeather from './../../services/transformWeather';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import { CircularProgress } from '@material-ui/core';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLocation extends Component{
    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null,
        };
    }

    componentDidMount() {
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
    }

    handleUpdateClick = () => {
        fetch(getUrlWeatherByCity(this.state.city)).then( resolve => {
            return resolve.json();
        }).then(data => {
            const newData = transformWeather(data);
            this.setState({
                city: data.name,
                data: newData
            });
        });
    }

    render() {
        const {onWeatherLocationClick} = this.props;
        return (
        <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        {this.state.data ? <Location city={this.state.city}></Location>: ""}
        {
            this.state.data ? 
            <WeatherData data={this.state.data}></WeatherData> : 
            <CircularProgress size={100}></CircularProgress>
        }
        </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;