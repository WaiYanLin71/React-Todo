import React, { useContext, useState } from "react";
import Context from "../../store/Context";
import toast from "react-hot-toast";
import { createTodo } from "../../api/Ajax";

const TodoCreateForm = () => {
	const [name, setName] = useState("");
	const { dispatch } = useContext(Context);

	const formSubmit = (e) => {
		e.preventDefault();
		createTodo({ name })
			.then((res) => {
				toast.success("Created Successfully");
				dispatch({ type: "CREATE", data: res.data.todos });
				setName("");
			})
			.catch((error) => console.error(error));
	};

	return (
		<form onSubmit={formSubmit} autoComplete="off">
			<div className="form-floating">
				<input
					id="floatingInput"
					type="text"
					value={name}
					className="form-control mt-1"
					placeholder="Enter your Todo"
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
				<label htmlFor="floatingInput">Enter Your Task</label>
			</div>
			<div className="form-group mt-2">
				{/* <span className="text-danger">{error}</span> */}
				{/* {!error && <span className="text-success">Success</span>} */}
			</div>
			<div className="form-group mt-2 float-end">
				<button className="btn btn-success" type="submit">
					create
				</button>
			</div>
		</form>
	);
};

export default TodoCreateForm;
