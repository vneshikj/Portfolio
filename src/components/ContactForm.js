import React, { useState } from "react";

const ContactForm = () => {
  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      className="submission-form"
      netlify-honeypot="bot-field"
      action="/success-page"
    >
      <input type="hidden" name="subject" value="Message from %{formName}" />
      <input type="hidden" name="form-name" value="contact" />
      <div className="joiner">
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
