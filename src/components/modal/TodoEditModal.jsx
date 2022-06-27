import React, { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import BackDrop from "../uility/BackDrop";
import FloatingInput from "../uility/FloatingInput";
import Form from "../uility/Form";
import FormGroup from "../uility/FormGroup";
import Card from "../uility/Card";
import "./modal.css";
import { updateTodo } from "../../api/Ajax";
import Context from "../../store/Context";
import toast from "react-hot-toast";


const CardFooter = ({ open }) => {
	return (
		<FormGroup cls={["mt-2", "float-end"]}>
			<button
				className='btn btn-secondary me-2'
				type='button'
				onClick={() => {
					open(false);
				}}
			>
				Cancel
			</button>
			<button className='btn btn-success'>Update</button>
		</FormGroup>
	);
};

const CardHeader = () => {
	return <span className='fw-bold h4'>Task Edit</span>;
};

const Modal = ({ open,data }) => {
	const { dispatch } = useContext(Context);
	const  {name,id} = data;
	const [todo,setTodo] = useState(name)
	const submit = (e) => {
		e.preventDefault();
		updateTodo(id,{name:todo}).then(res => {
			dispatch({type:'UPDATE',data:res.data.todos})
			toast.success(res.data.message)
			open(false);
		})
	}
	return (
		<BackDrop>
			<div className='row g-0 justify-content-center mt-5'>
				<div className='col-5'>
					<Form autocomplete='off' onsubmit={submit}>
						<Card
							card={["p-3"]}
							body={["p-0 py-4"]}
							cardHeader={<CardHeader />}
							cardFooter={<CardFooter open={open} />}
						>
							<FormGroup cls={["mt-2"]}>
								<FloatingInput label='Update Your Task' value={todo} onchange={(e)=>{
									setTodo(e.target.value)
								}} />
							</FormGroup>
						</Card>
					</Form>
				</div>
			</div>
		</BackDrop>
	);
};

const TodoEditModal = ({ open,data }) => {
	const [openModal, setOpenModal] = useState(false);
	useEffect(()=> {
		setOpenModal(open)
	},[open])
	if (openModal) {
		return createPortal(
			<Modal open={setOpenModal}  data={data}/>,
			document.getElementById("modal")
		);
	}
};

export default TodoEditModal;
