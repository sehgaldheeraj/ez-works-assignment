/* eslint-disable import/no-anonymous-default-export */
import "./index.css";
import logo from "../../assets/EZ Works Blue.png";
import { useState } from "react";
export default () => {
  const [mail, setMail] = useState("");
  const [errorText, setErrorText] = useState("");
  const [successText, setSuccessText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorText("");
    setSuccessText("");

    if (!mail) {
      setErrorText("Email field cannot be empty");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(mail)) {
      setErrorText("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch("http://34.225.132.160:8002/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: mail }),
      });

      if (response.ok) {
        setSuccessText(
          "Thank you for your message. We will get back to you as soon as possible."
        );
      } else {
        const errorData = await response.json();
        if (errorData) {
          setErrorText(
            "Sorry, we cannot process email addresses ending with '@ez.works'. Please use a different email address."
          );
        }
      }
    } catch (error) {
      console.log(error);
      setErrorText("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="contact-container">
      <img src={logo} alt="EZ Works Logo" className="logo" />
      <p>Suite of Business Support Services</p>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar
        urna dolor, ut ultrices nisi pretium vel.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email Address"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <button type="submit">Contact Me</button>
        {errorText && <p className="error-message">{errorText}</p>}
        {successText && <p className="success-message">{successText}</p>}
      </form>
    </div>
  );
};
