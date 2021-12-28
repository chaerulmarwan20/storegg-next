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
