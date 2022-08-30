import classes from "./StudentsHeader.module.css";
import { useDispatch } from "react-redux";
import { authAction } from "../../store/slices/auth-slice/auth-slice";
import { counterAction } from "../../store/slices/counter-slice/counter-slice";
import { studentsAction } from "../../store/slices/students-slice/students-slice";

const StudentsHeader = (props) => {
	const dispatch = useDispatch();

	const studentListHandler = () => {
		dispatch(studentsAction.setShowUserProfileEditor(false));
		dispatch(studentsAction.setShowUserProfile(false));
		dispatch(studentsAction.setShowStudentsList(true));
	};

	const userProfileHandler = () => {
		dispatch(studentsAction.setShowStudentsList(false));
		dispatch(studentsAction.setShowUserProfileEditor(false));
		dispatch(studentsAction.setShowUserProfile(true));
	};

	const counterHandler = () => {
		dispatch(studentsAction.resetStudentsSlice());
		dispatch(counterAction.showCounter(true));
	};

	const logoutHandler = () => {
		dispatch(studentsAction.resetStudentsSlice());
		dispatch(authAction.logout());
	};

	return (
		<header className={classes.header}>
			<nav>
				<ul>
					<li>
						<button onClick={studentListHandler}>
							Students List
						</button>
					</li>
					<li>
						<button onClick={userProfileHandler}>
							User Profile
						</button>
					</li>
					<li>
						<button onClick={counterHandler}>Counter</button>
					</li>
					<li>
						<button onClick={logoutHandler}>Logout</button>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default StudentsHeader;
