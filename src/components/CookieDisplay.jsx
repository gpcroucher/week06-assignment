import PropTypes from "prop-types";
import "./CookieDisplay.css";
import cookieImage from "../assets/cookie-tiny.png";

export default function CookieDisplay(props) {
  return (
    <div className="cookie-display-container">
      <img src={cookieImage} alt="A cookie icon" />
      <p className="cookie-readout-wide">
        {props.cookies} · {props.perSecond} per second · {props.perClick} per
        click
      </p>
      <p className="cookie-readout-narrow">
        {props.cookies}
        <br />
        {props.perSecond} per second
        <br />
        {props.perClick} per click
      </p>
    </div>
  );
}

CookieDisplay.propTypes = {
  cookies: PropTypes.number,
  perSecond: PropTypes.number,
  perClick: PropTypes.number,
};
