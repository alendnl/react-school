import useHttp from "../../../hooks/use-http";
import { authAction } from "../auth-slice/auth-slice";
import { counterAction } from "../counter-slice/counter-slice";
import { studentsAction } from "../students-slice/students-slice";

export const loginRequestAction = (user) => {
	return (dispatch) => {
		const { sendRequest } = useHttp();

		const requestConfig = {
			url: "http://localhost:8081/student/login",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: user.name,
				password: user.password,
			}),
		};
		const applyData = (data) => {
			if (data.value === true) {
				dispatch(authAction.setCurrentUserName(user.name));
				dispatch(authAction.resetLoginCredentials());
				dispatch(authAction.resetLoginError());
				dispatch(authAction.login(true));

				dispatch(studentsAction.setShowStudents(false));
				dispatch(counterAction.showCounter(true));
			} else {
				dispatch(
					authAction.error({
						isError: true,
						errorMessage: "Invalid UserName or Password",
					})
				);
				dispatch(authAction.resetLoginCredentials());
			}
		};
		const applyError = (error) => {
			dispatch(
				authAction.error({
					isError: true,
					errorMessage: error.message
						? error.message
						: "Something went wrong",
				})
			);
			dispatch(authAction.resetLoginCredentials());
		};

		sendRequest(requestConfig, applyData, applyError);
	};
};
