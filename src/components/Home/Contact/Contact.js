import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section>
      <div className="contact">
        <div className="text-center">
          <h6 className="top-padding" style={{ color: "#1cc7c1" }}>
            Contact Us
          </h6>
          <h2 style={{ color: "white" }}>Always Connect With Us</h2>
        </div>
        <div>
          <form className="form-container">
            <div class="mb-3">
              <label class="form-label"></label>
              <input
                type="email"
                class="form-control"
                placeholder="Email Address"
              />
            </div>

            <div class="mb-3">
              <label class="form-label"></label>
              <input class="form-control" placeholder="Subject" />
            </div>

            <div class="mb-3">
              <label class="form-label"></label>
              <textarea
                placeholder="Your Message"
                class="form-control"
                rows="3"
              ></textarea>
            </div>
            <button
              type="submit"
              style={{ backgroundColor: "#1cc7c1" }}
              className="text-white button"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
