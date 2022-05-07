import React from "react";
import { Spinner } from "react-bootstrap";

const LoadSpinner = () => {
  return (
    <div
      style={{ height: "400px" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Spinner animation="border" variant="success" />
    </div>
  );
};

export default LoadSpinner;
