import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../../store/slices/counter-slice/counter-slice";

const Counter1 = () => {
	const counter1 = useSelector((state) => state.counter.counter1);
	const currentCounter = useSelector((state) => state.counter.currentCounter);
	const dispatch = useDispatch();

	const clickHandler = () => {
		dispatch(counterAction.changeCurrentCounter(1));
	};

	const divStyle = currentCounter === 1 ? { color: "blue" } : {};

	return (
		<div style={divStyle} onClick={clickHandler}>
			Counter-1 : {counter1}
		</div>
	);
};

export default Counter1;
