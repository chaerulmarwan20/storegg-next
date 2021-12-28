import Link from "next/link";
import cx from "classnames";
import propTypes from "prop-types";

const NavbarMenu = (props) => {
  const { title, href, active } = props;
  const classList = cx({
    "nav-item": true,
    "my-auto": true,
    "me-lg-20": title === "Global Rank",
  });
  const classTitle = cx({
    "nav-link": true,
    active,
  });

  return (
    <li className={classList}>
      <Link href={href}>
        <a className={classTitle} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  );
};

NavbarMenu.defaultProps = {
  href: "/",
  active: false,
};

NavbarMenu.propTypes = {
  title: propTypes.string.isRequired,
  href: propTypes.string,
  active: propTypes.bool,
};

export default NavbarMenu;
