import "../App.css";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="contact-section">
      <ContactForm />
      <div className="contact-writing">
        <h1>Contact Me</h1>
        <p className="contact-description">
          I welcome the opportunity for feedback, collaborative projects or even
          just a casual conversation!
        </p>
      </div>
    </div>
  );
}

export default Contact;
