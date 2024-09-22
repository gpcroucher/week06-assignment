import "./App.css";
import Cookie from "./components/Cookie.jsx";
import CookieDisplay from "./components/CookieDisplay.jsx";
import UpgradeMenu from "./components/UpgradeMenu.jsx";
import { useState, useEffect, useCallback } from "react";

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
  {
    id: 4,
    name: "Assembly Line",
    increase: 1000,
    cost: 100000,
  },
  {
    id: 5,
    name: "Assembly Line",
    increase: 10000,
    cost: 1000000,
  },
  {
    id: 6,
    name: "Assembly Line",
    increase: 100000,
    cost: 10000000,
  },
  {
    id: 7,
    name: "Assembly Line",
    increase: 1000000,
    cost: 100000000,
  },
  {
    id: 8,
    name: "Assembly Line",
    increase: 10000000,
    cost: 1000000000,
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
    increase: 25,
    cost: 10000,
  },
  {
    id: 4,
    name: "Secret Spices",
    increase: 125,
    cost: 100000,
  },
  {
    id: 5,
    name: "Space Age Flour",
    increase: 625,
    cost: 1000000,
  },
  {
    id: 6,
    name: "Nanotech Oven Mitts",
    increase: 3125,
    cost: 10000000,
  },
  {
    id: 7,
    name: "Secret Icing Tech",
    increase: 15625,
    cost: 10000000,
  },
  {
    id: 8,
    name: "AI Spatula",
    increase: 78125,
    cost: 1000000,
  },
];

function App() {
  // initialise states from localStorage or set default values if they're not in localStorage
  const [cookies, setCookies] = useState(() => {
    return load().cookies ? load().cookies : 100;
  });
  const [perSecond, setPerSecond] = useState(() => {
    return load().perSecond ? load().perSecond : 0;
  });
  const [perClick, setPerClick] = useState(() => {
    return load().perClick ? load().perClick : 1;
  });

  /*
  Memoized functions
  */
  const tickCookie = useCallback(() => {
    setCookies((cookies) => cookies + perSecond);
    console.log(`Cookie ticked: ${perSecond} added`);
  }, [perSecond]);

  /*
  useEffects
  */
  // set the 1 second interval - only resets when perSecond changes
  useEffect(() => {
    const interval = setInterval(() => {
      tickCookie();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [tickCookie]);

  // save variables to local storage when any of them change
  useEffect(() => {
    localStorage.setItem("perSecond", perSecond);
    localStorage.setItem("perClick", perClick);
    localStorage.setItem("cookies", cookies);

    return; // no clean-up needed
  }, [perClick, perSecond, cookies]);

  /* 
  JSX
  */
  return (
    <>
      <div className="cookieJarAndDisplay">
        <Cookie handleClick={clickCookie} />
        <CookieDisplay cookies={cookies} />
      </div>
      <div className="upgradeSection">
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
      </div>

      <footer>
        <a href="https://www.flaticon.com/free-icons" title="icons">
          All icons created by Freepik - Flaticon
        </a>
      </footer>
    </>
  );

  /* 
  functions 
  */
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

  function load() {
    return {
      cookies: Number(localStorage.getItem("cookies")),
      perSecond: Number(localStorage.getItem("perSecond")),
      perClick: Number(localStorage.getItem("perClick")),
    };
  }

  function spendCookies(number) {
    setCookies(cookies - number);
  }
}

export default App;
