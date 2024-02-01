// components/BookingForm.js
import React, { useState } from "react";

const BookingForm = ({ showId, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform booking logic (you can customize this according to your requirements)

    // Close the offcanvas after submitting the form
    onClose();
  };

  return (
    <div
      className="offcanvas offcanvas-top"
      tabIndex="-1"
      id="offcanvasTop"
      aria-labelledby="offcanvasTopLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasTopLabel">
          Booking Form
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
      <div className="offcanvas-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
