const Text = ({
	className,
	color,
	size = 16,
	style,
	children
}) => {
	const textStyle = {
		color: color || 'black',
		fontSize: `${size}px` || '16px',
		...style,
	};

  	return <p className={className} style={textStyle}>{children}</p>;
}

export default Text;
