import NumberFormat from "react-number-format";
import cx from "classnames";
import propTypes from "prop-types";

const TableRow = (props) => {
  const { image, title, category, item, price, status } = props;
  const classStatus = cx({
    "float-start": true,
    "icon-status": true,
    pending: status === "pending",
    success: status === "success",
    failed: status === "failed",
  });

  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={image}
          width={80}
          height={60}
          alt={title}
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item}</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">
          <NumberFormat
            value={price}
            displayType="text"
            thousandSeparator="."
            prefix="Rp. "
            decimalSeparator=","
          />
        </p>
      </td>
      <td>
        <div>
          <span className={classStatus} />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative text-capitalize">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  item: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  status: propTypes.oneOf(["pending", "success", "failed"]).isRequired,
};

export default TableRow;
