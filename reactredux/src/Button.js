const Button = ({nameButton, className, handleClick}) => {
	return (
		<>
			<button className={ 'block__button ' + className } onClick={handleClick}>{nameButton}</button>
		</>
	)
};

export default Button;
