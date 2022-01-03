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
