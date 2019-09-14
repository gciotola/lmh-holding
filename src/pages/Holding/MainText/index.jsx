import React from "react";
import styled from "styled-components";
import { theme } from "theme/Theme";
import Spacer from "components/Spacer";
import { breakpoints } from "theme/breakpoints";

const StyledText = styled.div`
  font-size: 30px;
  color: ${theme.colors.dark};
  b,
  strong {
    font-weight: bold;
    color: ${theme.colors.primary};

    &:hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.dark};
    }
  }

  @media (max-width: ${breakpoints.mdMax}) {
    padding: 0 2rem;
    font-size: 26px;
  }
`;

const Strikethrough = styled.span`
  display: inline-block;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    display: block;
    top: 50%;
    left: 0;
    right: 0;
    border-top: 2px solid ${theme.colors.primary};
  }
`;

const MainText = () => {
  return (
    <StyledText>
      <Spacer size={2}>
        The <strong>best deals</strong> on the best selection of accommodation.
      </Spacer>
      <Spacer size={2}>
        For when you need a <strong>holiday</strong>{" "}
        <Strikethrough size={4}>now</Strikethrough> soon!
      </Spacer>
      <Spacer size={0}>
        Get on the waiting list and <strong>be the first to know</strong>
      </Spacer>
    </StyledText>
  );
};

export default MainText;
