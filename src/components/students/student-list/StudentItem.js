import Card from "../../../UI/Card";

const StudentItem = (props) => {
	return (
		<li>
			<Card classNames={"card"}>
				{`${props.student.id} ${props.student.name} ${props.student.dob} ${props.student.age} ${props.student.gender}`}
			</Card>
		</li>
	);
};

export default StudentItem;
