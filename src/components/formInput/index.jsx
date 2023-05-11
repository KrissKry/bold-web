import './index.css'

/**
 * @param type Type of input (ref. MDN Web Docs). DEFAULT="text"
 * @param required Boolean if input is required. DEFAULT=false
 * @param disabled Boolean if input should be disabled. DEFAULT=false
 * @param className String for additional css classes. DEFAULT=""
 * @param full If the input should have full width by design or half. DEFAULT=false 
 * @param onKeyDown Function to react to input change (for example for text formatting of phone number)
 * @param maxLength Maximum allowed length of the input
 * @returns FormInput component
 */
const FormInput = ({
	type = "text",
	name,
	value,
	onChange = () => {},
	placeholder = "",
	required = false,
	disabled = false,
	full = false,
	className = "",
	pattern,
	onKeyDown = () => {},
	maxLength,
}) => {

	const formStyle = full === true 
		? 'formInput formInput-full' 
		: 'formInput formInput-half' + ` ${className}`;

	return (
		<input
		className={formStyle}
		type={type}
		id={name}
		name={name}
		value={value}
		onChange={onChange}
		placeholder={placeholder}
		required={required}
		disabled={disabled}
		onKeyDown={onKeyDown}
		pattern={pattern}
		maxLength={maxLength}
		/>
	);
};

export default FormInput;
