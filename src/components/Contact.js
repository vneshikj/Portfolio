import "../App.css";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-form">
        <ContactForm />
      </div>
      <div className="contact-writing">
        <h2>Contact Me</h2>
      </div>
    </div>
  );
}

export default Contact;
