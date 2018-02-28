import React from "react";
import { Col, Card } from "./../../view";
import "./styles.css";

const HouseListLoader = props => {
  return (
    <Col colNumber={4}>
      <Card>
        <div className=" house-list-loader-content-image" />
        <div className="house-list-loader-content-box">
          <div className="animated-background house-list-loader-content-detail-one" />
          <div className="animated-background house-list-loader-content-detail-two" />
          <div className="animated-background house-list-loader-content-address" />
          <div className="animated-background house-list-loader-content-extra" />
        </div>
      </Card>
    </Col>
  );
};

export { HouseListLoader };
