import React from "react";

const Step = ({ step, data, onChange, nextStep, prevStep, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      {step === 1 && (
        <div id="step1">
          <div>
            <label>First Name:</label>
            <input
              id="first_name"
              value={data.first_name}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              id="last_name"
              value={data.last_name}
              onChange={onChange}
              required
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div id="step2">
          <div>
            <label>Car Model:</label>
            <input id="model" value={data.model} onChange={onChange} required />
          </div>
          <div>
            <label>Car Price:</label>
            <input
              id="car_price"
              type="number"
              value={data.car_price}
              onChange={onChange}
              required
            />
          </div>
        </div>
      )}

      {step === 3 && (
        <div id="step3">
          <div>
            <label>Card Info:</label>
            <input
              id="card_info"
              value={data.card_info}
              onChange={onChange}
              required
            />
            <span>
              {data.card_info && data.card_info.length !== 12
                ? "Credit card number must be exactly 12 digits long."
                : null}
            </span>
          </div>
          <div>
            <label>Expiry Date:</label>
            <input
              id="expiry_date"
              type="text"
              placeholder="MM/YY"
              value={data.expiry_date}
              onChange={onChange}
            />
            <span>
              {data.expiry_date && !/^\d{2}\/\d{2}$/.test(data.expiry_date)
                ? "Expiration date must be in the format MM/YY."
                : null}
            </span>
          </div>
        </div>
      )}

      <div>
        {step > 1 && (
          <button type="button" onClick={prevStep}>
            Previous
          </button>
        )}
        {step < 3 && (
          <button type="button" onClick={nextStep}>
            Next
          </button>
        )}
        {step === 3 && <button type="submit">Submit</button>}
      </div>
    </form>
  );
};

export default Step;
