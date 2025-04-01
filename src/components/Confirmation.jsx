const Confirmation = ({ formData }) => {
    return (
      <div className="form-step confirmation">
        <div className="confirmation-icon">✓</div>
        <h2>Application Submitted Successfully!</h2>
        
        <div className="confirmation-details">
          <p>Thank you, {formData.firstName}, for applying for a {formData.accountType} account.</p>
          <p>Your application reference number is: <strong>BA{Math.floor(Math.random() * 1000000)}</strong></p>
          <p>We'll review your application and contact you within 2 business days.</p>
          <p>A confirmation email has been sent to {formData.email}.</p>
        </div>
        
        <div className="confirmation-actions">
          <button className="btn-dashboard">
            Go to Online Banking
          </button>
          <button className="btn-print">
            Print Confirmation
          </button>
        </div>
      </div>
    );
  };

  export default Confirmation;