import React, { useState } from "react";
import "../css/style.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

const Inprogress = () => {
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        let updatedValues = [...clientData.totalClientAUM]; // Copy the current values
        if (checked) {
            // Add the value to the array if checked
            updatedValues.push(value);
        } else {
            // Remove the value from the array if unchecked
            updatedValues = updatedValues.filter((item) => item !== value);
        }
        setClientData((prevData) => ({
            ...prevData,
            totalClientAUM: updatedValues,
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClientData({
            ...clientData,
            [name]: value,
        });
    };

    const handleInputChangeTime = (e) => {
        const { name, value } = e.target;
        setClientData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const [clientData, setClientData] = useState({
        clientAge: 40,
        totalClientAUM: [],
        totalSIPAmount: "10,000",
        annualIncome: "200,000",
        clientGoal: "",
        clientOccupation: "",
        firstSIPDate: "",
        followUpTime: "10:00",
        lastMeetingDate: "2024-10-15",
        averageReturn: "8%",
        clientBehaviour: "Conservative",
        clientReactMarket: "Stable",
        favouriteAssetClass: "Equity",
        familyMembers: "2",
        termInsurance: "Yes",
        mediclaim: "Yes",
        carInsurance: "Yes",
        otherInsurance: "Yes",
    });

    return (
        <div className="inprogress-container">
            {/* Profile Details Section */}
            <div className="inprogress-details">
                <div className="inprogress-row">
                    <div className="inprogress-field">
                        <label className="inprogress-label">Meeting Status:</label>
                        <select
                            name="totalClientAUM"
                            value={clientData.totalClientAUM}
                            onChange={handleInputChange}
                            className="inprogress-input inprogress-dropdown"
                        >
                            <option value="">Select Status</option>
                            <option value="300000">Close</option>
                            <option value="100000">In progress from client side</option>
                            <option value="200000">In progress from my side</option>
                            <option value="500000">Others</option>
                        </select>
                    </div>
                </div>

                <div className="inprogress-row">
                    <label className="inprogress-label">Meeting Agenda:</label>
                    <div className="inprogress-checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                name="totalClientAUM"
                                value="Portfolio"
                                checked={clientData.totalClientAUM.includes("Portfolio")}
                                onChange={handleCheckboxChange}
                            />
                            &nbsp;Portfolio
                        </label>
                        &nbsp;&nbsp;&nbsp;
                        <label>
                            <input
                                type="checkbox"
                                name="totalClientAUM"
                                value="New Business"
                                checked={clientData.totalClientAUM.includes("New Business")}
                                onChange={handleCheckboxChange}
                            />
                            &nbsp;New Business
                        </label>
                        &nbsp;&nbsp;&nbsp;
                        <label>
                            <input
                                type="checkbox"
                                name="totalClientAUM"
                                value="Services"
                                checked={clientData.totalClientAUM.includes("Services")}
                                onChange={handleCheckboxChange}
                            />
                            &nbsp;Services
                        </label>
                        &nbsp;&nbsp;&nbsp;
                        <label>
                            <input
                                type="checkbox"
                                name="totalClientAUM"
                                value="Task by BA"
                                checked={clientData.totalClientAUM.includes("Task by BA")}
                                onChange={handleCheckboxChange}
                            />
                            &nbsp;Task by BA
                        </label>
                    </div>
                </div>

                <div className="inprogress-row">
                    <label className="inprogress-label">Products:</label>
                    <div className="inprogress-radio-group">
                        <label>
                            <input
                                type="radio"
                                name="product"
                                value="Mutual Funds"
                                onChange={handleInputChange}
                            />
                            &nbsp;Mutual Funds
                        </label>
                        &nbsp;&nbsp;&nbsp;
                        <label>
                            <input
                                type="radio"
                                name="product"
                                value="Fixed Deposit"
                                onChange={handleInputChange}
                            />
                            &nbsp;Fixed Deposit
                        </label>
                        &nbsp;&nbsp;&nbsp;
                        <label>
                            <input
                                type="radio"
                                name="product"
                                value="Insurance"
                                onChange={handleInputChange}
                            />
                            &nbsp;Insurance
                        </label>
                        &nbsp;&nbsp;&nbsp;
                        <label>
                            <input
                                type="radio"
                                name="product"
                                value="Others"
                                onChange={handleInputChange}
                            />
                            &nbsp;Others
                        </label>
                    </div>
                </div>

                <div className="inprogress-row">
                    <div className="inprogress-field">
                        <label className="inprogress-label">Conveyance Amount:</label>
                        <input
                            type="text"
                            name="clientGoal"
                            placeholder="Amount in INR"
                            onChange={handleInputChange}
                            className="inprogress-input"
                        />
                    </div>
                    <div className="inprogress-field">
                        <label className="inprogress-label">Remark:</label>
                        <input
                            type="text"
                            name="clientOccupation"
                            placeholder="Share your remark here..."
                            onChange={handleInputChange}
                            className="inprogress-input"
                        />
                    </div>
                </div>

                <div className="inprogress-row">
                    <div className="inprogress-field">
                        <label className="inprogress-label">Follow-up Date:</label>
                        <DatePicker
                            selected={clientData.firstSIPDate ? new Date(clientData.firstSIPDate) : null}
                            onChange={(date) => handleInputChange({ target: { name: "firstSIPDate", value: date } })}
                            className="inprogress-datepicker"
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Select a date"
                            popperPlacement="bottom"
                        />
                    </div>
                    <div className="inprogress-field">
                        <label className="inprogress-label">Follow-up Time:</label>
                        <TimePicker
                            name="followUpTime"
                            value={clientData.followUpTime}
                            onChange={(time) => handleInputChangeTime({ target: { name: "followUpTime", value: time } })}
                            className="inprogress-timepicker"
                        />
                    </div>
                </div>

                <div className="inprogress-row">
                    <button className="inprogress-submit-button">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Inprogress;
