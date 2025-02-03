import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTheNumberFromHere } from "../store/slices/testSlice.js";

function Profile() {
  const user = false;
  const dispatch = useDispatch();
  const payload = {};

  if (!user) {
    // return <Navigate to="/"></Navigate>;
  }

  return (
    <div>
      <div>Profile Name</div>
      <div>Level Number</div>
    </div>
  );
}

export default Profile;
