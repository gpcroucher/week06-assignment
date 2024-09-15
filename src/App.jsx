import "./App.css";
import Cookie from "./components/Cookie.jsx";
import { useState, useEffect } from "react";

function App() {
  // we need a cookie button, an upgrade menu, and a couple of readouts for cookie count and cookies per second
  const [cookies, setCookies] = useState(0);
  const [perSecond, setPerSecond] = useState(0);
  const [perClick, setPerClick] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      tickCookie();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <Cookie handleClick={clickCookie}></Cookie>
      <p>{cookies}</p>
    </>
  );

  function clickCookie() {
    setCookies(cookies + perClick);
  }

  function tickCookie() {
    setCookies(cookies + perSecond);
  }
}

export default App;
