import React from "react";

import formatToCelsius from '../../../Utiles/formatToCelsius';

const ForecastDay = ({ widget }) => {

    return (
        <div className="widget">
            <div>Current conditions : {widget.weather[0].main}, {widget.weather[0].description} </div>
            <div className="d-flex">
                <img
                    src={`http://openweathermap.org/img/wn/${widget.weather[0].icon}@2x.png`}
                    alt="weather"
                />
                <span>Temaperature:{formatToCelsius(widget.main.temp)}°C {`(feels like${formatToCelsius(widget.main.feels_like)}°C)`} </span>
            </div>
            <div>Wind:{widget.wind.speed}  m/s</div>
        </div>
    )
}

export default ForecastDay;