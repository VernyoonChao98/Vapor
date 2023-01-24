import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTheNumberFromHere = createAsyncThunk(
  "counter/getTheNewNumba",
  async (payload, thunkAPI) => {
    console.log(payload);
    console.log(thunkAPI);
    const response = await fetch("http://localhost:5000/api/testGe", {
      method: "GET",
    });
    console.log(response);
    if (response.ok) {
      console.log("hello");
      const newNumber = await response.json();
      return newNumber;
    } else {
      console.log("errored");
      return thunkAPI.rejectWithValue("Could not find the new Number");
    }
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      console.log(action.payload);
      console.log(state);
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTheNumberFromHere.pending, (state, action) => {
      console.log("grabbing");
    });
    builder.addCase(getTheNumberFromHere.fulfilled, (state, action) => {
      console.log("hello from fulfilled");
      console.log(action.payload);
      state.value = action.payload;
    });
    builder.addCase(getTheNumberFromHere.rejected, (state, action) => {
      console.log(action.payload);
      console.log("failed to get");
    });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
