import React from 'react';
import {CarForm, CarList, CarSearch, CarValue} from "../Components";

const CarWidget = () => {
    return (
        <div>
            <CarForm/>
            <CarList/>
            <CarSearch/>
            <CarValue/>
        </div>
    );
};

export default CarWidget;
