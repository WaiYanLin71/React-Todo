import React from "react";
import helper from "../../helper/helper";

const { isArray } = helper;

const Card = ({
	children,
	card = [],
	body = [],
	header = [],
	cardFooter,
	cardHeader,
}) => {
	return (
		<div className={["card", isArray(card)].join(" ")}>
			{cardHeader && (
				<div
					className={["card-header", isArray(header)].join(" ")}
				>
					{cardHeader}
				</div>
			)}
			<div className={["card-body", ...isArray(body)].join(" ")}>
				{children}
			</div>
			{cardFooter && <div className='cart-footer'>{cardFooter}</div>}
		</div>
	);
};

export default Card;
