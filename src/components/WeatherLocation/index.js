import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from './../../services/transformWeather';
import { api_weather } from './../../constants/api_url';

const data = {
    temperature: 15,
    weatherState: "SUN",
    humidity: 7,
    wind: "10 m/s"
}

class WeatherLocation extends Component{
    constructor() {
        super();
        this.state = {
            city: "Bogotá",
            country: "Colombia",
            data: data,
        };
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    handleUpdateClick = () => {
        fetch(api_weather).then( resolve => {
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
        console.log("render");
        return (
        <div className="weatherLocationCont">
        <Location city={this.state.city} country={this.state.country}></Location>
        <WeatherData data={this.state.data}></WeatherData>
        <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>
        );
    }
}

export default WeatherLocation;