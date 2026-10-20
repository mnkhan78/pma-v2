import { Link } from "react-router-dom";
import AuthButton from "../components/home/AuthButton";
import Footer from "../components/home/Footer";
import "../style/home.css";
import ContactModal from "../components/home/ContactModal";
import "../components/styles/contact-modal.css";
import { useState } from "react";

const features = [
  {
    icon: "♙",
    title: "Patient Management",
    description:
      "Maintain organized patient profiles, contact details, medical history, and clinical records in one place.",
    tag: "Patient records",
  },
  {
    icon: "▦",
    title: "Smart Appointment Management",
    description:
      "Schedule appointments, manage daily visits, track tokens, and keep your clinic workflow organized.",
    tag: "Daily scheduling",
  },
  {
    icon: "♡",
    title: "Clinical Vitals & BMI",
    description:
      "Record weight, height, blood pressure, pulse, temperature, oxygen saturation, and BMI.",
    tag: "Clinical readings",
  },
  {
    icon: "Rx",
    title: "Digital Prescriptions",
    description:
      "Prepare professional prescription PDFs with patient details, clinical readings, and prescribed medicines.",
    tag: "Prescription tools",
  },
  {
    icon: "✚",
    title: "Pharmacy Workflow",
    description:
      "Organize prescribed medicines and help your team track pharmacy processing and delivery.",
    tag: "Medicine tracking",
  },
  {
    icon: "↗",
    title: "Clinic Analytics",
    description:
      "Review appointment activity and patient statistics to better understand your clinic's daily operations.",
    tag: "Clinic insights",
  },
  {
    icon: "◎",
    title: "Queue Management",
    description:
      "Support a more organized patient journey with appointment tokens and queue-status tracking.",
    tag: "Patient flow",
  },
  {
    icon: "⌘",
    title: "Team & Access Management",
    description:
      "Structure clinic access for doctors, receptionists, and administrators according to their responsibilities.",
    tag: "Team workflow",
  },
];

const steps = [
  {
    number: "01",
    title: "Register your patient",
    description: "Create and maintain an organized patient record.",
  },
  {
    number: "02",
    title: "Schedule the appointment",
    description: "Manage visits, appointment tokens, and waiting queues.",
  },
  {
    number: "03",
    title: "Consult and prescribe",
    description: "Record clinical readings and prepare prescriptions.",
  },
  {
    number: "04",
    title: "Manage and review",
    description: "Coordinate medicine delivery and review clinic activity.",
  },
];


