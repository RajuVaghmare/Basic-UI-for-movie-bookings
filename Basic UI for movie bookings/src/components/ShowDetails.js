import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Modal, Form } from "react-bootstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import DOMPurify from "dompurify";
import Footer from "./Footer";

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [showBookingModal1, setShowBookingModal1] = useState(false);
  const [showBookingModal2, setShowBookingModal2] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    // Fetch the show details from the API
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => setShow(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  // Handler for selecting date
  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  // Handler for selecting seats
  const handleSeatSelection = (event) => {
    const selectedSeats = parseInt(event.target.value, 10);
    setSelectedSeats(selectedSeats);
  };

  // Handler for opening the first booking modal
  const handleShowBookingModal1 = () => {
    setShowBookingModal1(true);
  };

  // Handler for closing the first booking modal
  const handleCloseBookingModal1 = () => {
    setShowBookingModal1(false);
  };

  // Handler for opening the second booking modal
  const handleShowBookingModal2 = () => {
    setShowBookingModal2(true);
  };

  // Handler for closing the second booking modal
  const handleCloseBookingModal2 = () => {
    setShowBookingModal2(false);
  };

  if (!show) {
    // Return loading state or placeholder while show data is being fetched
    return <div></div>;
  }

  return (
    <div
      class="card mb-3"
      style={{
        maxWidth: "100%",
      }}
    >
      {/* Show Details */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={show.image && show.image.medium}
          alt={show.name}
          style={{ maxWidth: "100%", marginTop: "15px" }}
        />
        <h1>{show.name}</h1>

        <h5
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(show.summary) }}
          style={{ paddingLeft: "7%", paddingRight: "7%" }}
        ></h5>
        <Button variant="primary" onClick={handleShowBookingModal1}>
          Book Tickets
        </Button>
      </div>

      <Modal show={showBookingModal1} onHide={handleCloseBookingModal1}>
        <Modal.Header>
          <Modal.Title>Book Tickets - Step 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Booking Form - Step 1 */}
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group
              controlId="formSelectedSeats"
              style={{ marginBottom: "20px" }}
            >
              <h4>Show Name: {show.name}</h4>
              <Form.Label>Select Date</Form.Label>

              {/* Use DatePicker component within the InputGroup */}
              <DatePicker
                selected={selectedDate}
                onChange={handleDateSelection}
                dateFormat="dd/MM/yyyy"
                className="form-control" // Add the 'form-control' class for styling
              />

              <div style={{ marginTop: "10px" }}>
                <Form.Label>Select Seats</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter number of seats"
                  onChange={handleSeatSelection}
                  value={selectedSeats}
                />
              </div>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                e.preventDefault();

                // Close the first modal
                handleCloseBookingModal1();

                // Open the second modal
                handleShowBookingModal2();
              }}
              style={{ marginTop: "10px" }}
            >
              Next
            </Button>
            <Button
              variant="secondary"
              onClick={handleCloseBookingModal1}
              style={{ marginTop: "10px", marginLeft: "330px" }}
            >
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      {/* Booking Modal 2 */}
      <Modal show={showBookingModal2} onHide={handleCloseBookingModal2}>
        <Modal.Title>Book Tickets - Step 2</Modal.Title>

        <Modal.Body>
          <h2>Show Name: {show.name}</h2>
          {/* Display selected seats, time, date, etc. */}
          <h3>Selected Seats: {selectedSeats.toString()}</h3>
          <h3>
            Selected Date: {selectedDate ? selectedDate.toDateString() : ""}
          </h3>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleCloseBookingModal2}
            style={{ marginTop: "8px", marginRight: "20px" }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseBookingModal2}>
            Confirm Booking
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ShowDetails;
