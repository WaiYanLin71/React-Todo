import React from "react";

import helper from "../../helper/helper";

const { isArray } = helper;

const FloatingInput = ({
	type = "text",
	label,
	error,
	placeholder = "",
	onchange,
	cls,
}) => {
	return (
		<>
			<div className="form-floating">
				<input
					className={["form-control", ...isArray(cls)].join(" ")}
					type={type}
					id="floatingInput"
					placeholder={placeholder}
					onChange={onchange}
				/>
				<label htmlFor="floatingInput">{label}</label>
			</div>
			{error && <span className="text-danger mt-1 d-block">{error}</span>}
		</>
	);
};

export default FloatingInput;
