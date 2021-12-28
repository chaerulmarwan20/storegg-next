import Image from "next/image";
import propTypes from "prop-types";

const StepItem = (props) => {
  const { icon, title, desc1, desc2 } = props;

  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <div className="mb-30">
          <Image
            src={`/icon/${icon}.svg`}
            width={80}
            height={80}
            alt="Icon Step"
          />
        </div>
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">
          {desc1}
          <br />
          {desc2}
        </p>
      </div>
    </div>
  );
};

StepItem.propTypes = {
  icon: propTypes.oneOf(["step-1", "step-2", "step-3"]).isRequired,
  title: propTypes.string.isRequired,
  desc1: propTypes.string.isRequired,
  desc2: propTypes.string.isRequired,
};

export default StepItem;
