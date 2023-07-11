import React, { useState } from "react";

const ContactForm = () => {
  return (
    <form name="contact v1" method="post" netlify className="submission-form">
      <div className="joiner">
        <div>
          <input type="hidden" name="form-name" value="contact v1" />
          <input
            className="name-input"
            name="name"
            type="text"
            placeholder="Name:"
            required
          />
        </div>
        <div>
          <input
            className="email-input"
            name="email"
            type="email"
            placeholder="Valid email address:"
            required
          />
        </div>
      </div>
      <div>
        <textarea required placeholder="Message:" name="message" />
      </div>
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
