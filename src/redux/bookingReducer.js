/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import { BOOKING, DELETED } from "./actionTypes";

const initialState =  {
    data: []
};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKING:
            const newData = [...state.data];
            newData.push(action.payload);
            return { data: newData };

        case DELETED:
            const filteredData = state.data.filter((d) => d.id !== action.payload);
            return { data: filteredData };
    
        default:
            return state;
    }
};

export default bookingReducer;