import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Login from "./components/auth/Login";
import Counter from "./components/counter/Counter";
import Students from "./components/students/Students";

const App = () => {
	const isAuth = useSelector((state) => state.auth.isAuth);
	const showCounter = useSelector((state) => state.counter.showCounter);
	const showStudents = useSelector((state) => state.students.showStudents);

	// UI
	const loginComponent = !isAuth && <Login />;
	const counterComponent = showCounter && <Counter />;
	const studentsComponent = showStudents && <Students />;

	return (
		<Fragment>
			{loginComponent}
			{counterComponent}
			{studentsComponent}
		</Fragment>
	);
};

export default App;
