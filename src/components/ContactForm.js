import React, { useState } from "react";

const ContactForm = () => {
  return (
    <form
      name="contact"
      method="post"
      netlify
      className="submission-form"
      netlify-honeypot="bot-field"
      hidden
    >
      <div className="joiner">
        <input type="hidden" name="form-name" value="contact" />
        <div>
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
