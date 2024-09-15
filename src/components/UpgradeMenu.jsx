import PropTypes from "prop-types";
import UpgradeCard from "./UpgradeCard";

export default function UpgradeMenu(props) {
  const upgrades = props.upgrades;
  return (
    <div>
      {upgrades.map((upgrade) => (
        <UpgradeCard
          key={upgrade.id}
          upgrade={upgrade}
          statsIncreaser={props.statsIncreaser}
          cookieSpender={props.cookieSpender}
        />
      ))}
    </div>
  );
}

UpgradeMenu.propTypes = {
  upgrades: PropTypes.array,
  statsIncreaser: PropTypes.func,
  cookieSpender: PropTypes.func,
};
