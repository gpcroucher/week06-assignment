import PropTypes from "prop-types";
import UpgradeCard from "./UpgradeCard";
import "./UpgradeMenu.css";

export default function UpgradeMenu(props) {
  const upgrades = props.upgrades;
  return (
    <div className="upgradeMenu">
      <h2>{props.title}</h2>
      <div className="upgradeList">
        {upgrades.map((upgrade) => (
          <UpgradeCard
            key={upgrade.id}
            upgrade={upgrade}
            cookies={props.cookies}
            statsIncreaser={props.statsIncreaser}
            cookieSpender={props.cookieSpender}
          />
        ))}
      </div>
    </div>
  );
}

UpgradeMenu.propTypes = {
  title: PropTypes.string,
  upgrades: PropTypes.array,
  cookies: PropTypes.number,
  statsIncreaser: PropTypes.func,
  cookieSpender: PropTypes.func,
};
