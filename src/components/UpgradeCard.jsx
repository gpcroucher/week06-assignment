import PropTypes from "prop-types";

export default function UpgradeCard(props) {
  const upgrade = props.upgrade;

  function buyUpgrade() {
    if (props.cookies >= upgrade.cost) {
      props.cookieSpender(upgrade.cost);
      props.statsIncreaser(upgrade.increase);
      console.log("Upgrade bought.");
    } else {
      console.log("Not enough cookies to buy this upgrade.");
    }
  }

  return (
    <div className="upgradeCard">
      <p>{upgrade.name}</p>
      <p>Cost: {upgrade.cost}</p>
      <button onClick={buyUpgrade}>Buy?</button>
    </div>
  );
}

UpgradeCard.propTypes = {
  upgrade: PropTypes.object,
  cookies: PropTypes.number,
  statsIncreaser: PropTypes.func,
  cookieSpender: PropTypes.func,
};
