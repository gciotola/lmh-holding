import React from "react";
import styled from "styled-components";
import ImageLogo from "static/last-minute-holidays-logo.png";
import LogoBg from "static/last-minute-holidays-bg-mobile.jpg";
import { breakpoints } from "theme/breakpoints";

const LogoWrapper = styled.div`
  width: 265px;

  @media (max-width: ${breakpoints.mdMax}) {
    width: 100%;
    padding: 65px 60px;
    background-image: url(${LogoBg});
    background-position: center;
    background-size: cover;
  }
`;

const LogoImg = styled.img`
  display: inline-block;
  max-width: 100%;
  height: auto;
  @media (max-width: ${breakpoints.mdMax}) {
    width: 345px;
  }
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImg src={ImageLogo} alt="Last Minute Holidays logo" />
    </LogoWrapper>
  );
};

export default Logo;
