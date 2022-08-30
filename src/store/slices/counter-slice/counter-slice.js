import { createSlice } from "@reduxjs/toolkit";

const INITIAL_COUNTER = {
	showCounter: false,
	counter1: 0,
	counter2: 0,
	counter3: 0,
	currentCounter: 1,
	counterValue: 1,
};

const counterSlice = createSlice({
	name: "counter",
	initialState: INITIAL_COUNTER,
	reducers: {
		showCounter(state, action) {
			state.showCounter = action.payload;
		},
		incrementCounter1(state) {
			state.counter1 = state.counter1 + state.counterValue;
		},
		incrementCounter2(state) {
			state.counter2 = state.counter2 + state.counterValue;
		},
		incrementCounter3(state) {
			state.counter3 = state.counter3 + state.counterValue;
		},
		changeCurrentCounter(state, action) {
			state.currentCounter = action.payload;
		},
		changeCounterValue(state, action) {
			state.counterValue = action.payload;
		},
	},
});

export const counterAction = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
