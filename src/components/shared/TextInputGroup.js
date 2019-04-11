import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextInputGroup = ({ name, value, placeholder, onChange, error }) => {
  return (
    <div className="form-group">
      <ul className="list-group">
        <li className="list-group-item">
          <input
            className={classnames("container-fluid", {
              "is-invalid": error
            })}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </li>
      </ul>

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default TextInputGroup;
