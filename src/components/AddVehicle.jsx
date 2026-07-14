import axios from 'axios';
import React, { useState } from 'react'

const AddVehicle = () => {
    // Function part (state + handlers)
const [input, changeInput] = useState({
  booking_id: "",
  owner_name: "",
  email: "",
  phone: "",
  vehicle_registration_number: "",
  vehicle_brand: "",
  vehicle_model: "",
  battery_capacity_kwh: "",
  connector_type: "",
  charging_date: "",
  time_slot: "",
  estimated_units_kwh: "",
  charging_bay_number: "",
});

const inputHandler = (event) => {
  changeInput({
    ...input,
    [event.target.name]: event.target.value,
  });
};

const readValue = () => {
  console.log(input);

  axios
    .post("http://localhost:3002/add-booking", input)
    .then((response) => {
      console.log(response.data);
      alert("Booking Registered Successfully");
    })
    .catch((error) => {
      console.log(error);
      alert("Registration Failed");
    });
};
  return (
    <div>
<div className="container py-5">

  <div className="text-center mb-5">
    <h2 className="fw-bold text-success">
      ⚡ EV Charging Slot Booking
    </h2>
    <p className="text-muted">
      Book your charging station in just a few steps
    </p>
  </div>

  <div className="row">

    {/* Left Side Form */}
    <div className="col">

      <div className="card shadow-lg border-0 rounded-4">

        <div className="card-header bg-success text-white fs-4 py-3">
          Booking Details
        </div>

        <div className="card-body p-4">

          <div className="row g-3">

            <div className="col-md-6">
              <label className="form-label">Booking ID</label>
              <input
                type="number"
                className="form-control"
                name="booking_id"
                value={input.booking_id}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Owner Name</label>
              <input
                type="text"
                className="form-control"
                name="owner_name"
                value={input.owner_name}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={input.email}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={input.phone}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Vehicle Brand</label>
              <input
                type="text"
                className="form-control"
                name="vehicle_brand"
                value={input.vehicle_brand}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Vehicle Model</label>
              <input
                type="text"
                className="form-control"
                name="vehicle_model"
                value={input.vehicle_model}
                onChange={inputHandler}
              />
            </div>

            <div className="col-12">
              <label className="form-label">
                Registration Number
              </label>
              <input
                type="text"
                className="form-control"
                name="vehicle_registration_number"
                value={input.vehicle_registration_number}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">
                Battery Capacity
              </label>
              <input
                type="number"
                className="form-control"
                name="battery_capacity_kwh"
                value={input.battery_capacity_kwh}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">
                Connector Type
              </label>

              <select
                className="form-select"
                name="connector_type"
                value={input.connector_type}
                onChange={inputHandler}
              >
                <option>Select Connector</option>
                <option>CCS2</option>
                <option>CHAdeMO</option>
                <option>Type 2 AC</option>
                <option>Bharat AC001</option>
              </select>

            </div>

            <div className="col-md-4">
              <label className="form-label">Date</label>
              <input
                type="date"
                className="form-control"
                name="charging_date"
                value={input.charging_date}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Time Slot</label>
              <input
                type="text"
                className="form-control"
                name="time_slot"
                value={input.time_slot}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Charging Bay</label>
              <input
                type="text"
                className="form-control"
                name="charging_bay_number"
                value={input.charging_bay_number}
                onChange={inputHandler}
              />
            </div>

            <div className="col-12">
              <label className="form-label">
                Estimated Units (kWh)
              </label>
              <input
                type="number"
                className="form-control"
                name="estimated_units_kwh"
                value={input.estimated_units_kwh}
                onChange={inputHandler}
              />
            </div>

          </div>

          <button
            className="btn btn-success w-100 mt-4 py-3"
            onClick={readValue}
          >
            Confirm Booking
          </button>

        </div>

      </div>

    </div>

          

         

        
  </div>

</div>
    </div>
  )
}

export default AddVehicle