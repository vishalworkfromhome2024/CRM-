
import React, { useState, useEffect } from 'react'; 
import profileImage from '../assets/profileImage.png';

const Clientprofile = () => {
  const [formData, setFormData] = useState({
    clientAge: '',
    clientAgeWithUs: '',
    totalAUM: '',
    totalSIPAmount: '',
    clientAnnualIncome: '',
    clientGoal: [],
    clientOccupation: '',
    firstSIPDate: '',
    firstLumpsumDate: '',
    lastBusinessProduct: '',
    lastMeetingDate: '',
    averageReturn: '',
    clientBehavior: '',
    clientReactsMarket: '',
    favoriteAssetClass: [],
    familyMember: '',
    termInsurance: '',
    mediclaim: '',
    carInsurance: '',
    otherInsurances: ''
  });
console.log(formData)
  const [isGoalPopupVisible, setIsGoalPopupVisible] = useState(false);
  const [isAssetClassPopupVisible, setIsAssetClassPopupVisible] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedAssetClass, setSelectedAssetClass] = useState("");
  const [popupSelections, setPopupSelections] = useState([]); 
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedAge, setSelectedAge] = useState('');
  

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  if (type === 'checkbox') {
    if (checked) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: [...prevData[name], value],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: prevData[name].filter((item) => item !== value),
      }));
    }
  } else {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
};

const handleInputClick = (goal) => {
  if (goal === "ClientGoal") {
    setIsGoalPopupVisible(true);
  } else if (goal === "favoriteAssetClass") {
    setIsAssetClassPopupVisible(true);
  }
};

const closePopup = () => {
  setIsGoalPopupVisible(false);
  setIsAssetClassPopupVisible(false);
};

// Handle options selection in the popup (track selected checkboxes)
const handlePopupOptionChange = (e) => {
  const { value, checked } = e.target;
  if (checked) {
    setPopupSelections((prevSelections) => [...prevSelections, value]);
  } else {
    setPopupSelections((prevSelections) =>
      prevSelections.filter((option) => option !== value)
    );
  }
};

