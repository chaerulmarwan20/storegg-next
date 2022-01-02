import jwtDecode from "jwt-decode";
import Sidebar from "../../../components/organisms/Sidebar";
import TransactionContent from "../../../components/organisms/TransactionContent";

const Transactions = () => {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionContent />
    </section>
  );
};

export default Transactions;

export function getServerSideProps({ req }) {
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
