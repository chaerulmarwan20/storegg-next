import cx from "classnames";
import Link from "next/link";
import propTypes from "prop-types";

const FooterMenu = (props) => {
  const { title, menu } = props;
  const classMenu = cx({
    "col-md-4": true,
    "col-6": title !== "Connect",
    "mb-lg-0": title !== "Connect",
    "mb-25": title !== "Connect",
    "col-12": title === "Connect",
    "mt-lg-0": title === "Connect",
    "mt-md-0": title === "Connect",
    "mt-25": title === "Connect",
  });

  return (
    <div className={classMenu}>
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        {menu.map((item) => {
          return (
            <li className="mb-6" key={item.title}>
              <Link href={item.href}>
                <a className="text-lg color-palette-1 text-decoration-none">
                  {item.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FooterMenu.propTypes = {
  title: propTypes.string.isRequired,
  menu: propTypes.arrayOf(propTypes.object).isRequired,
};

export default FooterMenu;
