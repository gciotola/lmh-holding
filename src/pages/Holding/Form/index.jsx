import React from "react";
import styled from "styled-components";
import Label from "components/Label";
import Input from "components/Input";
import Button from "components/Button";
import Spacer from "components/Spacer";
import { breakpoints } from "theme/breakpoints";

const StyledForm = styled.form`
  width: 100%;
  animation: appearIn 0.4s linear 0.5s forwards;
  opacity: 0;
  transform: translate(0, -100%);
  button {
    margin-left: auto;
  }

  @media (max-width: ${breakpoints.mdMax}) {
    padding: 0 2rem 2rem;
  }

  @keyframes appearIn {
    from {
      opacity: 0;
      transform: translate(0, 100%);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
`;

const Form = () => {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <StyledForm
      action="https://last-minute-holidays.us3.list-manage.com/subscribe/post?u=486ce4727dd1d472dc5e99fd5&amp;id=725048244e"
      method="post"
    >
      <Spacer size={1}>
        <Label htmlFor="email">JOIN THE WAITING LIST</Label>
        <Input
          id="email"
          type="email"
          name="EMAIL"
          required
          placeholder="Enter your email…"
          value={inputValue}
          onChange={e => {
            setInputValue(e.currentTarget.value);
          }}
        />
        {/* <div
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_486ce4727dd1d472dc5e99fd5_725048244e"
            tabIndex="-1"
            value=""
          />
        </div> */}
      </Spacer>

      <Spacer size={0}>
        <Button type="submit">Join the revolution</Button>
      </Spacer>
    </StyledForm>
  );
};

export default Form;
