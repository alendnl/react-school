import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../../store/slices/auth-slice/auth-slice";
import { counterAction } from "../../store/slices/counter-slice/counter-slice";
import { studentsAction } from "../../store/slices/students-slice/students-slice";
import Card from "../../UI/Card";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
import Counter3 from "./Counter3";

const Counter = () => {
	const currentCounter = useSelector((state) => state.counter.currentCounter);
	const counterValue = useSelector((state) => state.counter.counterValue);
	const dispatch = useDispatch();

	const inputChangeListener = (event) => {
		if (event.target.value !== "")
			dispatch(counterAction.changeCounterValue(+event.target.value));
		else dispatch(counterAction.changeCounterValue(""));
	};

	const increaseHandler = () => {
		switch (currentCounter) {
			case 1: {
				dispatch(counterAction.incrementCounter1());
				break;
			}
			case 2: {
				dispatch(counterAction.incrementCounter2());
				break;
			}
			case 3: {
				dispatch(counterAction.incrementCounter3());
				break;
			}
			default:
				return;
		}
	};

	const logoutHandler = () => {
		dispatch(counterAction.showCounter(false));
		dispatch(authAction.logout());
	};

	const studentHandler = () => {
		dispatch(counterAction.showCounter(false));
		dispatch(studentsAction.setShowStudents(true));
	};

	return (
		<div>
			<Card classNames={"card"}>
				<Counter1 />
				<Counter2 />
				<Counter3 />
				<input
					value={counterValue !== "" ? counterValue : ""}
					onClick={(event) => event.target.select()}
					onChange={inputChangeListener}
					placeholder='Counter Value'
				/>
				<button onClick={increaseHandler}>Increment</button>
				<div>
					<button onClick={logoutHandler}>Logout</button>
					<button onClick={studentHandler}>Students</button>
				</div>
			</Card>
		</div>
	);
};

export default Counter;
