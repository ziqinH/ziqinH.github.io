import * as React from "react";
import * as ReactDOM from "react-dom";
import IndexRouter from "./Router";
import Provider from "./providers";

ReactDOM.render(
  <Provider>
    <IndexRouter />
  </Provider>,
  document.getElementById("root")
);
