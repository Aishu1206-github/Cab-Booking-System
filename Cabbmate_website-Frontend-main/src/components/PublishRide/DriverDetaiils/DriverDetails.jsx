import React, { useState } from "react";
import "./DriverDetails.css";

const DriverDetails = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [isCodeDisbaled, setIsCodeDisabled] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [formData, setFormData] = useState({
    driverName: '',
    driverContact: '',
    alternativeContact: '',
    brandName: '',
    model: '',
    numberPlate: '',
    carColor: ''
  });
  const countryCodes = [
    "+1", "+91", "+44", "+61", "+81", "+49", "+33", "+39", "+34", "+55",
  ];
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleCountryCodeChange = (e) => {
    const newCode = e.target.value;
    setSelectedCountryCode(newCode)

    if(newCode === '+91'){
      setIsCodeDisabled(false);
    }
    else{
      setIsCodeDisabled(true);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBlur = (fieldName) => {
    let isValid = true;
    let errorMessage = '';

    switch(fieldName) {
      case 'driverName':
        isValid = formData.driverName.trim().length >= 3;
        errorMessage = 'Name must be at least 3 characters';
        break;
      case 'driverContact':
        isValid = /^\d{10}$/.test(formData.driverContact);
        errorMessage = 'Contact number must be 10 digits';
        break;
      case 'brandName':
        isValid = formData.brandName.trim().length > 0;
        errorMessage = 'Brand name is required';
        break;
      case 'model':
        isValid = formData.model.trim().length > 0;
        errorMessage = 'Model is required';
        break;
      case 'numberPlate':
        isValid = formData.numberPlate.trim().length > 0;
        errorMessage = 'Number plate is required';
        break;
      case 'carColor':
        isValid = formData.carColor.trim().length > 0;
        errorMessage = 'Car color is required';
        break;
      default:
        break;
    }

    setValidationErrors(prev => ({
      ...prev,
      [fieldName]: !isValid ? errorMessage : ''
    }));

    return isValid;
  };

  const handleNext = () => {
    const driverFields = ['driverName', 'driverContact'];
    const isValid = driverFields.every(field => handleBlur(field));
    
    if (isValid) {
      setCurrentSlide(2);
    }
  };

  const handleBack = () => {
    setCurrentSlide(1);
  };

  const handleSubmit = () => {
    const carFields = ['brandName', 'model', 'numberPlate', 'carColor'];
    const isValid = carFields.every(field => handleBlur(field));
    
    if (isValid) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <>
      <div className="driver_title">
        <h2 className='text-center text-2xl font-bold my-3'>Enter Driver's details</h2>
        <h5 className='text-center text-white my-2 mb-5'>
          Please provide the necessary details. ( Note: <span style={{color: 'red'}}>*</span> denotes mandatory field )
        </h5>
      </div>
      <div className="driver">
        {currentSlide === 1 ? (
          <div className="driver_details">
            <h2>Driver Details</h2>
            <form action="" className="driver_form">
              <div className="input_box">
                <label htmlFor="driverName">
                  Driver's Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  name="driverName"
                  value={formData.driverName}
                  onChange={handleChange}
                  placeholder="Enter Driver name" 
                  onBlur={() => handleBlur('driverName')}
                  className={validationErrors.driverName ? 'error-input' : ''}
                />
                {validationErrors.driverName && (
                  <span className="error-message">{validationErrors.driverName}</span>
                )}
              </div>
              <div className="input_box">
                <label htmlFor="driverContact">
                  Driver's Contact No. <span className="text-red-500">*</span>
                </label>
                <div className="number">
                  <select 
                    name="" 
                    id="countryCode">
                    value={selectedCountryCode} 
                    onChange={handleCountryCodeChange}
                    {
                      countryCodes.map((code, index) => (
                        <option 
                          key={index}
                          value={code}
                          disabled={isCodeDisbaled && selectedCountryCode !== code}
                          >
                            {code}
                        </option>
                      ))
                    }
                  </select>
                  <input 
                    type="number" 
                    name="driverContact"
                    value={formData.driverContact}
                    onChange={handleChange}
                    placeholder="Enter Driver number"
                    onBlur={() => handleBlur('driverContact')}
                    className={validationErrors.driverContact ? 'error-input' : ''}
                  />
                </div>
                {validationErrors.driverContact && (
                  <span className="error-message">{validationErrors.driverContact}</span>
                )}
              </div>
              <div className="input_box">
                <label for="driver_name">Alternative Contact No.</label>
                <div className="number">
                  <select name="" id="">
                    <option value="">+1</option>
                    <option value="">+91</option>
                    <option value="">+880</option>
                  </select>
                  <input type="number" placeholder="Enter Alternative number" />
                </div>
              </div>
            </form>
            <div className="text-center mt-4">
              <button 
                onClick={handleNext}
                className="driver_button"
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div className="car_details">
            <h2>Car Details</h2>
            <form action="" className="driver_form">
              {['brandName', 'model', 'numberPlate', 'carColor'].map((field) => (
                <div className="input_box" key={field}>
                  <label htmlFor={field}>
                    {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')} 
                    <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}`}
                    onBlur={() => handleBlur(field)}
                    className={validationErrors[field] ? 'error-input' : ''}
                  />
                  {validationErrors[field] && (
                    <span className="error-message">{validationErrors[field]}</span>
                  )}
                </div>
              ))}
            </form>
            <div className="driver_button_container text-center mt-4">
              <button 
                onClick={handleBack}
                className="driver_button"
              >
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DriverDetails;
