import Link from "next/link";
import Image from "next/image";
import ToggleMenu from "./ToggleMenu";
import Auth from "./Auth";
import NavbarMenu from "../../molecules/NavbarMenu";

const Navbar = () => {
  return (
    <section id="banner">
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">
              <Image src="/icon/logo.svg" width={60} height={60} />
            </a>
          </Link>
          <ToggleMenu />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <NavbarMenu title="Home" active />
              <NavbarMenu title="Games" />
              <NavbarMenu title="Rewards" />
              <NavbarMenu title="Discover" />
              <NavbarMenu title="Global Rank" />
              <Auth />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
