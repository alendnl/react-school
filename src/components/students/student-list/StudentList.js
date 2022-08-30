import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudentsRequestAction } from "../../../store/slices/students-slice/students-action";
import StudentItem from "./StudentItem";

const StudentList = () => {
	const dispatch = useDispatch();
	const studentsList = useSelector((state) => state.students.studentsList);

	useEffect(() => {
		dispatch(getAllStudentsRequestAction());
	}, [dispatch]);

	return (
		<ul style={{ listStyleType: "none" }}>
			{studentsList.map((student) => {
				return <StudentItem student={student} key={student.id} />;
			})}
		</ul>
	);
};

export default StudentList;
