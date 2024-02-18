import {
  GET_VEHICLES,
  CREATE_VEHICLE,
  SELL_VEHICLE,
  GET_VEHICLE,
} from "../actions/types";

const initialState = {
  vehicles: [],
  vehicle: {},
};

export default function vehicleReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VEHICLE:
      return {
        ...state,
        vehicle: action.payload,
      };
    case GET_VEHICLES:
      return {
        ...state,
        vehicles: action.payload,
      };
    case CREATE_VEHICLE:
      return {
        ...state,
        vehicle: action.payload,
      };
    case SELL_VEHICLE:
      return {
        ...state,
        vehicles: state.vehicles.filter(
          (vehicle) => vehicle.id !== action.payload
        ),
      };
    default:
      return state;
  }
}