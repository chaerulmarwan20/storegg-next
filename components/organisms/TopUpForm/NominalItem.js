import NumberFormat from "react-number-format";
import propTypes from "prop-types";
import IconCheck from "./IconCheck";

const NominalItem = (props) => {
  const { _id, coinQuantity, coinName, price, onChange } = props;

  return (
    <label
      className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
      htmlFor={_id}
      onChange={onChange}
    >
      <input
        className="d-none"
        type="radio"
        id={_id}
        name="topup"
        value={_id}
      />
      <div className="detail-card">
        <div className="d-flex justify-content-between">
          <p className="text-3xl color-palette-1 m-0">
            <span className="fw-medium">{coinQuantity}</span>
            {coinName}
          </p>
          <IconCheck />
        </div>
        <p className="text-lg color-palette-1 m-0">
          <NumberFormat
            value={price}
            displayType="text"
            thousandSeparator="."
            prefix="Rp. "
            decimalSeparator=","
          />
        </p>
      </div>
    </label>
  );
};

NominalItem.propTypes = {
  _id: propTypes.string.isRequired,
  coinQuantity: propTypes.number.isRequired,
  coinName: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  onChange: propTypes.func.isRequired,
};

export default NominalItem;
