import React from "react";

const Form = ({ children, autocomplete = "off", onsubmit }) => {
	return (
		<form onSubmit={onsubmit} autoComplete={autocomplete}>
			{children}
		</form>
	);
};

export default Form;
