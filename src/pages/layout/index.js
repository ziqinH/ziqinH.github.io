import * as React from "react";
import MainHeader from "./header";
import MainFooter from "./footer";

const Layout = props => (
  <main>
    <MainHeader {...props} />
    {props.children}
    <MainFooter {...props} />
  </main>
);

export default Layout;
