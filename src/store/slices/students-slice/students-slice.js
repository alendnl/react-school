import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STUDENTS = {
	showStudents: false,

	showStudentsList: false,
	studentsList: [],

	showUserProfile: false,
	currentUser: {},
	showUserProfileEditor: false,

	error: {
		isError: false,
		errorMessage: "",
	},
};

const studentsSlice = createSlice({
	name: "students",
	initialState: INITIAL_STUDENTS,
	reducers: {
		setShowStudents(state, action) {
			state.showStudents = action.payload;
		},

		setShowStudentsList(state, action) {
			state.showStudentsList = action.payload;
		},
		setStudentsList(state, action) {
			state.studentsList = action.payload;
		},

		setShowUserProfile(state, action) {
			state.showUserProfile = action.payload;
		},
		setCurrentUser(state, action) {
			state.currentUser = action.payload;
		},
		setShowUserProfileEditor(state, action) {
			state.showUserProfileEditor = action.payload;
		},

		setError(state, action) {
			state.error = {
				isError: action.payload.isError,
				errorMessage: action.payload.errorMessage,
			};
		},
		resetStudentsSlice(state, action) {
			state.showStudents = false;
			state.showStudentsList = false;
			state.showUserProfile = false;
			state.showUserProfileEditor = false;
			state.studentsList = [];
			state.currentUser = {};
			state.error = { isError: false, errorMessage: "" };
		},
	},
});

export const studentsAction = studentsSlice.actions;
export const studentsReducer = studentsSlice.reducer;
