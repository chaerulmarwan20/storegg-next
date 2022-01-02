import cx from "classnames";
import propTypes from "prop-types";

const ButtonTab = (props) => {
  const { title, active, onClick } = props;
  const classBtn = cx({
    btn: true,
    "btn-status": true,
    "rounded-pill": true,
    "text-sm": true,
    "me-3": true,
    "btn-active": active,
  });

  return (
    <button type="button" className={classBtn} onClick={onClick}>
      {title}
    </button>
  );
};

ButtonTab.propTypes = {
  title: propTypes.string.isRequired,
  active: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
};

export default ButtonTab;
