import { useRef } from "react";

import Button from "../components/Button";
import classes from "./Home.module.css";

import logo from "./assetts/ch-logo.png";
import aaMockupImg from "./assetts/aa_mockup_image.png";
import aaMockupGif from "./assetts/aa_mockup.gif";
import mapaMockupImg from "./assetts/mapa_mockup_image2.png";
import mapaMockuGif from "./assetts/mapa_mockup.gif";
import byTheHourGif from "./assetts/by_the_hour_mockup.gif";
import plmGif from "./assetts/plm_mockup.gif";
import gfVid from "./assetts/gf_vid.mp4";

import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaAppStore } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

import { Helmet } from "react-helmet-async";

const Home = () => {
  const portfolioRef = useRef(null);
  const year = new Date().getFullYear();

  return (
    <>
      <Helmet>
        <title>Caleb Hodges | Web Developer</title>
        <meta
          name="Portfolio website"
          content="Portfolio site for Caleb Hodges"
        />
        <meta property="og:title" content="Caleb Hodges | Portfolio website" />
        <meta property="og:url" content="https://portfolio.chdevs.com/" />
        <meta property="og:image" content={logo} />
      </Helmet>

      <img src={logo} alt="logo" className={classes.logo} />
      <div className={classes.page}>
        <section id={classes["title"]}>
          <h1>CALEB HODGES</h1>
          <h2>web developer</h2>
          <Button
            title="Jump to Projects"
            onClick={() =>
              portfolioRef.current.scrollIntoView({ block: "center" })
            }
          />
          <br />
          <br />
          <br />
        </section>
        <section id={classes["intro"]}>
          <h4>SKILLS:</h4>
          <ul>
            <li>ReactJS</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Swift</li>
            <li>UIKit</li>
            <li>PostgreSQL</li>
          </ul>
          <h4>ABOUT:</h4>
          <p>
            I started learning to code in 2021 with some iOS app tutorials.
            After over a year of learning Swift and UIKit to build iOS apps I
            released an app in the App Store that I built for a christian
            ministry in Memphis, TN. Then I decided to take my learning to the
            next level. In 2022 I attended class at DevMountain's coding
            bootcamp and after completing the Foundations courses, decided to
            switch paths to web development. In July of 2023 I graduated from
            DevMountains web development specialization bootcamp.{" "}
          </p>
        </section>
        <h3 ref={portfolioRef}>FEATURE PROJECTS</h3>
        <section id="mapa" className={classes.titleRight}>
          <h1>MISSISSIPPI ASPHALT PAVEMENT ASSOCIATION</h1>
          <h2>react.js website</h2>
          <p>
            A fresh new website I designed and developed for the Mississippi
            Asphalt Pavement Association that moves them from a WordPress site
            that they manage to a customized website built in ReactJS with a
            Node.js backend and connects to a PostgreSQL database. This project
            is still underway but is deployed on a VPS you can visit with the
            link below and the codebase can be seen at the GitHub link below.
          </p>
          <br />
          <br />
          <div className={classes.flex}>
            <img src={mapaMockupImg} alt="mockup for MAPA site" />
            <ul>
              <li>React</li>
              <li>Axios</li>
              <li>Express</li>
              <li>Sequelize</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <br />
          <div className={classes.flex}>
            <ul style={{ columns: 1 }}>
              <li>Deployed on Ubuntu VPS</li>
              <li>PostgreSQL database with Supabase</li>
              <li>Customized emails sent with EmailJS</li>
            </ul>
            <img src={mapaMockuGif} alt="mockup video for MAPA site" />
          </div>
          <br />
          <br />
          <div className={classes.links}>
            <IconContext.Provider value={{ size: "75px" }}>
              <FaGithub
                className={classes.icon}
                onClick={() =>
                  window.open("https://github.com/Chodges86/MAPA-site")
                }
              />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: "75px" }}>
              <TbWorld
                className={classes.icon}
                onClick={() => window.open("http://138.197.26.78")}
              />
            </IconContext.Provider>
          </div>
          <div className={classes.line}></div>
        </section>
        <section id="abiding_above" className={classes.titleLeft}>
          <h1>ABIDING ABOVE DAILY DEVOTION APP</h1>
          <h2>iOS app</h2>
          <p>
            A daily devotional app I created for a christian ministry located in
            Memphis, TN.  This is a volunteer project where I was the sole
            designer and creator of the app which is built in native iOS
            platform using Swift and UIKit. This app is available to download
            for iPhone and iPad on the App Store. Check it out with the link
            below. The codebase for this project can be viewed with the GitHub
            link below.
          </p>
          <br />
          <br />
          <div className={classes.flex}>
            <img src={aaMockupImg} alt="mockup for Abiding Above site" />
            <ul>
              <li>Swift</li>
              <li>Xcode</li>
              <li>UIKit</li>
            </ul>
          </div>
          <br />
          <div className={classes.flex}>
            <ul>
              <li>Firebase</li>
              <li>Firestore</li>
              <li>WebKit</li>
              <li>Tableviews</li>
            </ul>
            <img src={aaMockupGif} alt="mockup video for Abiding Above site" />
          </div>
          <br />
          <br />
          <div className={classes.links}>
            <IconContext.Provider value={{ size: "75px" }}>
              <FaGithub
                className={classes.icon}
                onClick={() =>
                  window.open("https://github.com/Chodges86/Abiding-Above")
                }
              />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: "75px" }}>
              <FaAppStore
                className={classes.icon}
                onClick={() =>
                  window.open(
                    "https://apps.apple.com/us/app/abiding-above/id1629222793"
                  )
                }
              />
            </IconContext.Provider>
            <div className={classes.line}></div>
          </div>
        </section>
        <section id="mapa" className={classes.titleRight}>
          <h1>GROUND FORCES ROBOTIC LAWN MOWERS</h1>
          <h2>react.js website</h2>
          <p>
            A website I was hired to build for a company selling robotic lawn
            mowers. This site has a calculator built to allow potential
            customers to enter in information and determine which mower is right
            for their lawn. It also uses Stripe to process payments and EmailJS
            to send confirmation emails, as well as fulfillment and contact us
            emails.
          </p>
          <br />
          <br />
          <div className={classes.flex}>
            <ul>
              <li>React</li>
              <li>Axios</li>
              <li>Express</li>
              <li>Stripe payment processing</li>
              <li>Customized emails sent with EmailJS</li>
            </ul>
          </div>
          <video
            src={gfVid}
            autoPlay
            loop="loop"
            preload="metadata"
            muted
            playsInline
          ></video>
          <br />
          <br />
          <div className={classes.links}>
            <IconContext.Provider value={{ size: "75px" }}>
              <FaGithub
                className={classes.icon}
                onClick={() =>
                  window.open("https://github.com/Chodges86/ground_forces_site")
                }
              />
            </IconContext.Provider>
          </div>
          <div className={classes.line}></div>
        </section>
        <h3>OTHER PROJECTS</h3>
        <section className={classes.titleRight}>
          <h1>BY THE HOUR</h1>
          <h2>react.js project</h2>
          <p>
            By the Hour is the capstone project I built when graduating from
            DevMountain’s web development bootcamp. It’s a tool that would allow
            a freelancer to keep track of hours spent on different projects.
            Once you register, you can add new projects and start/stop a timer
            when working on that project. You can see the repo at the GitHub
            link below.
          </p>
          <br />
          <p>
            Don’t feel like cloning? Check out my YouTube walk through{" "}
            <a
              href="https://www.youtube.com/watch?v=WVfbyUl8qDs&t=11s"
              target="blank"
            >
              here
            </a>
          </p>
          <img src={byTheHourGif} alt="by the hour mockup video" />
          <div className={classes.links}>
            <IconContext.Provider value={{ size: "75px" }}>
              <FaGithub
                className={classes.icon}
                onClick={() =>
                  window.open(
                    "https://github.com/Chodges86/DevMountain-specs-capstone"
                  )
                }
              />
            </IconContext.Provider>
          </div>
        </section>
        <div className={classes.line}></div>
        <section>
          <h1>LABOR TRACKING TOOL - PLM-LLC</h1>
          <h2>google apps script tool</h2>
          <p>
            A tool I built using Google Apps Scripts that connects a Google
            Spreadsheet to the calendars for each crew of a landscaping company.
            It pulls each event from the calendars and then calculates the
            amount of labor spent at each job throughout the year. This tool
            makes calculating labor for each customer quick and easy.
          </p>
          <br />
          <p>
            Not familiar with Google App Scripts? Learn about it with the link
            below.
          </p>
          <br />
          <img src={plmGif} alt="perfection landscape mockup video" />
          <div className={classes.links}>
            <IconContext.Provider value={{ size: "75px" }}>
              <FaGoogle
                className={classes.icon}
                onClick={() =>
                  window.open("https://www.google.com/script/start/")
                }
              />
            </IconContext.Provider>
          </div>
        </section>
        <div id="spacer" style={{ height: "150px" }}></div>
        <div className={classes.pageInfo}>
          <p>This site built with:</p>
          <ul style={{ columns: 1, width: "fit-content" }}>
            <li>react.js</li>
            <li>react-router</li>
            <li>react-icons</li>
          </ul>
          <br />
          <p>© {year} CH Developments & Designs, LLC.</p>
          <br />
        </div>
      </div>
    </>
  );
};

export default Home;


//* This is some code to use when the logo animation is ready
// import { useIsVisible } from "../util/UseIsVisible";
// const logoRef = useRef(null);
// const isVisible = useIsVisible(logoRef);
/* <div className={classes.logoDiv} ref={logoRef}>
        {isVisible ? (
          <img src={logoGif} alt="logo" className={classes.logo} />
        ) : (
          <img src={logo} alt="logo" className={classes.logo} />
        )}
      </div> */
