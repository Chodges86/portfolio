import { useEffect, useRef } from "react";
import classes from "./ContactForm.module.css";

import logo from "../pages/assetts/logo-look-left.gif";
import Button from "./Button";

const ContactForm = (props) => {
  const { show } = props;
  const formRef = useRef(null);
  const scrollPointRef = useRef(null)

  const { innerWidth: screenWidth } = window
    console.log(screenWidth)
  useEffect(() => {
    scrollPointRef.current.scrollIntoView()
  })

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

  return (
    <div className={classes.dimBackground} ref={scrollPointRef}>
      <div className={classes.formWrapper} ref={formRef}>
        <form className={classes.form}>
            <h1 style={{textDecoration: "underline"}}>Email Me</h1>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>
          <Button title="Send" />
        </form>
        <div className={classes.logoWrapper}>
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
