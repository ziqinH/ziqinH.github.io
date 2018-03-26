import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainHeader from "./pages/layout/header";
// import MainFooter from "./pages/layout/footer";

const IndexRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={MainHeader} />
      {/* <Route exact path="/" component={MainFooter} /> */}
    </div>
  </Router>
);

export default IndexRouter;
