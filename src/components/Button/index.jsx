import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "theme/Theme";
import { darken } from "polished";

const StyledButton = styled.button`
  display: flex;
  width: ${({ block }) => (block ? "100%" : "auto")};
  min-height: 67px;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.dark};
  background-color: ${theme.colors.primary};
  border-radius: ${theme.borderRadius};
  border: 1px solid ${theme.colors.primary};
  padding: 0.2rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &.disabled {
    pointer-events: none;
    touch-action: none;
  }

  &:hover,
  &:active,
  &:focus {
    outline: none;
    background-color: ${darken(0.2, theme.colors.primary)};
  }
`;

const Card = props => {
  const { children, onClick, block, disabled, type } = props;
  return (
    <StyledButton
      onClick={disabled ? null : onClick}
      block={block}
      className={disabled ? "disabled" : ""}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  type: PropTypes.string
};

Card.defaultProps = {
  block: false,
  disabled: false
};

export default Card;
