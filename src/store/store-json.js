/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-global-assign */
// eslint-disable-next-line no-unused-vars
// const UserType = { name };

// Class Format
// class UserType {
// 	constructor(id, name, dob, age, gender) {
// 		this.name = name;
// 		this.age = age;
// 		this.dob = dob;
// 		this.gender = gender;
// 	}
// }

/*
	This file is used for the reference of store-redux datatypes.
*/

const UserType = {
	id: Number,
	name: String,
	dob: String,
	age: Number,
	gender: String,
};

const HttpError = {
	isError: (Boolean = false),
	errorMessage: (String = ""),
};

const storeJson = () => {
	return {
		auth: {
			isAuth: (Boolean = false),
			name: (String = ""),
			password: (String = ""),
			currentUserName: (String = ""),
			token: (String = ""),
			error: HttpError,
		},
		counter: {
			showCounter: (Boolean = false),
			counter1: (Number = 0),
			counter2: (Number = 0),
			counter3: (Number = 0),
			currentCounter: (Number = 1),
			counterValue: (Number = 1),
		},
		students: {
			showStudents: (Boolean = false),

			showStudentsList: (Boolean = false),
			studentsList: (Array = []),

			showUserProfile: (Boolean = false),
			currentUser: UserType,
			showUserProfileEditor: (Boolean = false),

			error: HttpError,
		},
	};
};
