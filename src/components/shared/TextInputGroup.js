import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <ul className="list-group">
        <li className="list-group-item">
          <input
            className={classnames("container-fluid", {
              "is-invalid": error
            })}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </li>
      </ul>

      {error && (
        <div className="invalid-feedback">Please enter something valid</div>
      )}
    </div>
  );
};

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  // value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  // label: PropTypes.string.isRequired,
  // onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

TextInputGroup.defaultProps = {
  type: "text"
};
export default TextInputGroup;