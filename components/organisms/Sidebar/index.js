import propTypes from "prop-types";
import Profile from "./Profile";
import MenuItem from "./MenuItem";
import Footer from "./Footer";

const Sidebar = (props) => {
  const { activeMenu } = props;

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="ic-menu-overview"
            href="/member"
            active={activeMenu === "overview"}
          />
          <MenuItem
            title="Transactions"
            icon="ic-menu-transactions"
            href="/member/transactions"
            active={activeMenu === "transactions"}
          />
          <MenuItem
            title="Messages"
            icon="ic-menu-messages"
            href="/member"
            active={activeMenu === "messages"}
          />
          <MenuItem
            title="Card"
            icon="ic-menu-card"
            href="/member"
            active={activeMenu === "card"}
          />
          <MenuItem
            title="Rewards"
            icon="ic-menu-rewards"
            href="/member"
            active={activeMenu === "rewards"}
          />
          <MenuItem
            title="Settings"
            icon="ic-menu-settings"
            href="/member/edit-profile"
            active={activeMenu === "settings"}
          />
          <MenuItem
            title="Log Out"
            icon="ic-menu-logout"
            href="/sign-in"
            active={activeMenu === "log out"}
          />
        </div>
        <Footer />
      </div>
    </section>
  );
};

Sidebar.propTypes = {
  activeMenu: propTypes.oneOf([
    "overview",
    "transactions",
    "messages",
    "card",
    "rewards",
    "settings",
    "log out",
  ]).isRequired,
};

export default Sidebar;
