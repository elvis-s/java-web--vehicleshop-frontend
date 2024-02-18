import React from "react";
import { Link } from "react-router-dom";

function CreateVehicleButton() {
  return (
    <>
      <div className="container">
        <Link
          to="/createVehicleForm"
          type="submit"
          className=" btn btn-primary"
        >
          Create Vehicle
        </Link>
        <br></br>
      </div>
    </>
  );
}
export default CreateVehicleButton;
