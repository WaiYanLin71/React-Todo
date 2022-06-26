import React from "react";
import { createPortal } from "react-dom";
import Card from "../uility/Card";
import "./modal.css";

const Modal = ({confirm,modal}) => {
	return (
		<div className="back-drop" onClick={(e)=>{
			if(e.target === e.currentTarget){
				modal(false)
			}
		}}>
			<div className='delete-modal'>
				<form>
					<Card>
						<div className='bg-white'>Are You Want To Delete?</div>
						<div className='d-flex justify-content-end mt-3'>
							<button className='btn btn-secondary mx-2' type="button" onClick={()=> modal(false)}>
								Cancel
							</button>
							<button  className='btn btn-danger' type='button' onClick={confirm}>
								Yes
							</button>
						</div>
					</Card>
				</form>
			</div>
		</div>
	);
};

const DeleteModal = ({modal,confirm}) => {
	return createPortal(<Modal confirm={confirm} modal={modal}/>, document.getElementById("modal"));
};

export default DeleteModal;
