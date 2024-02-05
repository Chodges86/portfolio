import classes from "./Home.module.css";

import logo from "./assetts/logo.svg";

const Home = () => {
  return (
    <>
      <img src={logo} alt="logo" className={classes.logo} />
      <div className={classes.page}>
        <section id={classes["intro"]}>
          <h1>CALEB HODGES</h1>
          <h2>web developer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
            nisl purus in. Eget velit aliquet sagittis id consectetur purus ut
            faucibus.{" "}
          </p>
        </section>
      </div>
    </>
  );
};

export default Home;

{
  /* <div className={classes.page}>
      <img src={logo} alt="logo" className={classes.logo} />
      <div className={classes.scrollingContent}>
        <div id="intro">
          <h1>CALEB HODGES</h1>
          <h2>web developer</h2>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
            nisl purus in. Eget velit aliquet sagittis id consectetur purus ut
            faucibus.{" "}
          </p>
        </div>
      </div>
    </div> */
}
