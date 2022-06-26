import React, { useState } from "react";
import { createPortal } from "react-dom";
import Card from "../uility/Card";

const Modal = ({ modal, data, confirm }) => {
	const [name, setName] = useState(data.name);
	return (
		<div
			className='back-drop'
			onClick={(e) => {
				if (e.target === e.currentTarget) {
					modal(false);
				}
			}}
		>
			<div className='w-50 mx-auto mt-5'>
				<Card>
					<form
						autoComplete='off'
						onSubmit={(e) => {
							e.preventDefault();
						}}
					>
						<h2 className='mb-2'>Edit Your Task</h2>
						<div className='form-floating'>
							<input
								id='floatingInput'
								type='text'
								value={name}
								onChange={(e) => {
									setName(e.target.value);
								}}
								className='form-control mt-1'
								placeholder='Enter your Todo'
							/>
							<label htmlFor='floatingInput'>
								Enter Your Task
							</label>
						</div>
						<div className='form-group mt-2 float-end'>
							<button
								className='btn btn-secondary mx-2'
								type='button'
								onClick={() => modal(false)}
							>
								Cancel
							</button>
							<button
								className='btn btn-success'
								type='button'
								onClick={() => {
									confirm(data.id, { name });
								}}
							>
								Yes
							</button>
						</div>
					</form>
				</Card>
			</div>
		</div>
	);
};

const EditModal = ({ modal, data, confirm }) => {
	return createPortal(
		<Modal modal={modal} data={data} confirm={confirm} />,
		document.getElementById("modal")
	);
};

export default EditModal;
