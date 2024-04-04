import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTheNumberFromHere } from "../store/slices/testSlice.js";

function Home() {
  const user = false;
  const dispatch = useDispatch();
  const payload = {
    gameName: "Neighbor",
    genre: ["fantasy"],
    description: "made with love",
    developer: "me",
    publisher: "you",
    price: 15.25,
    earlyAccess: false,
  };

  if (!user) {
    // return <Navigate to="/"></Navigate>;
  }

  return (
    <div>
      <button
        onClick={() => {
          console.log("thunky");
          dispatch(getTheNumberFromHere(payload));
        }}
      >
        Click for home
      </button>
      Home PAGEEEEEEEEEEE weeee hoooo asdfsadfsdfsdffaasfdsfsafsdfsdfsd
      asdfsafdsfafdsafsa
      <button>Store</button>
      <button>Library</button>
      <button>Community</button>
    </div>
  );
}

export default Home;
