import React from "react";
import helper from "../../helper/helper";

const { isArray } = helper;

const FormGroup = ({ cls = [], children }) => {
	return (
		<div className={["form-group", ...isArray(cls)].join(" ")}>
			{children}
		</div>
	);
};

export default FormGroup;
