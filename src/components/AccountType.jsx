const AccountType = ({ formData, handleChange, nextStep, prevStep }) => {
  const accountTypes = [
    { value: 'checking', label: 'Checking Account' },
    { value: 'savings', label: 'Savings Account' },
    { value: 'joint', label: 'Joint Account' },
    { value: 'student', label: 'Student Account' }
  ];

  return (
    <div className="form-step">
      <h2>Select Account Type</h2>
      
      <div className="form-group">
        <label>Account Type</label>
        <div className="radio-options">
          {accountTypes.map(type => (
            <label key={type.value} className="radio-option">
              <input
                type="radio"
                name="accountType"
                value={type.value}
                checked={formData.accountType === type.value}
                onChange={handleChange}
              />
              {type.label}
            </label>
          ))}
        </div>
      </div>
      
      {formData.accountType === 'joint' && (
        <div className="form-group">
          <label>Joint Applicant Information</label>
          <input
            type="text"
            name="jointApplicant"
            placeholder="Full name of joint applicant"
            value={formData.jointApplicant || ''}
            onChange={handleChange}
          />
        </div>
      )}
      
      <div className="form-actions">
        <button type="button" onClick={prevStep} className="btn-prev">
          Back
        </button>
        <button type="button" onClick={nextStep} className="btn-next">
          Continue to Review 
        </button>
      </div>
    </div>
  );
};

export default AccountType;