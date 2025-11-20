import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import "./Help.css";


const Help = () => {
  const location = useLocation()
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    // restart animation on mount or when navigate includes a refresh state
    setAnimate(false)
    const raf = requestAnimationFrame(() => setAnimate(true))
    return () => cancelAnimationFrame(raf)
  }, [location.key, location.state?.refresh])

  return (
    <div className={`help-page ${animate ? 'animate' : ''}`}>

      {/* About Section */}
      <section className="help-section">
        <h2>About VSP</h2>
        <p>
          VSP (Virtual Study Platform) is designed to help students and teachers 
          collaborate seamlessly. The system provides class management, assignments, 
          resources, and communication tools in an easy-to-use interface.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="help-section">
        <h2>Frequently Asked Questions (FAQ)</h2>

        <div className="faq-item">
          <h3>How do I join a class?</h3>
          <p>Go to the student dashboard and click the "Join Class" button, then enter your class code.</p>
        </div>

        <div className="faq-item">
          <h3>I forgot my password. What should I do?</h3>
          <p>Click the “Forgot Password?” link on the Sign In page and follow the instructions.</p>
        </div>

        <div className="faq-item">
          <h3>How can I view my assignments?</h3>
          <p>Open the sidebar and click “Assignments” to view all your upcoming tasks.</p>
        </div>

        <div className="faq-item">
          <h3>Is VSP free to use?</h3>
          <p>Yes! VSP is free for all students and teachers.</p>
        </div>
      </section>

      {/* Contact Support */}
      <section className="help-section">
        <h2>Contact Support</h2>
        <p>If you need further assistance, you can reach out to our support team:</p>

        <div className="contact-info">
          <p><strong>Email:</strong> support@vsp.com</p>
          <p><strong>Phone:</strong> +880 1234 567 890</p>
          <p><strong>Live Chat:</strong> Available 9 AM – 6 PM</p>
        </div>
      </section>

    </div>
  );
};

export default Help;
