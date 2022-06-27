import React from "react";

const BackDrop = ({ children ,onClick}) => {
	return (
		<div className='back-drop' onClick={onClick}>
			{children}
		</div>
	);
};

export default BackDrop;
