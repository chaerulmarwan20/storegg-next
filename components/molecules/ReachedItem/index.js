import cx from "classnames";
import propTypes from "prop-types";

const ReachedItem = (props) => {
  const { amount, title } = props;
  const classItem = cx({
    "me-lg-35": true,
    "ms-lg-35": title !== "Players Top Up",
  });

  const lineView = () => {
    if (title !== "Rating Worldwide") {
      return (
        <>
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
        </>
      );
    }
    return "";
  };

  return (
    <>
      <div className={classItem}>
        <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
          {amount}
        </p>
        <p className="text-lg text-lg-start text-center color-palette-2 m-0">
          {title}
        </p>
      </div>
      {lineView()}
    </>
  );
};

ReachedItem.propTypes = {
  amount: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export default ReachedItem;
