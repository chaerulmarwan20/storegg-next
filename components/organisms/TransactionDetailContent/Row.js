import propTypes from "prop-types";

const Row = (props) => {
  const { label, value, className } = props;

  return (
    <p className="text-lg color-palette-1 mb-20">
      {label} <span className={`purchase-details ${className}`}>{value}</span>
    </p>
  );
};

Row.defaultProps = {
  className: "",
};

Row.propTypes = {
  label: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  className: propTypes.string,
};

export default Row;
