import React, { useContext, useEffect, useState } from "react";
import TodoCreateForm from "../components/Form/TodoCreateForm";
import Container from "../components/uility/Container";
import Card from "../components/uility/Card";
import axios from "axios";
import Context from "../store/Context";
import DeleteModal from "../components/modal/DeleteModal";
import { deleteTodo, editTodo, updateTodo } from "../api/Ajax";
import toast from "react-hot-toast";
import EditModal from "../components/modal/EditModal";
import DeleteManyModal from "../components/modal/DeleteManyModal";

const Home = () => {
	const { todos, dispatch } = useContext(Context);
	const [deleteModal, setDeleteModal] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [id, setId] = useState(null);
	const [editData, setEditData] = useState({});
	const [idList, setIdList] = useState([]);
	const [deleteManyModal, setDeleteManyModal] = useState(false);

	useEffect(() => {
		axios
			.get("http://127.0.0.1:8000/api/todos")
			.then((res) => {
				dispatch({ type: "STORE", data: res.data.todos });
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const confimDelete = () => {
		deleteTodo(id).then((res) => {
			dispatch({ type: "DELETE", id: res.data.id });
			toast.success(res.data.message);
			setId(null);
			setDeleteModal(false);
		});
	};

	const findData = (id) => {
		editTodo(id)
			.then((res) => {
				setEditData(res.data);
				setEditModal(true);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const confirmUpdate = (id, data) => {
		updateTodo(id, data)
			.then((res) => {
				dispatch({ type: "UPDATE", data: res.data.todos });
				toast.success("Updated Successfully");
				setEditModal(false);
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};

	const hasId = (e) => {
		if (e.target.checked) {
			setIdList((pre) => [...pre, Number(e.target.value)]);
			return;
		}
		setIdList((pre) =>
			pre.filter((id) => Number(id) !== Number(e.target.value))
		);
	};

	return (
		<>
			{deleteManyModal && (
				<DeleteManyModal modal={setDeleteManyModal} id={idList} />
			)}
			{editModal && (
				<EditModal
					modal={setEditModal}
					data={editData}
					confirm={confirmUpdate}
				/>
			)}
			{deleteModal && (
				<DeleteModal modal={setDeleteModal} confirm={confimDelete} />
			)}
			<Container>
				<div className="row justify-content-center mt-5">
					<div className="col-md-6">
						<h2 className="mb-3">Todo Appssa</h2>
						<Card>
							<TodoCreateForm />
						</Card>
					</div>
				</div>
				<div className="row justify-content-center mt-5">
					<div className="col-md-6">
						<h2 className="">Your Task Listsss</h2>
						<Card card="shadow-sm" cardBody="p-0">
							<table className="table mb-0 table-striped">
								<thead>
									<tr>
										<th></th>
										<th>No</th>
										<th>Name</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									{todos.map((todo, index) => {
										return (
											<tr
												key={index}
												style={{
													verticalAlign: "middle",
												}}
											>
												<td>
													<input
														type="checkbox"
														value={todo.id}
														onClick={hasId}
													/>
												</td>
												<td>{index + 1}</td>
												<td>
													{idList.includes(
														Number(todo.id)
													) ? (
														<strike>
															{todo.name}
														</strike>
													) : (
														<span>{todo.name}</span>
													)}
												</td>
												<td>
													<button
														id={todo.id}
														className="btn btn-warning text-white mx-2"
														onClick={(e) => {
															findData(
																e.target.id
															);
														}}
													>
														Edit
													</button>
													<button
														id={todo.id}
														className="btn btn-danger"
														type="button"
														onClick={(e) => {
															setDeleteModal(
																true
															);
															setId(e.target.id);
														}}
													>
														Delete
													</button>
												</td>
											</tr>
										);
									})}
									{!todos.length && (
										<tr>
											<td colSpan="100%">No Data</td>
										</tr>
									)}
								</tbody>
								{idList.length > 0 && (
									<tfoot>
										<tr>
											<td colSpan="100%">
												<button
													className="btn btn-danger w-100"
													type="button"
													onClick={() => {
														setDeleteManyModal(
															true
														);
													}}
												>
													Delete Checked Task
												</button>
											</td>
										</tr>
									</tfoot>
								)}
							</table>
						</Card>
					</div>
				</div>
			</Container>
		</>
	);
};

export default Home;
