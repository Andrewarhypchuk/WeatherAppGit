import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectItems, setListFromLocalStorage } from './../../../Redux/currentWeatherItems-reducer';
import { generatedId } from './../../../Utiles/generateId';
import WidgetComponent from './WidgetComponent';

const WidgetList = () => {
    const widgets = useSelector(selectItems);

    if (widgets.length !== 0) return (
        <>
            {widgets.map((widget, index) => {
                return <WidgetComponent widget={widget} index={index} key={generatedId()} />
            })
            }
        </>
    )
    return <div>Empty</div>
}

export default WidgetList;