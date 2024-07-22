import React from 'react';
import './FlightAuthorizationForm.css';

const FlightAuthorizationForm = () => {
  return (
    <div className="container">
      <h1>Submit Flight Authorization Request</h1>
      <form>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="flight-number">Flight Number:</label></td>
              <td><input type="text" id="flight-number" name="flight-number" placeholder="**required**" required /></td>
            </tr>
            <tr>
              <td><label htmlFor="airline" required>Airline:</label></td>
              <td>
                <select id="airline" name="airline" required>
                  <option value="airline1">Airline 1</option>
                  <option value="airline2">Airline 2</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="departure-airport">Departure Airport:</label></td>
              <td><input type="text" id="departure-airport" name="departure-airport" placeholder="**required**" required/></td>
            </tr>
            <tr>
              <td><label htmlFor="arrival-airport">Arrival Airport:</label></td>
              <td><input type="text" id="arrival-airport" name="arrival-airport" placeholder="**required**" required /></td>
            </tr>
            <tr>
              <td><label htmlFor="departure-date">Departure Date:</label></td>
              <td><input type="date" id="departure-date" name="departure-date" placeholder="**required**" required /></td>
            </tr>
            <tr>
              <td><label htmlFor="arrival-date">Arrival Date:</label></td>
              <td><input type="date" id="arrival-date" name="arrival-date" placeholder="**required**"  required /></td>
            </tr>
            <tr>
              <td><label htmlFor="flight-type">Type of Flight:</label></td>
              <td>
                <select id="flight-type" name="flight-type" placeholder="**required**" required>
                  <option value="commercial">Commercial</option>
                  <option value="private">Private</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="aircraft-type">Aircraft Type:</label></td>
              <td><input type="text" id="aircraft-type" name="aircraft-type" placeholder="**required**" required /></td>
            </tr>
            <tr>
              <td><label htmlFor="num-passengers">Number of Passengers:</label></td>
              <td><input type="number" id="num-passengers" name="num-passengers" placeholder="**required**" required /></td>
            </tr>
            <tr>
              <td><label htmlFor="purpose">Purpose of Flight:</label></td>
              <td><textarea id="purpose" name="purpose" placeholder="**required**" required ></textarea></td>
            </tr>
            <tr>
              <td><label htmlFor="special-requests">Special Requests:</label></td>
              <td><textarea id="special-requests" name="special-requests" placeholder="**required**" required></textarea></td>
            </tr>
          </tbody>
        </table>
        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="reset">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default FlightAuthorizationForm;
