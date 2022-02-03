import propTypes from "prop-types";
import styles from "./button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.prototype = {
  text: propTypes.string.isRequired,
};

export default Button;
