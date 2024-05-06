import { useState, useEffect, useRef } from "react";
import classes from "./ContactForm.module.css";

import emailjs from '@emailjs/browser'

import logo from "../pages/assetts/ch-logo.png";
import Button from "./Button";


const ContactForm = (props) => {
  const { show } = props;
  const formRef = useRef(null);
  const scrollPointRef = useRef(null);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();


  // const { innerWidth: screenWidth } = window;
  useEffect(() => {
    scrollPointRef.current.scrollIntoView();
  });

  const handleClick = (e) => {
    //Check for click outside the form to exit
    if (formRef.current && !formRef.current.contains(e.target)) {
      show(false);
      document.body.style.overflowY = "scroll"; // Re-enable scroll with modal dismiss
    }
  };

  useEffect(() => {
    // Setup a listener to listen for clicks in order to handle click outside form.
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  });

  const submitMessage = (e) => {
    e.preventDefault();
   const templateParams = {
    name,
    email,
    subject,
    message
  };

  emailjs
    .send(
      `${process.env.REACT_APP_EMAIL_SERVICE}`,
      `${process.env.REACT_APP_EMAIL_TEMPLATE}`,
      templateParams,
      `${process.env.REACT_APP_EMAIL_PUBKEY}`
    )
    .then(() => console.log("Sent"))
    .catch((err) => console.log(err));
  };

  return (
    <div className={classes.dimBackground} ref={scrollPointRef}>
      <div className={classes.formWrapper} ref={formRef}>
        <form className={classes.form}>
          <h1 style={{ textDecoration: "underline" }}>Email Me</h1>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            cols="30"
            rows="10"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <Button title="Send" onClick={submitMessage} />
        </form>
        <div className={classes.logoWrapper}>
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
