import React from 'react';
import './FlightList.css'; // For FlightList.js

const FlightList = () => {
  const flights = [
    {
      id: 1,
      flightNumber: 'TN123',
      airline: 'Tunisair',
      departure: 'TUN',
      arrival: 'ORY',
      departureTime: '2024-07-10T08:00',
      arrivalTime: '2024-07-10T12:00'
    },
  ];

  return (
    <section id="flight-list">
      <h2>Existing Flights</h2>
      <table>
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Airline</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.flightNumber}</td>
              <td>{flight.airline}</td>
              <td>{flight.departure}</td>
              <td>{flight.arrival}</td>
              <td>{flight.departureTime}</td>
              <td>{flight.arrivalTime}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default FlightList;
