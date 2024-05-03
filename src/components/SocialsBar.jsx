import { useState } from "react";

import { IconContext } from "react-icons";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import classes from "./SocialsBar.module.css";
import ContactForm from "./ContactForm";

const SocialsBar = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const contactPressedHandler = () => {
    setShowContactForm(true);
    document.body.style.overflowY = "hidden"; // Prevent scrolling while contact modal is shown
  };

  return (
    <>
      <div className={classes.bar}>
        <div className={classes.socials}>
          <IconContext.Provider value={{ size: "50px" }}>
            <MdEmail className={classes.icon} onClick={contactPressedHandler} />
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "50px" }}>
            <FaLinkedinIn
              className={classes.icon}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/caleb-hodges-a00a3b22b/"
                )
              }
            />
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "50px" }}>
            <FaGithub
              className={classes.icon}
              onClick={() => window.open("https://github.com/Chodges86")}
            />
          </IconContext.Provider>
        </div>
      </div>
      {showContactForm && <ContactForm show={setShowContactForm}/>}
    </>
  );
};

export default SocialsBar;
