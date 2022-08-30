import classes from "./UserProfileEditor.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useReducer } from "react";
import { saveCurrentUserRequestAction } from "../../../store/slices/students-slice/students-action";
import { studentsAction } from "../../../store/slices/students-slice/students-slice";

const userReducer = (state, action) => {
	switch (action.type) {
		case "NAME":
			return { ...state, name: action.value };
		case "DOB":
			return { ...state, dob: action.value };
		case "AGE":
			return { ...state, age: action.value };
		case "GENDER":
			return { ...state, gender: action.value };
		case "RESET":
			return action.value;
		default:
			return state;
	}
};

const UserProfileEditor = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector((state) => state.students.currentUser);
	const [user, userDispatch] = useReducer(userReducer, currentUser);

	const nameChangeHandler = (event) => {
		userDispatch({ type: "NAME", value: event.target.value });
	};
	const dobChangeHandler = (event) => {
		userDispatch({ type: "DOB", value: event.target.value });
	};
	const ageChangeHandler = (event) => {
		let value = event.target.value;
		if (value.length > 2) value = value.slice(0, 2);
		userDispatch({ type: "AGE", value: value });
	};
	const genderChangeHandler = (event) => {
		userDispatch({ type: "GENDER", value: event.target.value });
	};

	const saveHandler = () => {
		dispatch(saveCurrentUserRequestAction(user));
	};
	const resetHandler = () => {
		userDispatch({ type: "RESET", value: currentUser });
	};
	const cancelHandler = () => {
		dispatch(studentsAction.setShowUserProfileEditor(false));
	};

	return (
		<div className={`${classes.editor} ${classes.spacing}`}>
			<div>
				<label htmlFor='name'>Name</label>
				<input
					id='name'
					type='text'
					placeholder='Enter UserName'
					onChange={nameChangeHandler}
					value={user.name}
				/>
			</div>
			<div>
				<label htmlFor='dob'>DoB</label>
				<input
					id='dob'
					type='date'
					min='1920-01-01'
					max='2020-01-01'
					placeholder='Enter DoB'
					onChange={dobChangeHandler}
					value={user.dob}
				/>
			</div>
			<div>
				<label htmlFor='age'>Age</label>
				<input
					id='age'
					type='number'
					max='99'
					maxLength='2'
					placeholder='Enter Age'
					onChange={ageChangeHandler}
					value={user.age}
				/>
			</div>
			<div>
				<label htmlFor='gender'>Gender</label>
				<select
					name='gender'
					onChange={genderChangeHandler}
					value={user.gender}
				>
					<option value='Male'>Male</option>
					<option value='Female'>Female</option>
				</select>
			</div>
			<div className={`${classes.spacing}`}>
				<button onClick={saveHandler}>Save</button>
				<button onClick={resetHandler}>Reset</button>
				<button onClick={cancelHandler}>Cancel</button>
			</div>
		</div>
	);
};

export default UserProfileEditor;
