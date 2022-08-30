import { useSelector } from "react-redux";
import Card from "../../../UI/Card";
import UserProfileEditor from "./UserProfileEditor";
import UserProfileView from "./UserProfileView";

const UserProfile = () => {
	const showUserProfileEditor = useSelector(
		(state) => state.students.showUserProfileEditor
	);

	return (
		<div>
			<Card classNames={"card"}>
				{showUserProfileEditor === false ? (
					<UserProfileView />
				) : (
					<UserProfileEditor />
				)}
			</Card>
		</div>
	);
};

export default UserProfile;
