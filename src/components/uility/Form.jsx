import React from "react";

const Form = ({ children, autocomplete = "off", onsubmit }) => {
	return (
		<form onSubmit={onsubmit} autocomplete={autocomplete}>
			{children}
		</form>
	);
};

export default Form;
