import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    // asynch function doesnt block execution of other code, await statement pauses execution of function until promise is resolved
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements; // e.target.elements allows access to values by id or name attributes, target is the whole form
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status); // Alerts if message is sent correctly
  };
  return (
    <form
      name="contact v1"
      method="post"
      data-netlify="true"
      className="submission-form"
      onSubmit="submit"
    >
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
        {status}
      </button>
    </form>
  );
};

export default ContactForm;
