import { createGlobalStyle } from "styled-components";
import { theme } from "theme/Theme";

// SIMPLE CSS RESET
export const GlobalCss = createGlobalStyle`
  html,
  body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    color: ${theme.colors.black};
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol,
  ul {
    padding-left: 1rem;
  }

  input,
  textarea,
  select,
  button {
   font-family: 'Roboto', sans-serif;
  }

  a {
    color: ${theme.colors.primary};
  }

  textarea,
  input[type='text'],
  input[type='email'],
  input[type='number'],
  input[type='password'],
  input[type='button'],
  input[type='submit'] {
    -webkit-appearance: none;
  }

  input::-ms-clear,
  input::-ms-reveal {
    display: none;
  }
`;
