import Image from "next/image";
import Link from "next/link";
import propTypes from "prop-types";

const Auth = (props) => {
  const { isLogin } = props;

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none" />
        <div>
          <Link href="#">
            <a
              className="dropdown-toggle ms-lg-40"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <Image
                src="/img/avatar-1.png"
                className="rounded-circle"
                width={40}
                height={40}
                alt="Avatar"
              />
            </a>
          </Link>
          <ul
            className="dropdown-menu border-0"
            aria-labelledby="dropdownMenuLink"
          >
            <li>
              <Link href="/member">
                <a className="dropdown-item text-lg color-palette-2">
                  My Profile
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="dropdown-item text-lg color-palette-2">Wallet</a>
              </Link>
            </li>
            <li>
              <Link href="/member/edit-profile">
                <a className="dropdown-item text-lg color-palette-2">
                  Account Settings
                </a>
              </Link>
            </li>
            <li>
              <Link href="/sign-in">
                <a className="dropdown-item text-lg color-palette-2">Log Out</a>
              </Link>
            </li>
          </ul>
        </div>
      </li>
    );
  }

  return (
    <li className="nav-item my-auto">
      <Link href="/sign-in">
        <a className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill">
          Sign In
        </a>
      </Link>
    </li>
  );
};

Auth.defaultProps = {
  isLogin: false,
};

Auth.propTypes = {
  isLogin: propTypes.bool,
};

export default Auth;
