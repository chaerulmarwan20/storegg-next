import propTypes from "prop-types";

const Input = (props) => {
  const { label, title, type, ...nativeProps } = props;

  return (
    <>
      <label
        htmlFor={label}
        className="form-label text-lg text-capitalize fw-medium color-palette-1 mb-10"
      >
        {title}
      </label>
      <input
        type={type}
        className="form-control rounded-pill text-lg"
        id={label}
        name={label}
        aria-describedby={label}
        placeholder={`Enter your ${title}`}
        {...nativeProps}
      />
    </>
  );
};

Input.defaultProps = {
  type: "text",
};

Input.propTypes = {
  label: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  type: propTypes.string,
};

export default Input;
