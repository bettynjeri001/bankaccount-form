const Review = ({ formData, prevStep, handleSubmit, handleChange }) => {
  return (
    <div className="form-step">
      <h2>Review Your Application</h2>
      
      <div className="review-section">
        <h3>Personal Information</h3>
        <div className="review-row">
          <span>Name:</span>
          <span>{formData.firstName} {formData.lastName}</span>
        </div>
        {/* Add more review fields */}
      </div>
      
      <div className="form-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="acceptedTerms"
            checked={formData}
            onChange={handleChange}
            required
          />
          I confirm that all information provided is accurate and I agree to the terms and conditions.
        </label>
      </div>
      
      <div className="form-actions">
        <button type="button" onClick={prevStep} className="btn-prev">
          Back
        </button>
        <button type="submit" onClick={handleSubmit} className="btn-submit" disabled={!formData.acceptedTerms}>
          Submit Application
        </button>
      </div>
    </div>
  );
};

export default Review;