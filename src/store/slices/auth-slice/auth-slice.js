import { createSlice } from "@reduxjs/toolkit";

const INITIAL_AUTH = {
	isAuth: false,
	name: "",
	password: "",
	currentUserName: "",
	token: "",
	error: {
		isError: false,
		errorMessage: "",
	},
};

const authSlice = createSlice({
	name: "auth",
	initialState: INITIAL_AUTH,
	reducers: {
		changeName(state, action) {
			state.name = action.payload;
		},
		changePassword(state, action) {
			state.password = action.payload;
		},
		setCurrentUserName(state, action) {
			state.currentUserName = action.payload;
		},
		login(state) {
			state.isAuth = true;
		},
		logout(state) {
			state.isAuth = false;
		},
		error(state, action) {
			state.error = {
				isError: action.payload.isError,
				errorMessage: action.payload.errorMessage,
			};
			// state.error = action.payload;
		},
		resetLoginCredentials(state, action) {
			state.name = "";
			state.password = "";
		},
		resetLoginError(state, action) {
			state.error = {
				isError: false,
				errorMessage: "",
			};
		},
	},
});

export const authAction = authSlice.actions;
export const authReducer = authSlice.reducer;
