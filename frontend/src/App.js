import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  getTheNumberFromHere,
} from "./store/slices/testSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const payload = { hello: "hello" };

  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={async () => {
          const response = await dispatch(getTheNumberFromHere(payload));
          console.log("clicked");
          console.log(response);
        }}
      >
        Increment
      </button>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment(payload))}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
