import React, { useState } from "react";
import { createVehicle } from "../../actions/VehicleActions";
import { useDispatch, useSelector } from "react-redux";

function AddVehicle() {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errorReducerContent);
  const [vehicleData, setVehicleData] = useState({
    manufacturer: "",
    model: "",
    horsePower: "",
    price: "",
    color: "",
    mileage: "",
    productionYear: "",
    transmission: "",
    fuelType: "",
  });

  const onChange = (e) => {
    setVehicleData({ ...vehicleData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newVehicle = {
      manufacturer: vehicleData.manufacturer,
      model: vehicleData.model,
      horsePower: vehicleData.horsePower,
      price: vehicleData.price,
      color: vehicleData.color,
      mileage: vehicleData.mileage,
      productionYear: vehicleData.productionYear,
      transmission: vehicleData.transmission,
      fuelType: vehicleData.fuelType,
    };
    dispatch(createVehicle(newVehicle));
  };

  return (
    <div>
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h3 className="text-center">Create Vehicle Form</h3>
              <hr />
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={` form-control form-control-lg mt-3 ${
                      errors.manufacturer ? "is-invalid" : ""
                    }`}
                    placeholder="Vehicle Manufacturer"
                    name="manufacturer"
                    value={vehicleData.manufacturer}
                    onChange={onChange}
                  ></input>
                  {errors.manufacturer && (
                    <p className="invalid-feedback">{errors.manufacturer}</p>
                  )}{" "}
                  <input
                    type="text"
                    className={` form-control form-control-lg mt-3 ${
                      errors.manufacturer ? "is-invalid" : ""
                    }`}
                    placeholder="Vehicle Model"
                    name="model"
                    value={vehicleData.model}
                    onChange={onChange}
                  ></input>
                  {errors.model && (
                    <p className="invalid-feedback">{errors.model}</p>
                  )}
                  <input
                    type="text"
                    className={` form-control form-control-lg mt-3 ${
                      errors.manufacturer ? "is-invalid" : ""
                    }`}
                    placeholder="Vehicle HorsePower"
                    name="horsePower"
                    value={vehicleData.horsePower}
                    onChange={onChange}
                  ></input>
                  {errors.horsePower && (
                    <p className="invalid-feedback">{errors.horsePower}</p>
                  )}
                  <input
                    type="text"
                    className={` form-control form-control-lg mt-3 ${
                      errors.manufacturer ? "is-invalid" : ""
                    }`}
                    placeholder="Vehicle Price"
                    name="price"
                    value={vehicleData.price}
                    onChange={onChange}
                  ></input>
                  {errors.price && (
                    <p className="invalid-feedback">{errors.price}</p>
                  )}
                  <input
                    type="text"
                    className={` form-control form-control-lg mt-3 ${
                      errors.manufacturer ? "is-invalid" : ""
                    }`}
                    placeholder="Vehicle Color"
                    name="color"
                    value={vehicleData.color}
                    onChange={onChange}
                  ></input>
                  {errors.color && (
                    <p className="invalid-feedback">{errors.color}</p>
                  )}
                  <input
                    type="text"
                    className={` form-control form-control-lg mt-3 ${
                      errors.manufacturer ? "is-invalid" : ""
                    }`}
                    placeholder="Vehicle Mileage"
                    name="mileage"
                    value={vehicleData.mileage}
                    onChange={onChange}
                  ></input>
                  {errors.mileage && (
                    <p className="invalid-feedback">{errors.mileage}</p>
                  )}
                  <input
                    type="text"
                    className={` form-control form-control-lg mt-3 ${
                      errors.manufacturer ? "is-invalid" : ""
                    }`}
                    placeholder="Vehicle Production Year"
                    name="productionYear"
                    value={vehicleData.productionYear}
                    onChange={onChange}
                  ></input>
                  {errors.productionYear && (
                    <p className="invalid-feedback">{errors.productionYear}</p>
                  )}
                  <select
                    className={` form-control form-control-lg mt-3 ${
                      errors.manufacturer ? "is-invalid" : ""
                    }`}
                    name="transmission"
                    value={vehicleData.transmission}
                    onChange={onChange}
                  >
                    <option value={"Select transmission type"}>
                      Select transmission type
                    </option>
                    <option value={"manual"}>Manual</option>
                    <option value={"autoamtic"}>Automatic</option>
                  </select>
                  {errors.transmission && (
                    <p className="invalid-feedback">{errors.transmission}</p>
                  )}
                  <select
                    className={` form-control form-control-lg mt-3 ${
                      errors.manufacturer ? "is-invalid" : ""
                    }`}
                    name="fuelType"
                    value={vehicleData.fuelType}
                    onChange={onChange}
                  >
                    <option value={"Select fuel type"}>Select fuel type</option>
                    <option value={"Diesel"}>Diesel</option>
                    <option value={"Petrol"}>Petrol</option>
                    <option value={"LPG"}>LPG</option>
                  </select>
                  {errors.fuelType && (
                    <p className="invalid-feedback">{errors.fuelType}</p>
                  )}
                </div>
                <input
                  type="submit"
                  value="submit"
                  className="btn btn-primary mt-3"
                ></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddVehicle;
