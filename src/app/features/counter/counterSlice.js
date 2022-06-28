import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByValue: (state, action) => {
        state.count += action.payload;
    }
  },
});

export default counterSlice.reducer;
export const { increment, decrement, reset, incrementByValue } = counterSlice.actions;
