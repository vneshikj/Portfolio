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
    <form className="submission-form" onSubmit={handleSubmit}>
      <div className="joiner">
        <div>
          <input
            className="name-input"
            type="text"
            id="name"
            placeholder="Name:"
            required
          />
        </div>
        <div>
          <input
            className="email-input"
            type="email"
            id="email"
            placeholder="Valid email address:"
            required
          />
        </div>
      </div>
      <div>
        <textarea id="message" required placeholder="Message:" />
      </div>
      <button className="submit-button" type="submit">
        {status}
      </button>
    </form>
  );
};

export default ContactForm;
