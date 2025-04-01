const PersonalDetails = ({ formData, handleChange, nextStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="form-step">
      <h2>Personal Information</h2>
      
      <div className="form-row">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="form-group">
        <label>Date of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
      </div>
      
      {/* Add more personal details fields */}
      
      <div className="form-actions">
        <button type="submit" className="btn-next">
          Continue to Account Type
        </button>
      </div>
    </form>
  );
};

export default PersonalDetails;