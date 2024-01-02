import { BOOKING, DELETED } from "./actionTypes"

// confirm Booking 
export const makeBooking = (data) => {
    return {
        type: BOOKING,
        payload: data,
    }
};

// delete booking 
export const deleteBooking = (id) => {
    return {
        type: DELETED,
        payload: id,
    }
};