const handleSave = () => {
  if (isGoalPopupVisible) {
    setFormData((prevData) => ({
      ...prevData,
      clientGoal: popupSelections, // Save selections for client goals
    }));
    setIsGoalPopupVisible(false); // Close the client goal popup
  } else if (isAssetClassPopupVisible) {
    setFormData((prevData) => ({
      ...prevData,
      favoriteAssetClass: popupSelections, // Save selections for favorite asset class
    }));
    setIsAssetClassPopupVisible(false); // Close the asset class popup
  }
  // Reset selections
  setPopupSelections([]);
};
const handleCancel = () => {
  setPopupSelections([]); // Reset the selections on cancel
  if (isGoalPopupVisible) {
    setIsGoalPopupVisible(false);
  } else if (isAssetClassPopupVisible) {
    setIsAssetClassPopupVisible(false);
  }
};



  // Toggle dropdown visibility
  const toggleDropdown = () => {
    console.log("Toggling dropdown...", isDropdownVisible);  // Log the current state before toggle
    setIsDropdownVisible(prevState => !prevState); // Toggle the dropdown visibility
  };

  // Handle selecting an age from the dropdown
  const handleAgeSelect = (age) => {
    setSelectedAge(age);
    setIsDropdownVisible(false); // Hide dropdown after selection
  };

  // Handle click outside the dropdown to close it
  const handleClickOutside = (e) => {
    const dropdown = document.getElementById('dropdown-popup');
    if (dropdown && !dropdown.contains(e.target)) {
      setIsDropdownVisible(false); // Close dropdown if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

const handleSubmit = (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Add any form submission logic here
  console.log("Form submitted", formData); // Example: log the form data
};
  




return (
  <form className="clientprofile-form" onSubmit={handleSubmit}>
    <div className="clientprofile-profile-section">
    <div className="clientprofile-img">
  <img
    src={profileImage}
    alt="client-profile"
    className="client-profile"
  />
   </div>
  <div className="clientprofile-details">
  <div>
  <p className='detailspara' ><strong>{formData.clientName || 'John Does'}</strong></p>
  <p className='detailspara'>{formData.clientCity || 'Germany'}</p>
  <p className='detailspara'>{formData.clientPhone || '1234567890'}</p>
  </div>  
  <div> 
  <button type="button" className='new-button' >
    New
  </button>
  <button type="button" className='edit-button'>
    Edit
  </button>
  </div>
   </div>
     </div>
   {/*  <div className="clientprofile-input-group">
      <label className="clientprofile-label">Client Age</label>
      <select
        className="clientprofile-input"
        name="clientAge"
        value={formData.clientAge}
        onChange={handleChange}
        required
      >
        <option value="">Select Age Range</option>
        <option value="Above 16" >Below 18</option>
        <option value="18 to 25">18 to 25</option>
        <option value="26 to 41">26 to 41</option>
        <option value="41 to 60">41 to 60</option>
        <option value="Above 60">Above 60</option>
      </select>
    </div> */}


<div className="clientprofile-input-group">
        <label className="clientprofile-label">Client Age</label>

        <div className="dropdown-container">
          <input
            type="text"
            className="clientprofile-input"
            value={selectedAge || 'Select Age Range'}
            onClick={toggleDropdown}
            readOnly
          />

     
          {isDropdownVisible && (
            <div id="dropdown-popup" className="`dropdown-popup`">
              <ul>
                <li onClick={() => handleAgeSelect('Below 18')}>Below 18</li>
                <li onClick={() => handleAgeSelect('18 to 25')}>18 to 25</li>
                <li onClick={() => handleAgeSelect('26 to 41')}>26 to 41</li>
                <li onClick={() => handleAgeSelect('41 to 60')}>41 to 60</li>
                <li onClick={() => handleAgeSelect('Above 60')}>Above 60</li>
              </ul>
            </div>
          )}
        </div>
      </div>


    <div  className="clientprofile-input-group">
      <label className="clientprofile-label">Client Age with Us</label>
      <select
        className="clientprofile-input"
        name="clientAgeWithUs"
        value={formData.clientAgeWithUs}
        onChange={handleChange}
        required
      >
        <option value="">Select Age with Us</option>
        <option value="0 to 2 years">0 to 2 years</option>
        <option value="2 to 5 years">2 to 5 years</option>
        <option value="5 to 10 years">5 to 10 years</option>
        <option value="Above 10 years">Above 10 years</option>
      </select>
    </div>

    <div  className="clientprofile-input-group">
      <label className="clientprofile-label">Total Client AUM</label>
      <input
        className="clientprofile-input"
        type="text"
        name="totalAUM"
        value={formData.totalAUM}
        onChange={handleChange}
        required
      />
    </div>

    <div className="clientprofile-input-group">
      <label className="clientprofile-label">Total SIP Amount</label>
      <input
        className="clientprofile-input"
        type="text"
        name="totalSIPAmount"
        value={formData.totalSIPAmount}
        onChange={handleChange}
        required
      />
    </div>

    <div  className="clientprofile-input-group">
      <label className="clientprofile-label">Client Annual Income</label>
      <select
        className="clientprofile-input"
        name="clientAnnualIncome"
        value={formData.clientAnnualIncome}
        onChange={handleChange}
        required
      >
        <option value="">Select Annual Income Range</option>
        <option value="Below 5 Lakhs">Below 5 Lakhs</option>
        <option value="5 Lakhs to 10 Lakhs">5 Lakhs to 10 Lakhs</option>
        <option value="10 Lakhs to 20 Lakhs">10 Lakhs to 20 Lakhs</option>
        <option value="Above 20 Lakhs">Above 20 Lakhs</option>
      </select>
    </div>

<div className="clientprofile-input-group">
  <label className="clientprofile-label">Client Goal</label>

  <div>
    <input
      className="clientprofile-input"
      type="text"
      name="clientGoal"
      value={formData.clientGoal.join(', ')} 
      onClick={() => handleInputClick("ClientGoal")}
      readOnly
      required
    />
  </div>

 
  {isGoalPopupVisible  && (
    <div className="clientprofile-popup">
      <div className="clientprofilepopup-content">
        <label>
          <input
            type="checkbox"
            value="Education"
            checked={popupSelections.includes("Education")}
            onChange={handlePopupOptionChange}
          />
          <span>Education</span> 
        </label>
        <label>
          <input
            type="checkbox"
            value="Home Purchase"
            checked={popupSelections.includes("Home Purchase")}
            onChange={handlePopupOptionChange}
          />
        <span> Home Purchase </span>  
        </label>
        <label>
          <input
            type="checkbox"
            value="Retirement"
            checked={popupSelections.includes("Retirement")}
            onChange={handlePopupOptionChange}
          />
          <span> Retirement </span>
        </label>
        <label>
          <input
            type="checkbox"
            value="Vacation"
            checked={popupSelections.includes("Vacation")}
            onChange={handlePopupOptionChange}
          />
         <span>  Vacation </span>
        </label>
        <label>
          <input
            type="checkbox"
            value="Wealth Building"
            checked={popupSelections.includes("Wealth Building")}
            onChange={handlePopupOptionChange}
          />
          <span>  Wealth Building  </span>
        </label>
        <label>
          <input
            type="checkbox"
            value="Vehicle Purchase"
            checked={popupSelections.includes("Vehicle Purchase")}
            onChange={handlePopupOptionChange}
          />
           <span> Vehicle Purchase  </span>
        </label>
        <div className="clientprofile-popup-buttons">
          <button onClick={handleSave} className='clientprofilepopup-btnsave'>Save</button>
          <button onClick={handleCancel} className='clientprofilepopup-btncancel'>Cancel</button>
        </div>
      </div>
    </div>
  )}
</div>

<div  className="clientprofile-input-group">
        <label className="clientprofile-label">Client Occupation</label>
        <select
         className="clientprofile-input"
          name="clientOccupation"
          value={formData.clientOccupation}
          onChange={handleChange}
          required
        >
          <option value="">Select Occupation</option>
          <option value="Business">Business</option>
          <option value="Professional">Professional</option>
          <option value="Government Employee">Government Employee</option>
          <option value="Private Sector Employee">Private Sector Employee</option>
          <option value="Student">Student</option>
          <option value="Retired">Retired</option>
          <option value="Housewife">Housewife</option>
        </select>
      </div>

      <div  className="clientprofile-input-group">
        <label className="clientprofile-label">First SIP Date</label>
        <input
          className="clientprofile-input"
          type="text"
          name="firstSIPDate"
          placeholder="Enter First SIP Date (MM/DD/YYYY)"
          value={formData.firstSIPDate}
          onChange={handleChange}
        />
      </div>

      <div  className="clientprofile-input-group">
        <label className="clientprofile-label">First Lumpsum Date</label>
        <input
         className="clientprofile-input"
          type="text"
          name="firstLumpsumDate"
          placeholder="Enter First Lumpsum Date (MM/DD/YYYY)"
          value={formData.firstLumpsumDate}
          onChange={handleChange}
        />
      </div>

      <div  className="clientprofile-input-group">
        <label className="clientprofile-label">Last Business Product</label>
        <input
          className="clientprofile-input"
          type="text"
          name="lastBusinessProduct"
          placeholder="Enter Last Business Product"
          value={formData.lastBusinessProduct}
          onChange={handleChange}
        />
      </div>

      <div  className="clientprofile-input-group">
        <label className="clientprofile-label">Last Meeting Date</label>
        <input
        className="clientprofile-input"
          type="date"
          name="lastMeetingDate"
          value={formData.lastMeetingDate}
          onChange={handleChange}
        />
      </div>

      <div  className="clientprofile-input-group">
        <label className="clientprofile-label">Average Return</label>
        <input
          className="clientprofile-input"
          type="text"
          name="averageReturn"
          value={formData.averageReturn}
          onChange={handleChange}
        />
      </div>

      <div  className="clientprofile-input-group">
        <label className="clientprofile-label">Client Behavior</label>
        <select
          name="clientBehavior"
          value={formData.clientBehavior}
          onChange={handleChange}
        >
          <option value="">Select Client Behavior</option>
          <option value="Aggressive">Aggressive</option>
          <option value="Moderate">Moderate</option>
          <option value="Conservative">Conservative</option>
        </select>
      </div>

      <div  className="clientprofile-input-group">
        <label className="clientprofile-label">Client Reacts with Market</label>
        <select
          name="clientReactsMarket"
          value={formData.clientReactsMarket}
          onChange={handleChange}
        >
          <option value="">Select Reaction to Market</option>
          <option value="Positive">Positive</option>
          <option value="Negative">Negative</option>
          <option value="Neutral">Neutral</option>
        </select>
      </div>


     <div className="clientprofile-input-group">
  <label className="clientprofile-label">Client Favourite Asset Class</label>

  <div>
    <input
      className="clientprofile-input"
      type="text"
      name="favoriteAssetClass"
      value={formData.favoriteAssetClass.join(', ')} 
      onClick={() => handleInputClick("favoriteAssetClass")}
      readOnly
      required
    />
  </div>

  {isAssetClassPopupVisible && (
    <div className="clientprofile-popup">
      <div className="clientprofilepopup-content">
        {/* Updated checkboxes with different values */}
        <label>
          <input
            type="checkbox"
            value="Stocks"
            checked={popupSelections.includes("Stocks")}
            onChange={handlePopupOptionChange}
          />
          <span>Stocks</span> 
        </label>
        <label>
          <input
            type="checkbox"
            value="Bonds"
            checked={popupSelections.includes("Bonds")}
            onChange={handlePopupOptionChange}
          />
          <span>Bonds</span>  
        </label>
        <label>
          <input
            type="checkbox"
            value="Real Estate"
            checked={popupSelections.includes("Real Estate")}
            onChange={handlePopupOptionChange}
          />
          <span>Real Estate</span>
        </label>
        <label>
          <input
            type="checkbox"
            value="Commodities"
            checked={popupSelections.includes("Commodities")}
            onChange={handlePopupOptionChange}
          />
          <span>Commodities</span>
        </label>

        {/* Save and Cancel buttons */}
        <div className="clientprofile-popup-buttons">
          <button  className="clientprofilepopup-btnsave" onClick={handleSave}>Save</button>
          <button className="clientprofilepopup-btncancel" onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  )}
</div>
 
     
      
      <div  className="clientprofile-input-group">
        <label className="clientprofile-label">Family Member</label>
        <select
          
          name="familyMember"
          value={formData.familyMember}
          onChange={handleChange}
        >
          <option value="">Select Family Member</option>
          <option value="Spouse">Spouse</option>
          <option value="Parent">Parent</option>
          <option value="Sibling">Sibling</option>
          <option value="Child">Child</option>
        </select>
      </div>

      <div  className="clientprofile-input-group">
        <label className="clientprofile-label">Term Insurance</label>
        <select
          name="termInsurance"
          value={formData.termInsurance}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div  className="clientprofile-input-group">
        <label className="clientprofile-label">Mediclaim</label>
        <select
          name="mediclaim"
          value={formData.mediclaim}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div  className="clientprofile-input-group">
        <label className="clientprofile-label"> Vehicle Insurance</label>
        <select
          name="carInsurance"
          value={formData.carInsurance}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div  className="clientprofile-input-group">
        <label className="clientprofile-label">Other Insurances</label>
        <input
          className="clientprofile-input"
          type="text"
          name="otherInsurances"
          placeholder="Enter Other Insurances"
          value={formData.otherInsurances}
          onChange={handleChange}
        />
      </div>   
      <button type="submit"  className='save-btn' >Save</button>
    </form>

);
};

export default Clientprofile;