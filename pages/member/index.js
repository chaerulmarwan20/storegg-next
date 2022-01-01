import jwtDecode from "jwt-decode";
import Sidebar from "../../components/organisms/Sidebar";
import OverfiewContent from "../../components/organisms/OverviewContent";

const Member = () => {
  return (
    <section className="overview overflow-auto">
      <Sidebar activeMenu="overview" />
      <OverfiewContent />
    </section>
  );
};

export default Member;

export async function getServerSideProps({ req }) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }
  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const payload = jwtDecode(jwtToken);
  const { player } = payload;
  player.avatar = player.avatar ? player.avatar : "/img/default.png";
  return {
    props: {
      user: player,
    },
  };
}
