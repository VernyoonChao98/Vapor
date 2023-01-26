import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Example() {
  const user = false;

  if (!user) {
    return <Navigate to="/"></Navigate>;
  }

  return <div>HEHEHEHE</div>;
}

export default Example;
