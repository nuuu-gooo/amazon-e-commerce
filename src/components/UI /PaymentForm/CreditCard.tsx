import React, { useState, ChangeEvent, FocusEvent } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

interface PaymentFormState {
  cvc: string;
  expiry: string;
  focus: string;
  name: string;
  number: string;
  flipCard: boolean;
}

const PaymentForm: React.FC = () => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setValidationErrors({
      number: validateCardNumber(state.number),
      expiry: validateExpiryDate(state.expiry),
      name: validateCardholderName(state.name),
      cvc: validateCVC(state.cvc),
    });
  };

  return (
    <div id="PaymentForm" className="flex items-center justify-between">
      <div className="left">
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
            <input
              className="mb-3 p-2 rounded outline-none border-solid border-black"
              maxLength={16}
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <p className="mb-2 mt-2">{validationErrors.number}</p>
          </div>

          <div className="input-container">
            <input
              className="mb-3 p-2 rounded outline-none border-solid border-black"
              maxLength={4}
              type="tel"
              name="expiry"
              placeholder="Expiration Date"
              onChange={handleValid}
              onFocus={handleInputFocus}
            />
            <p className="mb-2 mt-2">{validationErrors.expiry}</p>
          </div>

          <div className="input-container">
            <input
              className="mb-3 p-2 rounded outline-none border-solid border-black"
              type="text"
              name="name"
              placeholder="Cardholder Name"
              onChange={handleName}
              onFocus={handleInputFocus}
            />
            <p className="mb-2 mt-2">{validationErrors.name}</p>
          </div>

          <div className="input-container">
            <input
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

          <select className="p-2 mb-3" name="" id="">
            <option value="germany">🇩🇪 Germany</option>
            <option value="germany"> 🇺🇸 America</option>
            <option value="germany">🇬🇪 Georgia</option>
          </select>

          <div className="input-container">
            <input
              className="mb-3 p-2 rounded outline-none border-solid border-black"
              type="address"
              name="Address"
              placeholder="Address"
            />
          </div>

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
