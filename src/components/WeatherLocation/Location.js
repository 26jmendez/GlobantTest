import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({ city, country }) => {
    return (
        <div className="locationCont">
            <h1>
                { city + ', ' + country }
            </h1>
        </div>  
    );
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
}

export default Location;