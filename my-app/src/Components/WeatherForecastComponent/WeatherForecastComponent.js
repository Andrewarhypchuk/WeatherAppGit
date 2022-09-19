import React from "react";
import { Outlet, useNavigate } from "react-router";

const WeatherForecastComponent = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h3> Weather 5 day  Forecast</h3>
            <button className="button" onClick={() => navigate('/current')}>To current weather</button>
            <Outlet />
        </div>
    )
}

export default WeatherForecastComponent;