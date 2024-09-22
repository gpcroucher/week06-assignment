import PropTypes from "prop-types";
import "./Cookie.css";
import jarImage from "../assets/cookiejar.png";

export default function Cookie(props) {
  return (
    <button className={"cookieButton"} onClick={props.handleClick}>
      <img src={jarImage} alt="A cute cartoon cookie jar" />
    </button>
  );
}

Cookie.propTypes = {
  handleClick: PropTypes.func,
};
