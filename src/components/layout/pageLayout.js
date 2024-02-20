import React from "react";

import { NavBar } from "../navigation/navBar";
import { Footer } from "../navigation/footer";
import { Row } from "antd";

export const PageLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="main">
        <Row
          style={{
            maxWidth: "750px",
            margin: "8px",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {children}
        </Row>
      </div>
      <Footer />
    </div>
  );
};
