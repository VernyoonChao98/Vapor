import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTheNumberFromHere } from "../store/slices/testSlice.js";

function libraryPage() {
  const user = false;
  const dispatch = useDispatch();
  const payload = {};

  if (!user) {
    // return <Navigate to="/"></Navigate>;
  }

  return (
    <div>
      <div>Home Search Bar</div>
      <div>Game List</div>
      <div>Game Status
        <div>Store Page</div>
        <div>Community Hub</div>
        <div></div>
      </div>
    </div>
  );
}

export default libraryPage;
