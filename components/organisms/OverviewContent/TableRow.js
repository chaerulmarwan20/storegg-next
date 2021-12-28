import cx from "classnames";
import propTypes from "prop-types";

const TableRow = (props) => {
  const { image, title, category, item, price, status } = props;
  const classStatus = cx({
    "float-start": true,
    "icon-status": true,
    pending: status === "Pending",
    success: status === "Success",
    failed: status === "Failed",
  });

  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${image}.png`}
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
        <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
      </td>
      <td>
        <div>
          <span className={classStatus} />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
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
  item: propTypes.number.isRequired,
  price: propTypes.number.isRequired,
  status: propTypes.oneOf(["Pending", "Success", "Failed"]).isRequired,
};

export default TableRow;
