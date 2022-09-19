import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from 'react-redux';

import { setForecast } from '../../../Redux/weatherForecast-reducer';
import Forecast from "./ForecastListComponent";

const ForecastСontainer = () => {
  const { zipCode } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setForecast(zipCode))
  })

  return (<div>
    <Forecast />
  </div>)
}

export default ForecastСontainer;