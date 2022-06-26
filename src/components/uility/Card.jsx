import React from "react";

const Card = ({ children, card, cardBody }) => {
	return (
		<div className={`card ${card}`}>
			<div className={`card-body ${cardBody}`}>{children}</div>
		</div>
	);
};

export default Card;
