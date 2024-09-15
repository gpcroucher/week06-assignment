import PropTypes from "prop-types";
import "./Cookie.css";

export default function Cookie(props) {
  return <button onClick={props.handleClick}></button>;
}

Cookie.propTypes = {
  handleClick: PropTypes.func,
};
