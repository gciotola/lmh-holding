import React from "react";
import styled from "styled-components";
import { theme } from "theme/Theme";
import { breakpoints } from "theme/breakpoints";
import Spacer from "components/Spacer";
import BgImage from "static/last-minute-holidays-bg.jpg";
import Logo from "./Logo";
import MainText from "./MainText";
import Form from "./Form";

const Main = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  min-height: 100vh;
`;

const Content = styled.div`
  width: 45%;
  max-width: 550px;
  background-color: ${theme.colors.white};
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-between;
  @media (max-width: ${breakpoints.mdMax}) {
    padding: 0;
    width: 100%;
    max-width: 100%;
    padding-bottom: 3rem;
    justify-content: flex-start;
  }
`;
const ImageWrapper = styled.div`
  flex: 1;
  background-position: center;
  background-size: cover;

  @media (max-width: ${breakpoints.mdMax}) {
    display: none;
  }
`;

const Holding = () => {
  return (
    <Main>
      <Content>
        <Spacer size={2}>
          <Logo />
        </Spacer>
        <Spacer size={2}>
          <MainText />
        </Spacer>
        <Form />
      </Content>
      <ImageWrapper
        style={{
          backgroundImage: `url(${BgImage})`
        }}
      />
    </Main>
  );
};

export default Holding;
