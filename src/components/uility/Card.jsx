import React from "react";
import helper from "../../helper/helper";

const { isArray } = helper;

const Card = ({ children, card = [], body = [] }) => {
	return (
		<div className={["card", isArray(card)].join(" ")}>
			<div className={["card-body", ...isArray(body)].join(" ")}>
				{children}
			</div>
		</div>
	);
};

export default Card;
