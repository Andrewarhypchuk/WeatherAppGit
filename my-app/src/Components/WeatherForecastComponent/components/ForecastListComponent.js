import React, { useEffect } from "react";
import { useSelector } from 'react-redux';

import { selectForecast } from '../../../Redux/weatherForecast-reducer';
import { generatedId } from './../../../Utiles/generateId';
import ForecastDay from "./ForecastDayComponent";

const ForecastList = () => {
    const forecast = useSelector(selectForecast)

    return (<div>
        {forecast !== undefined && forecast.map((day) => {
            return <ForecastDay key={generatedId()} widget={day} />
        })
        }
    </div>)
}

export default ForecastList;