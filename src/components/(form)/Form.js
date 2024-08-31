import React from "react";
import "./Form.css";

const Form = ({ inputs, buttonTitle }) => {
  return (
    <div className="form-container">
      <form className="form">
        {inputs.length > 0 &&
          inputs.map((input, index) => (
            <div key={index} className="input-container">
              <label htmlFor={input.name}>
                <span>{input.title}</span>
              </label>
              {input.type === "select" ? (
                <div className="input-container">
                  <select id={input.name} name={input.name} required>
                    <option value="" disabled selected hidden></option>
                    {input.options.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <label for="year" class="select-placeholder">
                    Year
                  </label>
                </div>
              ) : (
                <>
                  <input
                    type={input.type}
                    id={input.name}
                    name={input.name}
                    placeholder={input.title}
                    required
                  />
                </>
              )}
            </div>
          ))}

        <button id="calculate">{buttonTitle}</button>
      </form>
    </div>
  );
};

export default Form;
