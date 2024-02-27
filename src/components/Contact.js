import "../App.css";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="contact-section" id="contact-section">
      <ContactForm />
      <div className="contact-writing">
        <h1>Contact Me</h1>
        <div className="adjust">
          <p className="contact-description">
            Join me for a coffee as we engage in discussions about potential
            collaborations, share ideas, or casually chat about anything that
            comes to mind.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
