import { useEffect, useState } from "react";
import "../styles/contact-modal.css";
import api from '../../api/axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || "";

const ContactModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    clinicName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && status !== "loading") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, status]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  
const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        await api.post("/contactus", formData);

        // setStatus({
        //     type: "success",
        //     message: "Thank you! Your enquiry has been submitted successfully.",
        // });

        setStatus("success");

        setFormData({
            name: "",
            clinicName: "",
            email: "",
            phone: "",
            message: "",
        });

        // setTimeout(() => {
        //     onClose();
        // }, 3000);

    } catch (error) {
        console.error("Error submitting contact form:", error);

        setStatus({
            type: "error",
            message: error.response?.data?.message ||
                "Failed to submit your enquiry. Please try again.",
        });
    } finally {
        setLoading(false);
    }
};

  return (
    <div
      className="contact-overlay"
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget &&
          status !== "loading"
        ) {
          onClose();
        }
      }}
    >
      <section
        className="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <button
          type="button"
          className="contact-close"
          onClick={onClose}
          disabled={status === "loading"}
          aria-label="Close contact form"
        >
          &times;
        </button>

        <div className="contact-modal-heading">
          <span className="contact-modal-icon">
            <span aria-hidden="true">✉</span>
          </span>

          <span className="contact-kicker">LET'S CONNECT</span>

          <h2 id="contact-modal-title">Let's talk about your clinic.</h2>

          <p>
            Interested in PMA for your clinic? Share a few details and
            our team will get in touch with you.
          </p>
        </div>

        {status === "success" ? (
          <div className="contact-success" role="status">
            <span className="contact-success-icon">✓</span>
            <h3>Thank you for reaching out!</h3>
            <p>
              Your enquiry has been submitted successfully. Our team
              will contact you using the details you provided.
            </p>
            <button
              type="button"
              className="contact-submit"
              onClick={onClose}
            >
              Done
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              <label>
                Your name <span>*</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Dr. John Smith"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  maxLength={100}
                  disabled={loading}
                  required
                />
              </label>

              <label>
                Clinic name <span>*</span>
                <input
                  type="text"
                  name="clinicName"
                  placeholder="Your clinic name"
                  value={formData.clinicName}
                  onChange={handleChange}
                  autoComplete="organization"
                  maxLength={150}
                  disabled={loading}
                  required
                />
              </label>

              <label>
                Business email <span>*</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@clinic.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  maxLength={254}
                  disabled={loading}
                  required
                />
              </label>

              <label>
                Phone number <span>*</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  maxLength={20}
                  pattern="[+]?[0-9 ()-]{7,20}"
                  title="Enter a valid phone number."
                  disabled={loading}
                  required
                />
              </label>
            </div>

            <label className="contact-message-label">
              How can we help? <span className="contact-optional">(Optional)</span>
              <textarea
                name="message"
                placeholder="I'd like to know more about PMA for my clinic..."
                value={formData.message}
                onChange={handleChange}
                rows={3}
                maxLength={1500}
                disabled={loading}
              />
            </label>

            {status === "error" && (
              <p className="contact-error" role="alert">
                We couldn't submit your enquiry. Please try again later.
              </p>
            )}

            <button
              type="submit"
              className="contact-submit"
              disabled={status === "loading" || loading}
            >
              {status === "loading"
                ? "Sending enquiry..."
                : "Send Enquiry"}
              {status !== "loading" && <span aria-hidden="true"> →</span>}
            </button>

            <p className="contact-privacy-note">
              Your details will be used to respond to your enquiry.
              Please don't include patient medical information.
            </p>
          </form>
        )}
      </section>
    </div>
  );
};

export default ContactModal;