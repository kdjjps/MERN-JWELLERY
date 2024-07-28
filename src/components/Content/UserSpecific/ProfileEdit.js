import React from "react";

export default function ProfileEdit() {
  return (
    <div id="profile-edit-section">
      <div className="profile-edit-banner">
        <h2 className="banner-title">Edit Profile</h2>
        <div>
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/wheel.png"
            alt="wheel-icon"
          />
        </div>
        <div className="banner-title">
          Add more events to get exclusive & curated offers <br /> for your
          loved ones & special occassions.
        </div>
      </div>
      <div className="details">
        <div className="detail-row">
          <div className="detail">
            <div className="detail-label">Salutation *</div>
            <select>
              <option>Mr.</option>
              <option>Mrs.</option>
              <option>Miss</option>
            </select>
          </div>
          <div className="detail">
            <div className="detail-label">Full Name *</div>
            <input />
          </div>
        </div>
        <div className="detail-row">
          <div className="detail">
            <div className="detail-label">Mobile No. *</div>
            <input />
          </div>
          <div className="detail">
            <div className="detail-label">Pincode *</div>
            <input />
          </div>
        </div>
        <div className="detail-row">
          <div className="detail">
            <div className="detail-label">Birthday *</div>
            <input />
          </div>
          <div className="detail">
            <div className="detail-label">Anniversary *</div>
            <input />
          </div>
        </div>
        <div className="detail-row">
          <div className="detail">
            <div className="detail-label">Occupation (optional)</div>
            <input />
          </div>
          <div className="detail">
            <div className="detail-label">Spouse Birthday (optional)</div>
            <input />
          </div>
        </div>
        <div className="buttons-container">
          <button>Save Changes</button>
          <button>Cancel</button>
        </div>
        <p className="end-note">
          *By clicking on Save Changes, you accept our T&C and Privacy Policy
        </p>
      </div>
    </div>
  );
}
