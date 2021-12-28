import cx from "classnames";
import propTypes from "prop-types";

const ButtonTab = (props) => {
  const { title, data, href, active } = props;
  const classBtn = cx({
    btn: true,
    "btn-status": true,
    "rounded-pill": true,
    "text-sm": true,
    "me-3": true,
    "btn-active": active,
  });

  return (
    <a data-filter={data} href={href} className={classBtn}>
      {title}
    </a>
  );
};

ButtonTab.defaultProps = {
  data: "*",
  href: "/",
  active: false,
};

ButtonTab.propTypes = {
  title: propTypes.string.isRequired,
  data: propTypes.oneOf(["success", "pending", "failed"]),
  href: propTypes.string,
  active: propTypes.bool,
};

export default ButtonTab;
