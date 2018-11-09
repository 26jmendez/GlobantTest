import React, { Component } from 'react';
import ForecastItem from './ForecastItem';
import PropTypes from 'prop-types';
import './styles.css';

const days = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes'
]
const data = {
    temperature: 10,
    humidity: 10,
    weatherState: "SUN",
    wind: "normal"
}

class ForecastExtended extends Component {

    renderForecastItemsDay() {
        return days.map(day => <ForecastItem key={day} weekDay={day} hour={8} data={data}></ForecastItem>);
    }

    render() {
        const {city} = this.props;
        return (
            <div>
                <h2 className="forecast-title">Pronóstico extendido para {city}</h2>
                {this.renderForecastItemsDay()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;