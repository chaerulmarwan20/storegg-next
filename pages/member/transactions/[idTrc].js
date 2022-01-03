import TransactionDetailContent from "../../../components/organisms/TransactionDetailContent";
import { getTransactionDetail } from "../../../services/member";

const TransactionsDetail = (props) => {
  const { transactionDetail } = props;

  return (
    <section className="transactions-detail overflow-auto">
      <TransactionDetailContent data={transactionDetail} />
    </section>
  );
};

export default TransactionsDetail;

export async function getServerSideProps({ req, params }) {
  const { token } = req.cookies;
  const { idTrc } = params;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }
  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const response = await getTransactionDetail(idTrc, jwtToken);
  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
