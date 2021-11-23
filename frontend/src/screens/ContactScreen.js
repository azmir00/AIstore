import React from "react";
import "./ContactScreen.css";

const ContactScreen = () => {
  return (
    <div>
      <div className="text-center main-section">
        <h1 className="font-weight-bolder">Contact Us</h1>
        <h4 className="text-secondary mt-5">
          Want to get in touch? We'd love to hear from you. Here's how you can
          reach us.
        </h4>
      </div>

      <div className="container">
        <div className="contact-section text-center row">
          <div className="contact-sub-section col-md card m-md-5 p-5">
            <h4>Contact Customer Support</h4>
            <h5 className="my-5 text-secondary">
              Having problems with products in AI Store? Hit us up for any
              report.
            </h5>
            <button className="btn support-button text-secondary" type="button">
              Contact Support
            </button>
          </div>

          <div className="contact-sub-section col-md card m-md-5 p-5">
            <h4>Career Kick Start</h4>
            <h5 className="my-5 text-secondary">
              Interested to join AI Store community? Contact our HR now.
            </h5>
            <button className="btn support-button text-secondary" type="button">
              Contact HR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
