import React from "react";
import { Route, Routes } from "react-router";

import CurrentWeatherComponent from "../CurrentWeatherComponent.js/CurrentWeatherComponent";
import WeatherForecastComponent from './../WeatherForecastComponent/WeatherForecastComponent';
import ForecastContainer from '../WeatherForecastComponent/components/ForecastContainer';

const MainComponent = () => {
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<CurrentWeatherComponent />} />
                <Route path="/current" element={<CurrentWeatherComponent />} />
                <Route path="/forecast" element={<WeatherForecastComponent />}>
                    <Route path=":zipCode" element={<ForecastContainer />} />
                </Route>
                <Route path="*" element={<CurrentWeatherComponent />} />
            </Routes>
        </div>
    )
}

export default MainComponent;