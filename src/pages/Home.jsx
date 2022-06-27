import React, { useContext, useEffect,useState } from "react";
import TodoCreateForm from "../components/Form/TodoCreateForm";
import Container from "../components/uility/Container";
import Card from "../components/uility/Card";
import Context from "../store/Context";
import {  getTodo } from "../api/Ajax";
import TodoEditModal from "../components/modal/TodoEditModal";
import Pagination from '../components/uility/Pagination'

const Home = () => {
	const { todos, dispatch } = useContext(Context);
	const [editModal, setEditModal] = useState(null);

	useEffect(() => {
		getTodo()
			.then((res) => {
				dispatch({ type: "STORE", data: res.data.todos });
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);


	return (
		<>
	 		<TodoEditModal open={editModal} data={editModal}/>
			<Container>
				<div className='row justify-content-center mt-5'>
					<div className='col-md-6'>
						<h2 className='mb-3'>Todo App</h2>
						<Card>
							<TodoCreateForm />
						</Card>
					</div>
				</div>
				<div className='row justify-content-center mt-5'>
					<div className='col-md-6'>
						<h2 className=''>Your Task List</h2>
						<Card body={["p-0"]} cardFooter={<Pagination/>}>
							<table className='table mb-0 table-striped'>
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
														type='checkbox'
														value={todo.id}
													/>
												</td>
												<td>{index + 1}</td>
												<td>
													<span>{todo.name}</span>
												</td>
												<td>
													<button
														className='btn btn-warning text-white me-2'
														onClick={(e) => {
															setEditModal(pre => ({...pre,...todo}))
														}}
													>
														Edit
													</button>
													<button
														id={todo.id}
														className='btn btn-danger'
														type='button'
														onClick={(e) => {}}
													>
														Delete
													</button>
												</td>
											</tr>
										);
									})}
									{!todos.length && (
										<tr>
											<td colSpan='100%'>No Data</td>
										</tr>
									)}
								</tbody>
								{/* {idList.length > 0 && (
									<tfoot>
										<tr>
											<td colSpan='100%'>
												<button
													className='btn btn-danger w-100'
													type='button'
													onClick={() => {}}
												>
													Delete Checked Task
												</button>
											</td>
										</tr>
									</tfoot>
								)} */}
							</table>
						</Card>
					</div>
				</div>
			</Container>
		</>
	);
};

export default Home;
