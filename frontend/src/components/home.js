import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const user = false;

  if (!user) {
    // return <Navigate to="/"></Navigate>;
  }

  return (
    <div>
      <button
        onClick={() => {
          console.log();
        }}
      >
        Click for home
      </button>
      Home PAGEEEEEEEEEEE BABY
    </div>
  );
}

export default Home;
