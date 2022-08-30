import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth-slice/auth-slice";
import { counterReducer } from "./slices/counter-slice/counter-slice";
import { studentsReducer } from "./slices/students-slice/students-slice";

const storeRedux = configureStore({
	reducer: {
		counter: counterReducer,
		auth: authReducer,
		students: studentsReducer,
	},
});

export default storeRedux;
