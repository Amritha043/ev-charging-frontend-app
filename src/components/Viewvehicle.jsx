import axios from 'axios'
import React, { useEffect, useState } from 'react'


const ViewVehicle = () => {
     const [data,changeData]=useState([])
    const fetchData =()=>{
        axios.get("http://localhost:3002/view-booking").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(
        ()=>{
            fetchData()
        },[]
    )
  return (
    <div>
        
      <div className="container py-5">

        <h2 className="text-center page-title mb-5">
          EV Charging Bookings
        </h2>

        <div className="row g-4">

          {data.map((value, index) => (

            <div className="col-md-6 col-lg-4" key={index}>

              <div className="team-box">

                <div className="team-top">
                  <h5>{value.owner_name}</h5>
                  <span>Booking ID : {value.booking_id}</span>
                </div>

                <div className="team-info">

                  <p><strong>Email :</strong> {value.email}</p>

                  <p><strong>Phone :</strong> {value.phone}</p>

                  <p><strong>Vehicle Reg. No :</strong> {value.vehicle_registration_number}</p>

                  <p><strong>Brand :</strong> {value.vehicle_brand}</p>

                  <p><strong>Model :</strong> {value.vehicle_model}</p>

                  <p><strong>Battery Capacity :</strong> {value.battery_capacity_kwh} kWh</p>

                  <p><strong>Connector Type :</strong> {value.connector_type}</p>

                  <p><strong>Charging Date :</strong> {value.charging_date}</p>

                  <p><strong>Time Slot :</strong> {value.time_slot}</p>

                  <p><strong>Estimated Units :</strong> {value.estimated_units_kwh} kWh</p>

                  <p><strong>Charging Bay :</strong> {value.charging_bay_number}</p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </div>
  )
}

export default ViewVehicle