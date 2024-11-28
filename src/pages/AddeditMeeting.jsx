/* import React, { useState, useEffect } from 'react';
import { timePicker } from 'analogue-time-picker';
import '../css/style.css';
import '../css/clock.css';

function AddEditMeetingPage() {
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [clientMobile, setClientMobile] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [panNumber, setPanNumber] = useState('');
  const [meetingType, setMeetingType] = useState('');
  const [meetingAgenda, setMeetingAgenda] = useState('');
  

  const [showTime, setShowTime] = useState();
  const [hour, setHour] = useState('1');
  const [minute, setMinute] = useState('00');
  const [timeSet, setTimeSet] = useState(false);
  

  const [meetingLocation, setMeetingLocation] = useState('');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  useEffect(() => {
    setShowTime(
      timePicker({
        element: document.getElementById('clock'),
        mode: 12,
        width: '300px',
        time: { hour: 1, minute: 0 }
      })
    );
  }, []);

  function handleSetClick() {
    const object = showTime.getTime();
    setHour(object.hour);
    setMinute(object.minute);
    setTimeSet(true); 
  }

  function handleClearClick() {
    setHour('1');
    setMinute('00');
    setTimeSet(false); 
  }

  function handleCancelClick() {
    setHour('1');
    setMinute('00');
    setTimeSet(false); 
  }

  return (
    <div className="addeditmeeting-wrapper">
      <div className="addeditmeeting-page-container">
       
        <div className="addeditmeeting-date-picker-container form-field">
          <label className="addeditmeeting-label" htmlFor="meetingDate">Date:</label>
          <input
            className="addeditmeeting-input"
            type="date"
            id="meetingDate"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

      
        <div className="addeditmeeting-meeting-type-container form-field">
          <label className="addeditmeeting-label" htmlFor="meetingType">Meeting With:</label>
          <select
            className="addeditmeeting-input addeditmeeting-select"
            id="meetingType"
            value={meetingType}
            onChange={(e) => setMeetingType(e.target.value)}
          >
            <option value="">Select</option>
            <option value="new">New</option>
            <option value="existing">Existing Event</option>
            <option value="other">Other</option>
          </select>
        </div>

       
        <div className="addeditmeeting-client-details-form">
          <div className="form-field">
            <label className="addeditmeeting-label" htmlFor="clientName">Client Name:</label>
            <input
              className="addeditmeeting-input"
              type="text"
              id="clientName"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Enter client name"
            />
          </div>

          <div className="form-field">
            <label className="addeditmeeting-label" htmlFor="panNumber">PAN Number:</label>
            <input
              className="addeditmeeting-input"
              type="text"
              id="panNumber"
              value={panNumber}
              onChange={(e) => setPanNumber(e.target.value)}
              placeholder="Enter PAN number"
            />
          </div>

          <div className="form-field mobile-number-container">
            <label className="addeditmeeting-label" htmlFor="clientMobile">Mobile Number:</label>
            <input
              className="addeditmeeting-input"
              type="tel"
              id="clientMobile"
              value={clientMobile}
              onChange={(e) => setClientMobile(e.target.value)}
              placeholder="Enter mobile number"
            />
          </div>

          <div className="form-field">
            <label className="addeditmeeting-label" htmlFor="clientAddress">Client Address:</label>
            <input
              className="addeditmeeting-input"
              type="text"
              id="clientAddress"
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
              placeholder="Enter client address"
            />
          </div>

       
          <div className="addeditmeeting-meeting-agenda-container form-field">
            <label className="addeditmeeting-label" htmlFor="meetingAgenda">Meeting Agenda:</label>
            <select
              className="addeditmeeting-input addeditmeeting-select"
              id="meetingAgenda"
              value={meetingAgenda}
              onChange={(e) => setMeetingAgenda(e.target.value)}
            >
              <option value="">Select</option>
              <option value="portfolio">Portfolio</option>
              <option value="new-business">New Business</option>
              <option value="services">Services</option>
              <option value="task-b">Task By BA</option>
            </select>
          </div>
        </div>

       
        <div className="form-field">
          <label className="addeditmeeting-label" htmlFor="clock">Time:</label>
          <div className="clock-container">
            <div id="clock"></div>
            <div className="mat-card">
              <button className="Addedit-button" onClick={handleSetClick}>
                Set
              </button>
              <button className="Addedit-button" onClick={handleClearClick}>
                Clear
              </button>
            </div>
            <div className="mat-card">
              <h3>
                {timeSet ? `Selected Time = ${hour} : ${minute}` : 'No time selected'}
              </h3>
            </div>
          </div>
        </div>

     
        <div className="form-field">
          <label className="addeditmeeting-label" htmlFor="remark">Remark:</label>
          <textarea
            className="addeditmeeting-input"
            id="remark"
            placeholder="Enter any remarks"
          />
        </div>

      
        <div className="form-field">
          <label className="addeditmeeting-label" htmlFor="meetingLocation">Meeting Location:</label>
          <input
            className="addeditmeeting-input"
            type="text"
            id="meetingLocation"
            value={meetingLocation}
            onChange={(e) => setMeetingLocation(e.target.value)}
            placeholder="Enter meeting location"
          />
        </div>

        <div className="form-field">
          <label className="addeditmeeting-label" htmlFor="fromLocation">From:</label>
          <input
            className="addeditmeeting-input"
            type="text"
            id="fromLocation"
            value={fromLocation}
            onChange={(e) => setFromLocation(e.target.value)}
            placeholder="Enter from location"
          />
        </div>

        <div className="form-field">
          <label className="addeditmeeting-label" htmlFor="toLocation">To:</label>
          <input
            className="addeditmeeting-input"
            type="text"
            id="toLocation"
            value={toLocation}
            onChange={(e) => setToLocation(e.target.value)}
            placeholder="Enter to location"
          />
        </div>

       
        <div className="form-field" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button className="addeditmeeting-edit-btn">Edit</button>
        </div>

       
        <div className="form-field" style={{ display: 'flex', justifyContent: 'center' }}>
          <button className="addeditmeeting-submit-btn">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default AddEditMeetingPage;
 */


