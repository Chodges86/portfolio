import { IconContext } from "react-icons";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import classes from "./SocialsBar.module.css";

const SocialsBar = () => {
  return (
    <div className={classes.bar}>
      <div className={classes.socials}>
        <IconContext.Provider value={{ size: "50px" }}>
          <MdEmail className={classes.icon} />
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "50px" }}>
          <FaLinkedinIn className={classes.icon} />
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "50px" }}>
          <FaGithub className={classes.icon} />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default SocialsBar;
