export const isObjectEmpty = (obj) => {
	for (var i in obj) return false;
	return true;
};

export const DATE_CONVERTOR = (dob, type) => {
	if (type === "DMY-YMD") {
		const [date, month, year] = dob.split("-");
		return [year, month, date].join("-");
	} else if (type === "YMD-DMY") {
		const [year, month, date] = dob.split("-");
		return [date, month, year].join("-");
	}
	return dob;
};

export const GENDER_CONVERTOR = (gender, type) => {
	if (type === "SHORT-LONG") {
		if (gender === "M") return "Male";
		else if (gender === "F") return "Female";
	} else if (type === "LONG-SHORT") {
		if (gender === "Male") return "M";
		else if (gender === "Female") return "F";
	}
	return gender;
};
