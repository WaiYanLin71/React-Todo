import React, { useContext, useState, useEffect } from "react";
import Context from "../../store/Context";
import toast from "react-hot-toast";
import { createTodo } from "../../api/Ajax";
import FloatingInput from "../uility/FloatingInput";
import BtnSuccess from "../Button/BtnSuccess";
import FormGroup from "../uility/FormGroup";
import Form from "../uility/Form";

const TodoCreateForm = () => {
	const [name, setName] = useState("");
	const { dispatch } = useContext(Context);
	const [error, setError] = useState("");

	useEffect(() => {
		let cleaner = setTimeout(() => {
			let regex = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9])$/;

			if (!regex.test(name) && name.length > 0) {
				if (name.length > 10) {
					setError("The maximun character length is 10.");
					return;
				}

				setError(
					"The character must contains at least one Lowercase letter, Uppercase and Digit."
				);

				return;
			}
			setError("");
		}, 500);

		return () => {
			clearTimeout(cleaner);
		};
	}, [name]);

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
		<Form onsubmit={formSubmit}>
			<FormGroup cls={["mt-2"]}>
				<FloatingInput
					label="Enter Your Task"
					error={error}
					cls={error && ["is-invalid"]}
					placeholder="Enter Your Task"
					onchange={(e) => {
						setName(e.target.value);
					}}
				/>
			</FormGroup>
			<FormGroup cls={["mt-2", "float-end"]}>
				<BtnSuccess type="submit">Create</BtnSuccess>
			</FormGroup>
		</Form>
	);
};

export default TodoCreateForm;
