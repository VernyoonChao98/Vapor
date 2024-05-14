import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTheNumberFromHere } from "../store/slices/testSlice.js";

function Community() {
  const user = false;
  const dispatch = useDispatch();
  const payload = {};

  if (!user) {
    // return <Navigate to="/"></Navigate>;
  }

  return (
    <div>
      <div>Community Activity</div>
      <div>
        Community and official content for all games and software on Steam.
      </div>
      <div>
        Recently Played Games
        <div>List of games played recently</div>
      </div>
    </div>
  );
}

export default Community;
