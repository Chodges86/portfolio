import classes from "./Button.module.css";

const Button = (props) => {
  const { title, onClick } = props;
  return (
    <button className={classes.button} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
