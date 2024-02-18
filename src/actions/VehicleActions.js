import {
  GET_ERRORS,
  GET_VEHICLE,
  GET_VEHICLES,
  CREATE_VEHICLE,
  SELL_VEHICLE,
} from "./types";
import axios from "axios";

export const createVehicle = (vehicle) => async (dispatch) => {
  try {
    await axios.post("https://java-web-backend-fikf.onrender.com/api/vehicles", vehicle);
    window.location.href = "/";
    dispatch({
      type: CREATE_VEHICLE,
      payload: vehicle,
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
export const getVehicle = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://java-web-backend-fikf.onrender.com/api/vehicles/${id}`
    );
    dispatch({
      type: GET_VEHICLE,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
export const getAllVehicles = () => async (dispatch) => {
  try {
    const response = await axios.get("https://java-web-backend-fikf.onrender.com/api/vehicles/all");
    dispatch({
      type: GET_VEHICLES,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
export const sellVehicle = (id) => async (dispatch) => {
  if (window.confirm(" Proceed selling the vehicle?")) {
    await axios.delete(`https://java-web-backend-fikf.onrender.com/api/vehicles/delete/${id}`);
    try {
      dispatch({
        type: SELL_VEHICLE,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data,
      });
    }
  }
};
