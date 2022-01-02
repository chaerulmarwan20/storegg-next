import { useState, useCallback, useEffect } from "react";
import { toast } from "react-toastify";
import { getMemberOverview } from "../../../services/member";
import Category from "./Category";
import TableRow from "./TableRow";

const OverfiewContent = () => {
  const urlImg = process.env.NEXT_PUBLIC_IMG;
  const [count, setCount] = useState([]);
  const [data, setData] = useState([]);

  const getMemberOverviewApi = useCallback(async () => {
    const response = await getMemberOverview();
    if (response.error) toast.error(response.message);
    else {
      setCount(response.data.count);
      setData(response.data.data);
    }
  }, [getMemberOverview]);

  useEffect(() => getMemberOverviewApi(), []);

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              {count.map((item) => {
                return (
                  <Category
                    key={item._id}
                    nominal={item.value}
                    icon={`ic-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Category>
                );
              })}
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => {
                  return (
                    <TableRow
                      key={item._id}
                      image={`${urlImg}/${item.historyVoucherTopup.thumbnail}`}
                      title={item.historyVoucherTopup.gameName}
                      category={item.historyVoucherTopup.category}
                      item={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`}
                      price={item.value}
                      status={item.status}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OverfiewContent;
