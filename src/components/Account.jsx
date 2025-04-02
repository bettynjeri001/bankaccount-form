import React, { useState } from 'react';
import './Account.css';

// Import step components
import PersonalDetails from './components/PersonalDetails';
import AccountType from './components/AccountType';
import Review from './components/Review';
import Confirmation from './components/Confirmation';

const Account = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Details
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Account Type
    accountType: 'checking',
    jointAccount: false,
    jointApplicant: null,

    // Review and Terms
    acceptedTerms: false, // Ensure this is explicitly set as false initially
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value, // Ensure checkboxes are handled properly
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    nextStep(); // Move to confirmation step
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalDetails formData={formData} handleChange={handleChange} nextStep={nextStep} />;
      case 2:
        return <AccountType formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <Review formData={formData} prevStep={prevStep} handleSubmit={handleSubmit} handleChange={handleChange} />;
      case 4:
        return <Confirmation formData={formData} />;
      default:
        return <PersonalDetails formData={formData} handleChange={handleChange} nextStep={nextStep} />;
    }
  };

  return (
    <div className="bank-wizard">
      <div className="wizard-container">
        <div className="wizard-header">
          <h1>Open a New Bank Account</h1>
          <p>Complete your application in just a few steps</p>
        </div>
        
        <div className="progress-steps">
          {[1, 2, 3, 4].map((stepNumber) => (
            <div 
              key={stepNumber} 
              className={`step ${step === stepNumber ? 'active' : ''} ${step > stepNumber ? 'completed' : ''}`}
            >
              <div className="step-number">{stepNumber}</div>
              <div className="step-label">
                {['Personal Info', 'Account Type', 'Review', 'Confirmation'][stepNumber - 1]}
              </div>
            </div>
          ))}
        </div>
        
        <div className="wizard-content">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default Account;