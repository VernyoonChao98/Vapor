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
      <div>Years of Service</div>
      <button>Edit Profile</button>
      <div>Steam Replay 2024</div>
      <div>Recent Activity</div>
      <div>View All Recently Played Wishlist</div>
      <div>Comments</div>
    </div>
  );
}

export default Profile;
