import PropTypes from "prop-types";
import "./CookieDisplay.css";

export default function CookieDisplay(props) {
  return (
    <div className="cookie-display-container">
      <img src="src/assets/cookie-tiny.png" alt="A cookie icon" />
      <p>{props.cookies}</p>
    </div>
  );
}

CookieDisplay.propTypes = {
  cookies: PropTypes.number,
};
