import propTypes from "prop-types";
import IconCheck from "./IconCheck";

const PaymentItem = (props) => {
  const { bankId, type, name, onChange } = props;

  return (
    <label
      className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
      htmlFor={bankId}
      onChange={onChange}
    >
      <input
        className="d-none"
        type="radio"
        id={bankId}
        name="paymentMethod"
        value={bankId}
      />
      <div className="detail-card">
        <div className="d-flex justify-content-between">
          <p className="text-3xl color-palette-1 fw-medium m-0">{type}</p>
          <IconCheck />
        </div>
        <p className="text-lg color-palette-1 m-0">{name}</p>
      </div>
    </label>
  );
};

PaymentItem.propTypes = {
  bankId: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default PaymentItem;
