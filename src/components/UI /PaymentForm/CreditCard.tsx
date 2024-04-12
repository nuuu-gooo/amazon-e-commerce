import { GlobalContext } from "@src/providers/GlobalProvider";
import React, {
  useState,
  ChangeEvent,
  FocusEvent,
  useEffect,
  useContext,
} from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Input } from "antd";
import { useIntl } from "react-intl";
interface PaymentFormState {
  cvc: string;
  expiry: string;
  focus: string;
  name: string;
  number: string;
  flipCard: boolean;
}

const PaymentForm: React.FC = () => {
  const [address, setAddress] = useState<string | undefined>();
  const [addressVal, setAddressVal] = useState<boolean | undefined>();
  const { setTransaction, transaction } = useContext(GlobalContext);

  const intl = useIntl();

  const [state, setState] = useState<PaymentFormState>({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
    flipCard: false,
  });

  const [validationErrors, setValidationErrors] = useState<{
    number: string;
    expiry: string;
    name: string;
    cvc: string;
  }>({
    number: "",
    expiry: "",
    name: "",
    cvc: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    setValidationErrors({ ...validationErrors, [name]: "" });
  };

  const handleValid = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    setValidationErrors({ ...validationErrors, [name]: "" });
  };

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    setValidationErrors({ ...validationErrors, [name]: "" });
  };

  const handleInputFocus = (e: FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setState({ ...state, focus: name, flipCard: name === "cvc" });
  };

  const handleCvcChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value !== undefined) {
      setState({ ...state, cvc: value });
      setValidationErrors({ ...validationErrors, cvc: "" });
    }
  };

  const validateCardNumber = (number: string): string => {
    return number.length === 16 ? "✅" : "Invalid card number ❌";
  };

  const validateExpiryDate = (expiry: string): string => {
    return expiry.length === 4 ? "✅" : "Invalid expiry date ❌";
  };

  const validateCardholderName = (name: string): string => {
    return /^[a-zA-Z\s]+$/.test(name) ? "✅" : "Invalid name ❌";
  };

  const validateCVC = (cvc: string): string => {
    return /^\d{3}$/.test(cvc) ? "✅" : "Invalid CVC ❌";
  };

  const isNumberValid = validateCardNumber(state.number) === "✅";
  const isExpiryValid = validateExpiryDate(state.expiry) === "✅";
  const isNameValid = validateCardholderName(state.name) === "✅";
  const isCvcValid = validateCVC(state.cvc) === "✅";

  useEffect(() => {
    if (address === undefined || "" || null) {
      setAddressVal(false);
    } else {
      setAddressVal(true);
    }
  }, [address]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isNumberValid && isExpiryValid && isNameValid && isCvcValid) {
      setTransaction(true);
    } else {
      setTransaction(false);
    }

    setValidationErrors({
      number: validateCardNumber(state.number),
      expiry: validateExpiryDate(state.expiry),
      name: validateCardholderName(state.name),
      cvc: validateCVC(state.cvc),
    });
  };

  return (
    <div
      id="PaymentForm"
      className="flex-col flex  md:flex-row items-center justify-between"
    >
      <div className="left">
        {transaction && <p className="mb-3">Valid Info ✅</p>}

        <Cards
          cvc={state.cvc}
          expiry={state.expiry}
          focused={state.focus}
          name={state.name}
          number={state.number}
          flipCard={state.flipCard}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="right flex flex-col ml-3">
          <div className="input-container">
            <Input
              className="mb-3 p-2 rounded outline-none border-solid border-black"
              maxLength={16}
              type="tel"
              name="number"
              placeholder={intl.formatMessage({ id: "card-number" })}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <p className="mb-2 mt-2">{validationErrors.number}</p>
          </div>

          <div className="input-container">
            <Input
              className="mb-3 p-2 rounded outline-none border-solid border-black"
              maxLength={4}
              type="tel"
              name="expiry"
              placeholder={intl.formatMessage({ id: "expire-date" })}
              onChange={handleValid}
              onFocus={handleInputFocus}
            />
            <p className="mb-2 mt-2">{validationErrors.expiry}</p>
          </div>

          <div className="input-container">
            <Input
              className="mb-3 p-2 rounded outline-none border-solid border-black"
              type="text"
              name="name"
              placeholder={intl.formatMessage({ id: "cardholder-name" })}
              onChange={handleName}
              onFocus={handleInputFocus}
            />
            <p className="mb-2 mt-2">{validationErrors.name}</p>
          </div>

          <div className="input-container">
            <Input
              className="mb-3 p-2 rounded outline-none border-solid border-black"
              type="tel"
              minLength={1}
              maxLength={3}
              name="cvc"
              placeholder="CVC"
              onChange={handleCvcChange}
              onFocus={handleInputFocus}
            />
            <p className="mb-2 mt-2">{validationErrors.cvc}</p>
          </div>

          <div className="input-container flex">
            <Input
              onChange={(e) => setAddress(e.target.value)}
              className="mb-3 p-2 rounded outline-none border-solid border-black"
              type="address"
              name="Address"
              placeholder={intl.formatMessage({ id: "address" })}
            />

            {addressVal && <p>✅</p>}
          </div>

          <button
            onClick={() => setTransaction(true)}
            className="ursor-pointer w-full px-2.5  p-1 rounded-md mt-3 font-titleFont font-sm text-base bg-gradient-to-tr from-yellow-400
 to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 
 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
