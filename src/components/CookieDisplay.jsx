import PropTypes from "prop-types";
import "./CookieDisplay.css";
import cookieImage from "../assets/cookie-tiny.png";

export default function CookieDisplay(props) {
  return (
    <div className="cookie-display-container">
      <img src={cookieImage} alt="A cookie icon" />
      <p>{props.cookies}</p>
    </div>
  );
}

CookieDisplay.propTypes = {
  cookies: PropTypes.number,
};
