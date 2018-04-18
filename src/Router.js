import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainHeader from "./pages/Layout";
import ImageGridList from "./pages/Layout/ImageGridList";
import FullScreen from "./pages/Layout/FullScreen";

const IndexRouter = () => (
  <Router>
    <div>
      <Route path="/" component={MainHeader} />
      <Route exact path="/" component={FullScreen} />
      <Route exact path="/open-collective" component={ImageGridList} />
    </div>
  </Router>
);

export default IndexRouter;
