import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "theme/Theme";

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid ${theme.colors.gray};
  border-radius: ${theme.borderRadius};
  color: ${theme.colors.dark};
  height: 67px;
  padding: 0.2rem 1rem;
  font-size: 20px;
  &:focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: ${theme.colors.gray};
  }
  ::-moz-placeholder {
    color: ${theme.colors.gray};
  }
  :-ms-input-placeholder {
    color: ${theme.colors.gray};
  }
  :-moz-placeholder {
    color: ${theme.colors.gray};
  }
`;

const Input = props => {
  const {
    type,
    value,
    onChange,
    required,
    placeholder,
    onBlur,
    name,
    onFocus
  } = props;
  return (
    <StyledInput
      type={type}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      value={value}
      name={name}
      placeholder={placeholder}
      required={required}
    />
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "password", "number"]),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  type: "text"
};

export default Input;