const Home = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <div className="pma-home">
      <header className="pma-navbar">
        <Link to="/" className="pma-brand">
          <span className="pma-brand-icon">+</span>
          <span>
            <strong>PMA</strong>
            <small>Patient Management Application</small>
          </span>
        </Link>

        <nav className="pma-nav-links">
          <a href="#features">Features</a>
          <a href="#workflow">How it works</a>
          <a href="#security">Security</a>
        </nav>

        <div className="pma-nav-actions">
          <AuthButton />
          {/* <button
            type="button"
            className="pma-contact-cta"
            onClick={() => setIsContactModalOpen(true)}
          >
            Contact Us
          </button>
          <Link to="/signup" className="pma-nav-cta">
            Get Started <span aria-hidden="true">↗</span>
          </Link> */}
          <button
            type="button"
            className="pma-nav-cta"
            onClick={() => setIsContactModalOpen(true)}
          >
            Get Started <span aria-hidden="true">↗</span>
          </button>
        </div>
      </header>

      <main>
        <section className="pma-hero">
          <div className="pma-hero-copy">
            <div className="pma-eyebrow">
              <span className="pma-status-dot" />
              CLINIC MANAGEMENT, SIMPLIFIED
            </div>

            <h1>
              Better clinic management.
              <span> More time for patient care.</span>
            </h1>

            <p className="pma-hero-description">
              Manage patients, appointments, clinical records, prescriptions,
              and pharmacy workflows in one organized application designed
              for modern clinics.
            </p>

            <div className="pma-hero-actions">
              {/* <Link to="/signup" className="pma-button pma-button-primary">
                Get Started <span aria-hidden="true">→</span>
              </Link> */}

              <button
                type="button"
                className="pma-button pma-button-primary"
                onClick={() => setIsContactModalOpen(true)}
              >
                Start Free Trial Now <span aria-hidden="true">↗</span>
              </button>

              <a href="#features" className="pma-button pma-button-outline">
                Explore Features
              </a>
            </div>

            <div className="pma-hero-points">
              <span><b>✓</b> Organized patient records</span>
              <span><b>✓</b> Streamlined clinic workflows</span>
              <span><b>✓</b> Role-based access</span>
            </div>
          </div>

          <div className="pma-hero-visual">
            <div className="pma-orb pma-orb-one" />
            <div className="pma-orb pma-orb-two" />

            <div className="pma-preview">
              <div className="pma-preview-topbar">
                <div className="pma-window-dots">
                  <i /><i /><i />
                </div>
                <span>YOUR CLINIC DASHBOARD</span>
                <span className="pma-live-label">
                  <i /> Overview
                </span>
              </div>

              <div className="pma-preview-body">
                <div className="pma-preview-welcome">
                  <div>
                    <small>CLINIC OVERVIEW</small>
                    <h3>Your day, at a glance.</h3>
                    <p>Everything organized in one place.</p>
                  </div>
                  <div className="pma-preview-avatar">+</div>
                </div>

                <div className="pma-stat-grid">
                  <div className="pma-stat-card">
                    <span className="pma-stat-icon stat-blue">♙</span>
                    <small>Total Patients</small>
                    <strong>Patients</strong>
                    <span>Organized records</span>
                  </div>
                  <div className="pma-stat-card">
                    <span className="pma-stat-icon stat-green">▦</span>
                    <small>Appointments</small>
                    <strong>Daily Visits</strong>
                    <span>Appointment tracking</span>
                  </div>
                  <div className="pma-stat-card">
                    <span className="pma-stat-icon stat-purple">Rx</span>
                    <small>Prescriptions</small>
                    <strong>Digital Records</strong>
                    <span>Ready to prepare</span>
                  </div>
                  <div className="pma-stat-card">
                    <span className="pma-stat-icon stat-orange">↗</span>
                    <small>Clinic Activity</small>
                    <strong>Analytics</strong>
                    <span>Operational insights</span>
                  </div>
                </div>

                <div className="pma-preview-bottom">
                  <div className="pma-activity-panel">
                    <div className="pma-panel-heading">
                      <strong>Clinic workflow</strong>
                      <span>Organized care</span>
                    </div>
                    <div className="pma-mini-step">
                      <span className="mini-step-icon">01</span>
                      <span><b>Patient registration</b><small>Records in one place</small></span>
                      <span className="mini-check">✓</span>
                    </div>
                    <div className="pma-mini-step">
                      <span className="mini-step-icon">02</span>
                      <span><b>Appointment & consultation</b><small>Daily clinic workflow</small></span>
                      <span className="mini-check">✓</span>
                    </div>
                    <div className="pma-mini-step">
                      <span className="mini-step-icon">03</span>
                      <span><b>Prescription & pharmacy</b><small>Connected processes</small></span>
                      <span className="mini-check">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pma-floating-note">
              <span className="pma-floating-icon">✓</span>
              <span>
                <strong>One organized workspace</strong>
                <small>From registration to prescription</small>
              </span>
            </div>
          </div>
        </section>

        <section className="pma-trust-strip">
          <span>BUILT AROUND YOUR CLINIC WORKFLOW</span>
          <div>
            <span>Patient Records</span>
            <i />
            <span>Appointments</span>
            <i />
            <span>Clinical Care</span>
            <i />
            <span>Pharmacy</span>
            <i />
            <span>Analytics</span>
          </div>
        </section>

        <section className="pma-features section-container" id="features">
          <div className="pma-section-heading">
            <span className="pma-section-kicker">ONE APPLICATION. CONNECTED WORKFLOWS.</span>
            <h2>Everything your clinic needs to stay organized.</h2>
            <p>
              Explore the tools that bring everyday clinic operations
              together, from the first appointment to the final prescription.
            </p>
          </div>

          <div className="pma-feature-grid">
            {features.map((feature, index) => (
              <article className="pma-feature-card" key={feature.title}>
                <div className={`pma-feature-icon feature-color-${index + 1}`}>
                  {feature.icon}
                </div>
                <span className="pma-feature-tag">{feature.tag}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href="#workflow" className="pma-feature-link">
                  See the workflow <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="pma-workflow" id="workflow">
          <div className="section-container pma-workflow-inner">
            <div className="pma-workflow-intro">
              <span className="pma-section-kicker">A MORE CONNECTED CLINIC</span>
              <h2>From the first visit to the prescription.</h2>
              <p>
                Give your team a clear, repeatable process for managing
                appointments, consultations, and medicine workflows.
              </p>
              {/* <Link to="/signup" className="pma-button pma-button-primary">
                Book Demo <span aria-hidden="true"></span>
              </Link> */}
              <button
                type="button"
                className="pma-button pma-button-primary"
                onClick={() => setIsContactModalOpen(true)}
              >
                Book Demo <span aria-hidden="true">→</span>
              </button>
            </div>

            <div className="pma-steps">
              {steps.map((step) => (
                <article className="pma-step" key={step.number}>
                  <span className="pma-step-number">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  <span className="pma-step-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pma-security section-container" id="security">
          <div className="pma-security-icon">⌑</div>
          <div>
            <span className="pma-section-kicker">ACCESS WITH RESPONSIBILITY</span>
            <h2>Designed with clinic access and privacy in mind.</h2>
            <p>
              Authentication and role-based access help organize what
              different team members can access. Configure permissions
              carefully to protect patient information.
            </p>
          </div>
          <div className="pma-security-points">
            <span>✓ Authenticated access</span>
            <span>✓ Role-based workflows</span>
            <span>✓ Organized clinical records</span>
          </div>
        </section>

        <section className="pma-final-cta">
          <div className="pma-final-cta-content">
            <span>YOUR CLINIC. ONE ORGANIZED WORKSPACE.</span>
            <h2>Ready to bring your clinic workflow together?</h2>
            <p>
              Explore PMA and discover a more organized way to manage
              your everyday clinic operations.
            </p>
            <div className="pma-hero-actions">
              {/* <Link to="/signup" className="pma-button pma-button-white">
                Get Started <span aria-hidden="true">→</span>
              </Link> */}
              <button
                type="button"
                className="pma-button pma-button-white"
                onClick={() => setIsContactModalOpen(true)}
              >
                Contact us <span aria-hidden="true">↗</span>
              </button>
              <Link to="/frontal" className="pma-button pma-button-ghost">
                Open Dashboard
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      {isContactModalOpen && (
        <ContactModal onClose={() => setIsContactModalOpen(false)} />
      )}
    </div>
  );
};

export default Home;
