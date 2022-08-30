import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isObjectEmpty } from "../../../constants/Constants";
import { getCurrentUserRequestAction } from "../../../store/slices/students-slice/students-action";
import { studentsAction } from "../../../store/slices/students-slice/students-slice";

const UserProfileView = (props) => {
	const dispatch = useDispatch();
	const currentUser = useSelector((state) => state.students.currentUser);
	const currentUserName = useSelector((state) => state.auth.currentUserName);

	useEffect(() => {
		dispatch(getCurrentUserRequestAction(currentUserName));
	}, [currentUserName, dispatch]);

	const editHandler = () => {
		dispatch(studentsAction.setShowUserProfileEditor(true));
	};

	const UI = !isObjectEmpty(currentUser) && (
		<div>
			<div>{`Id: ${currentUser.id}`}</div>
			<div>{`Name: ${currentUser.name}`} </div>
			<div>{`DoB: ${currentUser.dob}`}</div>
			<div>{`Age: ${currentUser.age}`}</div>
			<div>{`Gender: ${currentUser.gender}`}</div>
			<button onClick={editHandler}>Edit</button>
		</div>
	);
	return <div>{UI}</div>;
};

export default UserProfileView;
