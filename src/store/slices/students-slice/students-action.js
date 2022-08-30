import useHttp from "../../../hooks/use-http";
import { studentsAction } from "./students-slice";
import {
	DATE_CONVERTOR,
	GENDER_CONVERTOR,
	isObjectEmpty,
} from "../../../constants/Constants";

export const getAllStudentsRequestAction = () => {
	return (dispatch) => {
		const { sendRequest } = useHttp();

		const requestConfig = {
			url: "http://localhost:8081/student/allStudents",
			method: "GET",
		};
		const applyData = (data) => {
			let studentsList = [];
			if (data.length !== 0) {
				data.map((student) =>
					studentsList.push({
						id: student.studentId,
						name: student.studentName,
						dob: student.studentDoB,
						age: student.studentAge,
						gender: student.studentGender,
					})
				);
			}
			dispatch(studentsAction.setStudentsList(studentsList));
		};
		const applyError = (error) => {
			dispatch(
				studentsAction.setError({
					isError: true,
					errorMessage: error.message,
				})
			);
		};

		dispatch(studentsAction.setStudentsList([]));
		dispatch(
			studentsAction.setError({
				isError: false,
				errorMessage: "",
			})
		);
		sendRequest(requestConfig, applyData, applyError);
	};
};

export const getCurrentUserRequestAction = (currentUserName) => {
	return (dispatch) => {
		const { sendRequest } = useHttp();

		const requestConfig = {
			url: `http://localhost:8081/student/byName/${currentUserName}`,
			method: "GET",
		};
		const applyData = (data) => {
			let currentUser = {};
			if (!isObjectEmpty(data[0])) {
				currentUser = {
					id: data[0].studentId,
					name: data[0].studentName,
					dob: DATE_CONVERTOR(data[0].studentDoB, "DMY-YMD"),
					age: data[0].studentAge,
					gender: GENDER_CONVERTOR(
						data[0].studentGender,
						"SHORT-LONG"
					),
				};
			}
			dispatch(studentsAction.setCurrentUser(currentUser));
		};
		const applyError = (error) => {
			console.log("error");
		};

		dispatch(studentsAction.setCurrentUser({}));
		sendRequest(requestConfig, applyData, applyError);
	};
};

export const saveCurrentUserRequestAction = (user) => {
	return (dispatch) => {
		const { sendRequest } = useHttp();

		const requestConfig = {
			url: "http://localhost:8081/student/update",
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				studentId: user.id,
				studentName: user.name,
				studentDoB: DATE_CONVERTOR(user.dob, "YMD-DMY"),
				studentGender: GENDER_CONVERTOR(user.gender, "LONG-SHORT"),
			}),
		};
		const applyData = (data) => {
			dispatch(studentsAction.setShowUserProfileEditor(false));
		};
		const applyError = (error) => {
			if (
				error.message ===
				`Unexpected token 'S', "Student Updated." is not valid JSON`
			) {
				dispatch(studentsAction.setShowUserProfileEditor(false));
			} else {
				console.log(error);
			}
		};

		sendRequest(requestConfig, applyData, applyError);
	};
};
