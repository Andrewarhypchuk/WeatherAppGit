import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import { addItem, selectZipCode, setZipCode, selectStatus } from './../../../Redux/currentWeatherItems-reducer';


const AddWidgetComponent = () => {
    const dispatch = useDispatch();

    const zipCode = useSelector(selectZipCode);
    const status = useSelector(selectStatus)

    return (
        <div className="addWidget_container">
            {status === 'failed' && <div>Bad ZipCode try again!</div>}
            <div>Add a location</div>
            <div>
                <input
                    value={zipCode}
                    onChange={(e) => dispatch(setZipCode(e.target.value))}
                    placeholder="   Enter a ZipCode..."
                    type='number' />
                <button
                    onClick={() => dispatch(addItem(zipCode))}
                    className="button">Add Location</button>
            </div>
        </div>
    )
}

export default AddWidgetComponent;