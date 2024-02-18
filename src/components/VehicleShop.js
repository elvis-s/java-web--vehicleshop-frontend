import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Vehicle from "./vehicle/Vehicle";
import { getAllVehicles } from "../actions/VehicleActions";
import CreateVehicleButton from "./vehicle/createVehicleButton";

function VehicleShop() {
  const dispatch = useDispatch();
  const vehicleList = useSelector(
    (state) => state.vehicleReducerContent.vehicles
  );
  const [manufacturerFilter, setManufacturerFilter] = useState("");
  const [minPriceFilter, setMinPrice] = useState("");
  const [maxPriceFilter, setMaxPrice] = useState("");

  useEffect(() => {
    dispatch(getAllVehicles());
  }, [dispatch]);

  function handleManufacturerChange(e) {
    const newManufacturer = e.target.value;
    setManufacturerFilter(newManufacturer);
  }
  function handleMinPriceChange(e) {
    setMinPrice(e.target.value);
  }
  function handleMaxPriceChange(e) {
    const maxPrice = e.target.value;
    setMaxPrice(maxPrice);
  }
  function filteredVehicles() {
    return vehicleList.filter((vehicle) => {
      const manufacturerMatch = vehicle.manufacturer
        .toLowerCase()
        .startsWith(manufacturerFilter.toLowerCase());
      const minPriceMatch =
        !minPriceFilter || vehicle.price >= parseFloat(minPriceFilter);
      const maxPriceMatch =
        !maxPriceFilter || vehicle.price <= parseFloat(maxPriceFilter);
      return manufacturerMatch && minPriceMatch && maxPriceMatch;
    });
  }

  return (
    <div className="container">
      <div className="m-auto row">
        <div className="container mb-2">
          <CreateVehicleButton />
        </div>
        <hr />
        <div className="col-md-4 mb-2">
          <div className="input-group">
            <div className="input-group-prepend">
              <span
                className="form-control form-control fw-bold text-decoration-underline"
                id="manufacturer-addon"
              >
                Manufacturer
              </span>
            </div>
            <input
              type="text"
              className="form-control form-control"
              id="manufacturerFilter"
              placeholder="Filter by Manufacturer"
              value={manufacturerFilter}
              onChange={handleManufacturerChange}
            />
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text fw-bold text-decoration-underline">
                Price
              </span>
            </div>
            <input
              type="text"
              className="form-control form-control"
              id="minPriceFilter"
              placeholder="Min Price"
              value={minPriceFilter}
              onChange={handleMinPriceChange}
            />
            <input
              type="text"
              className="form-control form-control"
              id="maxPriceFilter"
              placeholder="Max Price"
              value={maxPriceFilter}
              onChange={handleMaxPriceChange}
            />
          </div>
        </div>
      </div>
      <br />
      {filteredVehicles().map((vehicle) => (
        <Vehicle key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
}
export default VehicleShop;