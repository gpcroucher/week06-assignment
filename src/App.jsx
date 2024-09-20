import "./App.css";
import Cookie from "./components/Cookie.jsx";
import CookieDisplay from "./components/CookieDisplay.jsx";
import UpgradeMenu from "./components/UpgradeMenu.jsx";
import { useState, useEffect } from "react";

const PER_SECOND_UPGRADES = [
  {
    id: 1,
    name: "Cookie Oven",
    increase: 1,
    cost: 100,
  },
  {
    id: 2,
    name: "Bakery",
    increase: 10,
    cost: 1000,
  },
  {
    id: 3,
    name: "Assembly Line",
    increase: 100,
    cost: 10000,
  },
];
const PER_CLICK_UPGRADES = [
  {
    id: 1,
    name: "Grandma's Recipe",
    increase: 1,
    cost: 100,
  },
  {
    id: 2,
    name: "Batch Cooking",
    increase: 5,
    cost: 1000,
  },
  {
    id: 3,
    name: "Titanium Baking Tray",
    increase: 10,
    cost: 10000,
  },
];

function App() {
  // we need a cookie button, an upgrade menu, and a couple of readouts for cookie count and cookies per second
  const [cookies, setCookies] = useState(100);
  const [perSecond, setPerSecond] = useState(0);
  const [perClick, setPerClick] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      tickCookie();
    }, 1000);

    return () => {
      clearInterval(interval);
    };

    function tickCookie() {
      setCookies((cookies) => cookies + perSecond);
      console.log(`Cookie ticked: ${perSecond} added`);
    }
  }, [perSecond, perClick]);

  return (
    <>
      <Cookie handleClick={clickCookie} />
      <CookieDisplay cookies={cookies} />
      <UpgradeMenu
        title="CPS Upgrades"
        upgrades={PER_SECOND_UPGRADES}
        cookies={cookies}
        statsIncreaser={increasePerSecond}
        cookieSpender={spendCookies}
      />
      <UpgradeMenu
        title="Per Click Upgrades"
        upgrades={PER_CLICK_UPGRADES}
        cookies={cookies}
        statsIncreaser={increasePerClick}
        cookieSpender={spendCookies}
      />
      <footer>
        <a href="https://www.flaticon.com/free-icons" title="icons">
          All icons created by Freepik - Flaticon
        </a>
      </footer>
    </>
  );

  function clickCookie() {
    setCookies((cookies) => cookies + perClick);
    console.log(`Cookie clicked: ${perClick} added`);
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
