import PropTypes from "prop-types";
import styled from "styled-components";

const Spacer = styled.div`
  margin-bottom: ${({ size }) => size + "rem"};
`;

Spacer.propTypes = {
  children: PropTypes.node,
  size: PropTypes.number
};

Spacer.defaultProps = {
  size: 1
};

export default Spacer;
