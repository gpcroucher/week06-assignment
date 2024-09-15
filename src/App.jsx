import "./App.css";
import Cookie from "./components/Cookie.jsx";
import UpgradeMenu from "./components/UpgradeMenu.jsx";
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
      <UpgradeMenu
        upgrades={
          /* dummy upgrades */ [
            {
              id: 1,
              name: "Cookie Oven",
              increase: 10,
              cost: 100,
            },
            {
              id: 2,
              name: "Bakery",
              increase: 100,
              cost: 1000,
            },
          ]
        }
        statsIncreaser={increasePerSecond}
        cookieSpender={spendCookies}
      ></UpgradeMenu>
      <UpgradeMenu
        upgrades={
          /* dummy upgrades */ [
            {
              id: 1,
              name: "Grandma's Recipe",
              increase: 1,
              cost: 100,
            },
            {
              id: 2,
              name: "Batch Baking",
              increase: 5,
              cost: 1000,
            },
          ]
        }
        statsIncreaser={increasePerClick}
        cookieSpender={spendCookies}
      ></UpgradeMenu>
    </>
  );

  function clickCookie() {
    setCookies(cookies + perClick);
  }

  function tickCookie() {
    setCookies(cookies + perSecond);
  }

  function increasePerClick(number) {
    setPerClick(perClick + number);
  }

  function increasePerSecond(number) {
    setPerSecond(perSecond + number);
  }

  function spendCookies(number) {
    setCookies(cookies - number);
  }
}

export default App;
