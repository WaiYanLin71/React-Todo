import React, { Fragment, useContext } from "react";
import { createPortal } from "react-dom";
import Context from "../../store/Context";
import Card from "../uility/Card";

const Modal = ({ id,modal }) => {
	const { todos } = useContext(Context);
	return (
		<div className='back-drop'>
			<form className='delete-many-modal'>
				<Card>
					<div className='bg-white'>Are you want to delete all?</div>
					<ul className="my-2">
						{todos
							.filter((todo) => id.includes(todo.id))
							.map((todo) => {
								return (
									<Fragment key={todo.id}>
										<li>{todo.name}</li>
									</Fragment>
								);
							})}
					</ul>
					<div className='justify-content-end mt-3 float-end'>
						<button className='btn btn-secondary me-2' type="button" onClick={()=>{
							modal(false)
						}}>
							Cancel
						</button>
						<button className='btn btn-danger'>Yes</button>
					</div>
				</Card>
			</form>
		</div>
	);
};

const DeleteManyModal = ({ id,modal }) => {
	return createPortal(<Modal id={id} modal={modal} />, document.getElementById("modal"));
};

export default DeleteManyModal;
