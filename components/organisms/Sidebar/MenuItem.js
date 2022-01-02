import Link from "next/link";
import cx from "classnames";
import propTypes from "prop-types";
import MenuIcon from "./MenuIcon";

const MenuItem = (props) => {
  const { title, icon, href, active, onClick } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active,
  });

  return (
    <div className={classItem}>
      <MenuIcon icon={icon} />
      <p className="item-title m-0">
        {onClick ? (
          <a href="" className="text-lg text-decoration-none" onClick={onClick}>
            {title}
          </a>
        ) : (
          <Link href={href}>
            <a className="text-lg text-decoration-none">{title}</a>
          </Link>
        )}
      </p>
    </div>
  );
};

MenuItem.defaultProps = {
  href: "/",
  active: false,
  onClick: false,
};

MenuItem.propTypes = {
  title: propTypes.string.isRequired,
  icon: propTypes.oneOf([
    "ic-menu-overview",
    "ic-menu-transactions",
    "ic-menu-messages",
    "ic-menu-card",
    "ic-menu-rewards",
    "ic-menu-settings",
    "ic-menu-logout",
  ]).isRequired,
  href: propTypes.string,
  active: propTypes.bool,
  onClick: propTypes.oneOfType([propTypes.bool, propTypes.func]),
};

export default MenuItem;
