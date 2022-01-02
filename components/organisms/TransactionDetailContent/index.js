import propTypes from "prop-types";
import Row from "./Row";

const TransactionDetailContent = (props) => {
  const urlImg = process.env.NEXT_PUBLIC_IMG;
  const { data } = props;

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Details #{data._id}
        </h2>
        <div className="details">
          <div className="main-content main-content-card overflow-auto">
            <section className="checkout mx-auto">
              <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                <div className="game-checkout d-flex flex-row align-items-center">
                  <div className="pe-4">
                    <div className="cropped">
                      <img
                        src={`${urlImg}/${data.historyVoucherTopup.thumbnail}`}
                        width={200}
                        height={130}
                        className="img-fluid"
                        alt="Thumbnail"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="fw-bold text-xl color-palette-1 mb-10">
                      {data.historyVoucherTopup.gameName}
                    </p>
                    <p className="color-palette-2 m-0">
                      Category: {data.historyVoucherTopup.category}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="fw-medium text-center label pending m-0 rounded-pill text-capitalize">
                    {data.status}
                  </p>
                </div>
              </div>
              <hr />
              <div className="purchase pt-30">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">
                  Purchase Details
                </h2>
                <Row label="Your Game ID" value={data.accountUser} />
                <Row label="Order ID" value={`#${data._id}`} />
                <Row
                  label="Item"
                  value={`${data.historyVoucherTopup.coinQuantity} ${data.historyVoucherTopup.coinName}`}
                />
                <Row label="Price" value={data.historyVoucherTopup.price} />
                <Row label="Tax (10%)" value={data.tax} />
                <Row
                  label="Total"
                  value={data.value}
                  className="color-palette-4"
                />
              </div>
              <div className="payment pt-10 pb-10">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">
                  Payment Informations
                </h2>
                <Row label="Your Account Name" value={data.name} />
                <Row label="Type" value={data.historyPayment.type} />
                <Row label="Bank Name" value={data.historyPayment.bankName} />
                <Row
                  label="Bank Account Name"
                  value={data.historyPayment.name}
                />
                <Row
                  label="Bank Number"
                  value={data.historyPayment.noRekening}
                />
              </div>
              <div className="d-md-block d-flex flex-column w-100">
                <a
                  href="https://wa.me/6281224685502?text=Saya%20sudah%20melakukan%20pembayaran"
                  className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                  role="button"
                >
                  WhatsApp ke Admin
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

TransactionDetailContent.propTypes = {
  data: propTypes.shape({
    _id: propTypes.string.isRequired,
    accountUser: propTypes.string.isRequired,
    tax: propTypes.number.isRequired,
    value: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    historyVoucherTopup: propTypes.shape({
      thumbnail: propTypes.string.isRequired,
      gameName: propTypes.string.isRequired,
      category: propTypes.string.isRequired,
      coinQuantity: propTypes.string.isRequired,
      coinName: propTypes.string.isRequired,
      price: propTypes.number.isRequired,
    }).isRequired,
    historyPayment: propTypes.shape({
      type: propTypes.string.isRequired,
      bankName: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      noRekening: propTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TransactionDetailContent;
