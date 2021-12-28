import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="sidebar-footer pt-73 pe-30">
      <div className="footer-card">
        <div className="d-flex justify-content-between mb-20">
          <div>
            <Image src="/icon/top-up.svg" width={50} height={50} alt="Top-Up" />
          </div>
          <p className="fw-medium color-palette-1">
            Top Up &<br />
            Be The Winner
          </p>
        </div>
        <Link href="/">
          <a className="btn btn-get-started w-100 fw-medium text-xs text-center text-white rounded-pill">
            Get Started
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
