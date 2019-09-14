import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalCss } from "./theme/GlobalCss";
import Helmet from "react-helmet";
import Favicon from "static/last-minute-holidays-favicon.png";

const MOUNT_NODE = document.getElementById("root");

if (MOUNT_NODE !== null) {
  ReactDOM.render(
    <>
      <Helmet>
        <link rel="icon" type="image/png" href={Favicon} sizes="32x32" />
        <title>Last Minute Holidays</title>
      </Helmet>
      <GlobalCss />
      <App />
    </>,
    MOUNT_NODE
  );
}
