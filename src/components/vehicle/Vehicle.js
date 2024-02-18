import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sellVehicle } from "../../actions/VehicleActions";

function Vehicle(props) {
  const dispatch = useDispatch();
  const { vehicle } = props;
  const onSellClick = (id) => {
    dispatch(sellVehicle(id));
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-lg-9">
              <h5>Vehicle id: {vehicle.id}</h5>
              <h5> Vehicle Manufacturer: {vehicle.manufacturer}</h5>
              <h5> Vehicle Model: {vehicle.model}</h5>
              <h5> Vehicle Price: {vehicle.price}</h5>
              <h5>Vehicle horsePower: {vehicle.horsePower}</h5>
              <h5>Vehicle Color: {vehicle.color}</h5>
              <h5>Vehicle Mileage: {vehicle.mileage}</h5>
              <h5>Vehicle Production Year: {vehicle.productionYear}</h5>
              <h5>Vehicle Transmission: {vehicle.transmission}</h5>
              <h5>Vehicle Fuel Type: {vehicle.fuelType}</h5>
            </div>
            <div className="col-md-2 ">
              <Link
                to=""
                onClick={() => onSellClick(vehicle.id)}
                className="text-dark bg-white row "
              >
                {" "}
                Sell Vehicle
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Vehicle;
