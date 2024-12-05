import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTheNumberFromHere } from "../store/slices/testSlice.js";

function Library() {
  const user = false;
  const dispatch = useDispatch();
  const payload = {};

  if (!user) {
    // return <Navigate to="/"></Navigate>;
  }

  return (
    <div>
      <div>Home</div>
      <div>List of Games</div>
      <div>Uncategorized</div>
      <div>Categorized</div>
      <div>Game info</div>
      <div>Play Time</div>
      <div>Last Played</div>
    </div>
  );
}

export default Library;
