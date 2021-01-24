import React, { useState } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const BookingCard = ({ booking, date }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-md-4 ">
      <div class="card mb-5">
        <div class="card-body p-3">
          <h3 style={{ color: "#1cc7c1" }}>{booking.subject}</h3>
          <h4>{booking.visitingHour}</h4>
          <small>{booking.totalSpace}</small>
          <br />
          <button
            onClick={openModal}
            style={{ backgroundColor: "#1cc7c1" }}
            className="btn btn-primary"
          >
            BOOK APPOINTMENT
          </button>
          <AppointmentForm
            modalIsOpen={modalIsOpen}
            appointmentOn={booking.subject}
            closeModal={closeModal}
            date={date}
          ></AppointmentForm>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
