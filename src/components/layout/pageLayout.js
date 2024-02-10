import React from "react";

import { NavBar } from "../navigation/navBar";
import { Footer } from "../navigation/footer";
import { Row } from "antd";

export const PageLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="main">
        <Row style={{ maxWidth: "800px", margin: "8px", widows: "100%" }}>
          {children}
        </Row>
      </div>
      <Footer />
    </div>
  );
};
