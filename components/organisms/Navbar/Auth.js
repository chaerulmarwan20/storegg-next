import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

const Auth = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: "/img/default.png",
    name: "",
  });

  const onLogout = () => {
    Cookies.remove("token");
    router.push("/");
    setIsLogin(false);
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload = jwtDecode(jwtToken);
      const { player } = payload;
      player.avatar = player.avatar ? player.avatar : "/img/default.png";
      setIsLogin(true);
      setUser(player);
    }
  }, []);

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
                src={user.avatar}
                className="rounded-circle"
                width={40}
                height={40}
                alt={user.name}
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
              <button
                type="button"
                onClick={onLogout}
                className="dropdown-item text-lg color-palette-2"
              >
                Log Out
              </button>
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

export default Auth;
