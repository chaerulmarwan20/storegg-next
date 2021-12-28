import Link from "next/link";
import Image from "next/image";
import FooterMenu from "../../molecules/FooterMenu";

const Footer = () => {
  const menuCompany = [
    {
      href: "/",
      title: "About Us",
    },
    {
      href: "/",
      title: "Press Release",
    },
    {
      href: "/",
      title: "Terms of Use",
    },
    {
      href: "/",
      title: "Privacy & Policy",
    },
  ];
  const menuSupport = [
    {
      href: "/",
      title: "Refund Policy",
    },
    {
      href: "/",
      title: "Unlock Rewards",
    },
    {
      href: "/",
      title: "Live Chatting",
    },
  ];
  const menuConnect = [
    {
      href: "/",
      title: "hi@store.gg",
    },
    {
      href: "/",
      title: "team@store.gg",
    },
    {
      href: "/",
      title: "Pasific 12, Jakarta Selatan",
    },
    {
      href: "/",
      title: "021 - 1122 - 9090",
    },
  ];

  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <Link href="/">
                <a className="mb-30">
                  <Image src="/icon/logo.svg" width={60} height={60} />
                </a>
              </Link>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <FooterMenu title="Company" menu={menuCompany} />
                <FooterMenu title="Support" menu={menuSupport} />
                <FooterMenu title="Connect" menu={menuConnect} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
