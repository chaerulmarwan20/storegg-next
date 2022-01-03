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
  return {
    props: {},
  };
}
