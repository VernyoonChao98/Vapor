import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTheNumberFromHere } from "../store/slices/testSlice.js";

function Store() {
  const user = false;
  const dispatch = useDispatch();
  const payload = {};

  if (!user) {
    // return <Navigate to="/"></Navigate>;
  }

  return (
    <div>
      <div>Top Box</div>
      <div>Background picture</div>
      <div>Featured & Recommendations</div>
      <div>Special Offers</div>
      <div>Browse By Category</div>
      <div>AD</div>
      <div>Recommended Based On Games You Play</div>
    </div>
  );
}

export default Store;
