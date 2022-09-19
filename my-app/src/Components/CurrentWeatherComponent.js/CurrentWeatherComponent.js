import React,{useEffect} from "react";
import { useDispatch } from 'react-redux';

import AddWidgetComponent from "./components/AddWidgetComponent";
import WidgetList from "./components/WidgetListComponent";
import { setListFromLocalStorage } from "../../Redux/currentWeatherItems-reducer";

const CurrentWeatherComponent = () => {
    const dispatch = useDispatch()
    
    useEffect(()=>{
        localStorage.getItem('list') && localStorage.getItem('list').length !== 0
        && dispatch(setListFromLocalStorage(JSON.parse(localStorage.getItem("list"))))
    })
    return (
        <>
            <h3>Add Widget</h3>
            <AddWidgetComponent />
            <WidgetList />
        </>
    )
}

export default CurrentWeatherComponent;