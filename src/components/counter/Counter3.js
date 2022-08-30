import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../../store/slices/counter-slice/counter-slice";

const Counter3 = () => {
	const counter3 = useSelector((state) => state.counter.counter3);
	const currentCounter = useSelector((state) => state.counter.currentCounter);
	const dispatch = useDispatch();

	const clickHandler = () => {
		dispatch(counterAction.changeCurrentCounter(3));
	};

	const divStyle = currentCounter === 3 ? { color: "blue" } : {};

	return (
		<div style={divStyle} onClick={clickHandler}>
			Counter-3 : {counter3}
		</div>
	);
};
export default Counter3;
