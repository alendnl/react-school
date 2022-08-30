import { useSelector } from "react-redux";
import StudentList from "./student-list/StudentList";
import UserProfile from "./user-profile/UserProfile";

const StudentsBody = () => {
	const showStudentsList = useSelector(
		(state) => state.students.showStudentsList
	);

	const showUserProfile = useSelector(
		(state) => state.students.showUserProfile
	);

	return (
		<div>
			{showStudentsList && <StudentList />}
			{showUserProfile && <UserProfile />}
		</div>
	);
};

export default StudentsBody;
