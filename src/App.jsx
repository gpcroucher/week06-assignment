import "./App.css";
import Cookie from "./components/Cookie.jsx";
import { useState } from "react";

function App() {
  // we need a cookie button, an upgrade menu, and a couple of readouts for cookie count and cookies per second
  const [myCounterState, setMyCounterState] = useState(0);

  return (
    <>
      <Cookie handleClick={increaseCookieCount}></Cookie>
      <p>{myCounterState}</p>
    </>
  );

  function increaseCookieCount() {
    setMyCounterState(myCounterState + 1);
    console.log("cookies increased");
  }
}

export default App;
