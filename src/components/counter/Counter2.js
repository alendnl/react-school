import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../../store/slices/counter-slice/counter-slice";

const Counter2 = () => {
	const counter2 = useSelector((state) => state.counter.counter2);
	const currentCounter = useSelector((state) => state.counter.currentCounter);
	const dispatch = useDispatch();

	const clickHandler = () => {
		dispatch(counterAction.changeCurrentCounter(2));
	};

	const divStyle = currentCounter === 2 ? { color: "blue" } : {};

	return (
		<div style={divStyle} onClick={clickHandler}>
			Counter-2 : {counter2}
		</div>
	);
};

export default Counter2;
