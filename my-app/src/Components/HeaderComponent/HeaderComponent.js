import React from "react";
import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div className="header">
            <div>Weather</div>
            <NavLink to={"current"}>
                <button className="button">Current Weather</button>
            </NavLink>
            <NavLink to={"forecast"}>
                <button className="button">Weather Forecast</button>
            </NavLink>
        </div>
    )
}

export default HeaderComponent;