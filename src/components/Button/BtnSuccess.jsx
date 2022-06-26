import React from "react";
import helper from "../../helper/helper";

const { isArray } = helper;

const BtnSuccess = ({ cls = [], children, type = "button" }) => {
	return (
		<button
			className={["btn btn-success", ...isArray(cls)].join(" ")}
			type={type}
		>
			{children}
		</button>
	);
};

export default BtnSuccess;
