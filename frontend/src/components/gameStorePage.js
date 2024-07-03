import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTheNumberFromHere } from "../store/slices/testSlice.js";

function gameStorePage() {
  const user = false;
  const dispatch = useDispatch();
  const payload = {};

  if (!user) {
    // return <Navigate to="/"></Navigate>;
  }

  return (
    <div>
      <div>stream</div>
      <div>curasel</div>
      <div>picture</div>
      <div>bio</div>
      <div>reviews</div>
    </div>
  );
}

export default gameStorePage;
