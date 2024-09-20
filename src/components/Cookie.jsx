import PropTypes from "prop-types";
import "./Cookie.css";

export default function Cookie(props) {
  return (
    <button className={"cookieButton"} onClick={props.handleClick}>
      <img src="src/assets/cookiejar.png" alt="A cute cartoon cookie jar" />
    </button>
  );
}

Cookie.propTypes = {
  handleClick: PropTypes.func,
};
