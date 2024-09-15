import PropTypes from "prop-types";

export default function UpgradeCard(props) {
  const upgrade = props.upgrade;

  function buyUpgrade() {
    props.cookieSpender(upgrade.cost);
    props.statsIncreaser(upgrade.increase);
  }

  return (
    <div>
      <p>{upgrade.name}</p>
      <p>Cost: {upgrade.cost}</p>
      <button onClick={buyUpgrade}>Buy?</button>
    </div>
  );
}

UpgradeCard.propTypes = {
  upgrade: PropTypes.object,
  statsIncreaser: PropTypes.func,
  cookieSpender: PropTypes.func,
};
