import React, { useState } from 'react';
import './AddFlight.css'; 

const AddFlight = () => {
  const [formData, setFormData] = useState({
    flightNumber: '',
    airline: '',
    departure: '',
    arrival: '',
    departureTime: '',
    arrivalTime: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      flightNumber: '',
      airline: '',
      departure: '',
      arrival: '',
      departureTime: '',
      arrivalTime: ''
    });
  };

  return (
    <section id="add-flight">
      <div className="form-container">
        <h2>Add New Flight</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="flightNumber"
              name="flightNumber"
              value={formData.flightNumber}
              onChange={handleInputChange}
              placeholder="Flight Number"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              id="airline"
              name="airline"
              value={formData.airline}
              onChange={handleInputChange}
              placeholder="Airline"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              id="departure"
              name="departure"
              value={formData.departure}
              onChange={handleInputChange}
              placeholder="Departure Airport"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              id="arrival"
              name="arrival"
              value={formData.arrival}
              onChange={handleInputChange}
              placeholder="Arrival Airport"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="datetime-local"
              id="departureTime"
              name="departureTime"
              value={formData.departureTime}
              onChange={handleInputChange}
              placeholder="Departure Time"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="datetime-local"
              id="arrivalTime"
              name="arrivalTime"
              value={formData.arrivalTime}
              onChange={handleInputChange}
              placeholder="Arrival Time"
              required
            />
          </div>

          <div className="form-buttons">
          <button type="submit">Add Flight</button>
          <button type="reset">Cancel</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddFlight;
