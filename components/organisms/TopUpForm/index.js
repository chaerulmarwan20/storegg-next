import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import propTypes from "prop-types";
import NominalItem from "./NominalItem";
import PaymentItem from "./PaymentItem";

const TopUpForm = (props) => {
  const { nominals, payments } = props;
  const router = useRouter();
  const [verifyId, setVerifyId] = useState("");
  const [bankAccountName, setBankAccountName] = useState("");
  const [nominalItem, setNominalItem] = useState({});
  const [paymentItem, setPaymentItem] = useState({});

  const onSubmit = () => {
    if (
      verifyId === "" ||
      bankAccountName === "" ||
      nominalItem === {} ||
      paymentItem === {}
    ) {
      toast.error("Please fill in all data!!!");
    } else {
      const data = {
        verifyId,
        bankAccountName,
        nominalItem,
        paymentItem,
      };
      localStorage.setItem("data-topup", JSON.stringify(data));
      router.push("/checkout");
    }
  };

  return (
    <form>
      <div className="pt-md-50 pt-30">
        <div>
          <label
            htmlFor="ID"
            className="form-label text-lg fw-medium color-palette-1 mb-10"
          >
            Verify ID
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            id="ID"
            name="ID"
            aria-describedby="verifyID"
            placeholder="Enter your ID"
            value={verifyId}
            onChange={(e) => setVerifyId(e.target.value)}
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          {nominals.map((nominal) => {
            return (
              <NominalItem
                key={nominal._id}
                _id={nominal._id}
                coinQuantity={nominal.coinQuantity}
                coinName={nominal.coinName}
                price={nominal.price}
                onChange={() => setNominalItem(nominal)}
              />
            );
          })}
          <div className="col-lg-4 col-sm-6" />
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            {payments.map((payment) => {
              return payment.banks.map((bank) => {
                return (
                  <PaymentItem
                    key={bank._id}
                    bankId={bank._id}
                    type={payment.type}
                    name={bank.bankName}
                    onChange={() => setPaymentItem({ payment, bank })}
                  />
                );
              });
            })}
            <div className="col-lg-4 col-sm-6" />
          </div>
        </fieldset>
      </div>
      <div className="pb-50">
        <label
          htmlFor="bankAccount"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Bank Account Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="bankAccount"
          name="bankAccount"
          aria-describedby="bankAccount"
          placeholder="Enter your Bank Account Name"
          value={bankAccountName}
          onChange={(e) => setBankAccountName(e.target.value)}
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <button
          type="button"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
          onClick={onSubmit}
        >
          Continue
        </button>
      </div>
    </form>
  );
};

TopUpForm.propTypes = {
  nominals: propTypes.arrayOf(
    propTypes.shape({
      _id: propTypes.string.isRequired,
      coinQuantity: propTypes.number.isRequired,
      coinName: propTypes.string.isRequired,
      price: propTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  payments: propTypes.arrayOf(
    propTypes.shape({
      type: propTypes.string.isRequired,
      banks: propTypes.arrayOf(
        propTypes.shape({
          _id: propTypes.string.isRequired,
          bankName: propTypes.string.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired
  ).isRequired,
};

export default TopUpForm;
