import ReachedItem from "../../molecules/ReachedItem";

const Reached = () => {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem amount="290M+" title="Players Top Up" />
          <ReachedItem amount="12.500" title="Games Available" />
          <ReachedItem amount="99,9%" title="Happy Players" />
          <ReachedItem amount="4.7" title="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
};

export default Reached;
