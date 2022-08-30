import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../../store/slices/auth-slice/auth-slice";
import { loginRequestAction } from "../../store/slices/auth-slice/auth-action";
import classes from "./Login.module.css";
import Card from "../../UI/Card";

const Login = () => {
	const name = useSelector((state) => state.auth.name);
	const password = useSelector((state) => state.auth.password);
	const loginError = useSelector((state) => state.auth.error);
	const dispatch = useDispatch();

	const nameChangehandler = (event) => {
		dispatch(authAction.changeName(event.target.value));
	};

	const passwordChangehandler = (event) => {
		dispatch(authAction.changePassword(event.target.value));
	};

	const submitHandler = (event) => {
		event.preventDefault();
		dispatch(loginRequestAction({ name, password }));
	};

	return (
		<Card classNames={"card"}>
			<form onSubmit={submitHandler}>
				<div className={classes.input}>
					<label htmlFor='name'>User Name:</label>
					<input
						id='name'
						type='text'
						placeholder='Enter UserName'
						value={name}
						onChange={nameChangehandler}
					/>
				</div>
				<div className={classes.input}>
					<label htmlFor='password'>Password:</label>
					<div>
						<input
							id='password'
							type='password'
							placeholder='Enter Password'
							value={password}
							onChange={passwordChangehandler}
						/>
					</div>
				</div>
				{loginError.isError && (
					<p className={classes.error}>{loginError.errorMessage}</p>
				)}
				<button>Login</button>
			</form>
		</Card>
	);
};

export default Login;
