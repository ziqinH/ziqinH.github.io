import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainHeader from "./pages";
import CssBaseline from "material-ui/CssBaseline";
const IndexRouter = () => (
  <Router>
    <div>
      <CssBaseline />
      <Route exact path="/" component={MainHeader} />
      {/* <Route exact path="/" component={MainFooter} /> */}
    </div>
  </Router>
);

export default IndexRouter;
