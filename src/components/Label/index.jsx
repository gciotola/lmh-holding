import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "theme/Theme";

const StyledLabel = styled.label`
  display: block;
  width: 100%;
  font-size: 14px;
  color: ${theme.colors.dark};
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

const Label = props => {
  const { htmlFor, children } = props;
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default Label;
