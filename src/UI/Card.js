import classes from "./Card.module.css";

const Card = (props) => {
	let classNames = `${classes[props.classNames]}`;
	
	return <div className={classNames} style={props.style}>{props.children}</div>;
};

export default Card;
