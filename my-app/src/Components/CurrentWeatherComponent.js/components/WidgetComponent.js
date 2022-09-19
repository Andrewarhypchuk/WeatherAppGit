import React from "react";
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";

import { deleteItem } from "../../../Redux/currentWeatherItems-reducer";
import formatToCelsius from './../../../Utiles/formatToCelsius';

const WidgetComponent = ({ widget, index }) => {
    const dispatch = useDispatch();

    return (
        <div className="widget">
            <img
                className="close"
                onClick={() => dispatch(deleteItem(index))}
                src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png "
                alt="close" />
            <div>Country: {widget.sys.country}</div>
            <div>Current conditions : {widget.weather[0].main}, {widget.weather[0].description} </div>
            <div className="d-flex">
                <img
                    src={`http://openweathermap.org/img/wn/${widget.weather[0].icon}@2x.png`}
                    alt="weather" />
                <span>Temaperature:{formatToCelsius(widget.main.temp)}°C {`(feels like${formatToCelsius(widget.main.feels_like)}°C)`} </span>
            </div>
            <div>Wind:{widget.wind.speed}  m/s</div>
            <NavLink to={`/forecast/${widget.zipcode}`}>
                <button className="button"> Weather Forecast</button>
            </NavLink>
        </div>
    )
}

export default WidgetComponent;