import React, { useState, useEffect } from 'react';
import { timePicker } from 'analogue-time-picker';
import '../css/style.css';
import '../css/clock.css';
import axios from 'axios';
function AddEditMeetingPage() {
  const API_URL = process.env.Addmeeting_APP_API_URL;
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [clientMobile, setClientMobile] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [panNumber, setPanNumber] = useState('');
  const [meetingType, setMeetingType] = useState('');
  const [meetingAgenda, setMeetingAgenda] = useState('');
  const [Remark, setRemark] = useState('');
  
  const [showTime, setShowTime] = useState();
  const [hour, setHour] = useState('1');
  const [minute, setMinute] = useState('00');
  const [timeSet, setTimeSet] = useState(false);

  const [meetingLocation, setMeetingLocation] = useState('');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  useEffect(() => {
    setShowTime(
      timePicker({
        element: document.getElementById('clock'),
        mode: 12,
        width: '130px', // Updated width for the clock
        time: { hour: 1, minute: 0 }
      })
    );
  }, []);

  function handleSetClick() {
    const object = showTime.getTime();
    setHour(object.hour);
    setMinute(object.minute);
    setTimeSet(true);
  }

  function handleClearClick() {
    setHour('1');
    setMinute('00');
    setTimeSet(false);
  }

  function handleCancelClick() {
    setHour('1');
    setMinute('00');
    setTimeSet(false);
  }
  const Addmeeting = async () => {
    console.log( selectedDate,
      meetingType,
      clientName,
      panNumber,
      clientMobile,
      clientAddress,
      meetingAgenda,
      timeSet,
      Remark,
      meetingLocation,
      fromLocation,
      toLocation
    );
        try {
          // Call the API
          const response = await axios.post(API_URL + "Meetings",{
            selectedDate,
            meetingType,
            clientName,
            panNumber,
            clientMobile,
            clientAddress,
            meetingAgenda,
            timeSet,
            Remark,
            meetingLocation,
            fromLocation,
            toLocation 
        });
    
          // Display success message
          alert(response.data);
          // navigate("/reset-password")
        } catch (error) {
    
          alert(error.response);
        }
      };
  return (
    <div className="addeditmeeting-wrapper">
      <div className="addeditmeeting-page-container">
        <div className="addeditmeeting-date-picker-container form-field">
          <label className="addeditmeeting-label" htmlFor="meetingDate">Date:</label>
          <input
            className="addeditmeeting-input"
            type="date"
            id="meetingDate"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        <div className="addeditmeeting-meeting-type-container form-field">
          <label className="addeditmeeting-label" htmlFor="meetingType">Meeting With:</label>
          <select
            className="addeditmeeting-input addeditmeeting-select"
            id="meetingType"
            value={meetingType}
            onChange={(e) => setMeetingType(e.target.value)}
          >
            <option value="">Select</option>
            <option value="new">New</option>
            <option value="existing">Existing Event</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="addeditmeeting-client-details-form">
          <div className="form-field">
            <label className="addeditmeeting-label" htmlFor="clientName">Client Name:</label>
            <input
              className="addeditmeeting-input"
              type="text"
              id="clientName"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Enter client name"
            />
          </div>

          <div className="form-field">
            <label className="addeditmeeting-label" htmlFor="panNumber">PAN Number:</label>
            <input
              className="addeditmeeting-input"
              type="text"
              id="panNumber"
              value={panNumber}
              onChange={(e) => setPanNumber(e.target.value)}
              placeholder="Enter PAN number"
            />
          </div>

          <div className="form-field mobile-number-container">
            <label className="addeditmeeting-label" htmlFor="clientMobile">Mobile Number:</label>
            <input
              className="addeditmeeting-input"
              type="tel"
              id="clientMobile"
              value={clientMobile}
              onChange={(e) => setClientMobile(e.target.value)}
              placeholder="Enter mobile number"
            />
          </div>

          <div className="form-field">
            <label className="addeditmeeting-label" htmlFor="clientAddress">Client Address:</label>
            <input
              className="addeditmeeting-input"
              type="text"
              id="clientAddress"
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
              placeholder="Enter client address"
            />
          </div>

          <div className="addeditmeeting-meeting-agenda-container form-field">
            <label className="addeditmeeting-label" htmlFor="meetingAgenda">Meeting Agenda:</label>
            <select
              className="addeditmeeting-input addeditmeeting-select"
              id="meetingAgenda"
              value={meetingAgenda}
              onChange={(e) => setMeetingAgenda(e.target.value)}
            >
              <option value="">Select</option>
              <option value="portfolio">Portfolio</option>
              <option value="new-business">New Business</option>
              <option value="services">Services</option>
              <option value="task-b">Task By BA</option>
            </select>
          </div>
        </div>

      <div className="form-field">
  <label className="addeditmeeting-label" htmlFor="clock">Time:</label>
  <div className="clock-container">
    <div id="clock"></div>
    <div className="mat-card">
      <button className="setclearbutton" onClick={handleSetClick}>
        Set
      </button>
      <button className="setclearbutton" onClick={handleClearClick}>
        Clear
      </button>
    </div>
    <div className="mat-card">
      <h4  style={{ marginBottom: '20px', fontSize: '14px' }}>
        {timeSet ? `Selected Time = ${hour} : ${minute}` : 'No time selected'}
      </h4>
    </div>
  </div>
</div>


        <div className="form-field">
          <label className="addeditmeeting-label" htmlFor="remark">Remark:</label>
          <textarea
            className="addeditmeeting-input"
            id="remark"
            placeholder="Enter any remarks"
            value={Remark}
            onChange={(e) => setRemark(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label className="addeditmeeting-label" htmlFor="meetingLocation">Meeting Location:</label>
        </div>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
  <label className="addeditmeeting-label" htmlFor="fromLocation" style={{ marginRight: '8px' }}>From:</label>
  <input
    className="addeditmeeting-input"
    type="text"
    id="fromLocation"
    value={fromLocation}
    onChange={(e) => setFromLocation(e.target.value)}
    placeholder="Enter from location"
  />
</div>

<div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '10px' }}>
  <label className="addeditmeeting-label" htmlFor="toLocation" style={{ marginRight: '8px' }}>To:</label>
  <input
    className="addeditmeeting-input"
    type="text"
    id="toLocation"
    value={toLocation}
    onChange={(e) => setToLocation(e.target.value)}
    placeholder="Enter to location"
  />
  <div className="form-field" style={{ display: 'flex', justifyContent: 'center' }}>
          <button className="addeditmeeting-submit-btn" onClick={Addmeeting}>Submit</button>
  </div>
</div>

      </div>
    </div>
    
  );
}

export default AddEditMeetingPage;
